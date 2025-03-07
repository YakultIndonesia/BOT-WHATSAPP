const axios = require("axios");
const virtu = require("./virtusim");

const EXPIRATION_TIME = 570000; // 9 menit 30 detik
const CHECK_INTERVAL = 15000; // 15 detik

async function safeApiCall(callback) {
  try {
    return await callback();
  } catch (error) {
    console.error("API Error:", error.message || error);
    return null;
  }
}

// Fungsi untuk mengatur waktu kedaluwarsa OTP
function setOrderOtpExpiration(user, yilzi) {
  const timeoutId = setTimeout(async () => {
    const status = await safeApiCall(() =>
      virtu.ChangeStatusNumber(user.order_otp_id, "2")
    );
    if (status && user.order_otp) {
      user.order_otp = false;
      user.order_otp_id = null;
      delete user.order_otp_number;
      delete user.order_otp_exp;

      yilzi.sendMessage(user.saweria.chat, { text: "Order Expired!" });
    }
  }, EXPIRATION_TIME);

  // Jangan simpan objek `Timeout` di dalam user
  user.order_otp_exp = Date.now() + EXPIRATION_TIME; // Simpan waktu kedaluwarsa
}

// Fungsi rekursif untuk memeriksa status OTP
async function checkOtpStatus(user, yilzi) {
  const status = await safeApiCall(() => virtu.CheckAllActiveNumber());
  if (status.status === "false") return;
  const find = status.data.find((x) => x.id == user.order_otp_id);
  if (find.status === "Otp Diterima") {
    yilzi.sendMessage(user.saweria.chat, {
      text: `Berikut Adalah OTP atau SMS:\n\n${find.otp}`,
    });
  } else {
    setTimeout(() => checkOtpStatus(user, yilzi), CHECK_INTERVAL);
  }
}

// Fungsi rekursif untuk memeriksa status pembayaran
async function checkPaymentStatus(user, yilzi) {
  const paymentStatus = await safeApiCall(() =>
    axios.get(
      `https://api.abidev.tech/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`
    )
  );

  if (paymentStatus?.data?.amount == user.saweria.amount && user.saweria) {
    user.status_deposit = false;

    await yilzi.sendMessage(
      user.saweria.chat,
      {
        text: `PEMBAYARAN BERHASIL DITERIMA ✅\n\nID:${user.saweria.idDeposit}\nAmount: Rp${user.saweria.amount}\nProduct: Order Nokos Indonesia\n\Payment ${paymentStatus.data.brand_name}`,
      },
      { quoted: user.saweria.msg }
    );
    await yilzi.sendMessage(user.saweria.chat, {
      delete: user.saweria.msg.key,
    });
    const createOrder = await safeApiCall(() => virtu.OrderNumber("716"));
    if (!createOrder?.status) {
      return yilzi.sendMessage(user.saweria.chat, {
        text: `Error: ${createOrder?.data?.msg}`,
      });
    }

    user.order_otp = true;
    user.order_otp_id = createOrder.data.id;
    user.order_otp_number = createOrder.data.number;

    yilzi.sendMessage(user.saweria.chat, {
      text: `Berhasil Order Nokos Indonesia WhatsApp\n\n*Order ID:* ${createOrder.data.id}\n*Nomor:* ${createOrder.data.number}\n*Expire:* 10 Menit`,
    });

    setOrderOtpExpiration(user, yilzi); // Atur waktu kedaluwarsa OTP
    checkOtpStatus(user, yilzi); // Mulai monitor OTP
  } else {
    setTimeout(() => checkPaymentStatus(user, yilzi), CHECK_INTERVAL);
  }
}

// Fungsi utama untuk menangani pesanan Nokos
async function handleOrderNokos(m, db, yilzi, text) {
  const user = db.users[m.sender];
  if (user.status_deposit) {
    return m.reply(
      "Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!"
    );
  }

  if (!text || isNaN(text)) return m.reply("Nomor harus berupa angka!");
  if (text > 5) {
    return m.reply(
      "Nomor tidak ada dalam list!\n\nSilakan ketik *listnokos* untuk melihat list Nokos!"
    );
  }

  const amount = Number(5100) + Math.floor(Math.random() * (250 - 110 + 1)) + 110;
  const paymentInfo = await safeApiCall(() =>
    axios.get(
      `https://api.abidev.tech/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}`
    )
  );

  if (!paymentInfo?.data?.result) {
    return m.reply("Terjadi kesalahan saat membuat pembayaran.");
  }

  const {
    transactionId,
    amount: totalAmount,
    qrImageUrl,
  } = paymentInfo.data.result;

  const messageText = `
*▧ INFORMASI PEMBAYARAN - YILZI SHOP*

📄 Detail Pembayaran:
• ID Transaksi: ${transactionId}
• Total Pembayaran: Rp${totalAmount}
• Produk: Order Nokos Indonesia
• Masa Berlaku Pembayaran: 5 Menit

📌 Catatan Penting:
*Pembayaran melalui QRIS hanya berlaku selama 5 menit.*
*Jika pembayaran berhasil, bot akan langsung mengirimkan notifikasi status pembayaran Anda.*

💬 Hubungi Kami jika ada pertanyaan.
Terima kasih telah mempercayakan kebutuhan Anda kepada Yilzi Shop!
`;

  const msgQr = await yilzi.sendMessage(
    m.chat,
    { image: { url: qrImageUrl }, caption: messageText },
    { quoted: m }
  );

  user.status_deposit = true;
  user.saweria = {
    msg: msgQr,
    chat: m.sender,
    idDeposit: transactionId,
    amount: totalAmount.toString(),
  };

  setOrderOtpExpiration(user, yilzi); // Atur waktu kedaluwarsa OTP
  checkPaymentStatus(user, yilzi); // Mulai cek status pembayaran
}

module.exports = { handleOrderNokos };
