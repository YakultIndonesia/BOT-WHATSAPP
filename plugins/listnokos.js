const fetch = require("node-fetch");

let handler = async (m, { yilzi, isCreator }) => {
  const userId = m.sender;

  try {
    // Pesan utama
    const teks = `
╭─━━━━━━━━━━━━━━━━━━━━━━─╮
   *✨️ Selamat Datang di Bot Shop V5 ✨️*  
╰─━━━━━━━━━━━━━━━━━━━━━━─╯

🔹 *List Nokos* (Nomor Kosong) dari berbagai negara tersedia untuk Anda:  
Pilih salah satu kategori yang tersedia untuk memulai pemesanan.

╭─━━━━━━━━━━━━━━━━━━━━━━─╮
📌 *Info*:  
- Pastikan Anda memilih kategori dengan benar.
- Transaksi 100% aman dan terpercaya.
- Harga tercantum sesuai kategori negara.
╰─━━━━━━━━━━━━━━━━━━━━━━─╯
`;

    // Menu opsi
    const sections = [
      {
        title: "🌍 Pilih Negara untuk Memesan Nokos 🌍",
        rows: [
          { title: "🇮🇩 Nokos Indonesia", rowId: `.ordernokos indonesia`, description: "Nokos WhatsApp untuk wilayah +62 - Rp 5.000" },
          { title: "🇰🇷 Nokos Korea Selatan", rowId: `.ordernokos korea`, description: "Nokos WhatsApp untuk wilayah +82 - Rp 8.000" },
          { title: "🇺🇸 Nokos USA", rowId: `.ordernokos usa`, description: "Nokos WhatsApp untuk wilayah +1 - Rp 10.000" },
          { title: "🇯🇵 Nokos Jepang", rowId: `.ordernokos jepang`, description: "Nokos WhatsApp untuk wilayah +81 - Rp 9.000" },
          { title: "🇰🇭 Nokos Kamboja", rowId: `.ordernokos kamboja`, description: "Nokos WhatsApp untuk wilayah +855 - Rp 7.000" },
          { title: "🇮🇸 Nokos Islandia", rowId: `.ordernokos islandia`, description: "Nokos WhatsApp untuk wilayah +354 - Rp 12.000" }
        ]
      }
    ];

    // Kirim pesan list
    await yilzi.sendMessage(
      m.chat,
      {
        text: teks,
        buttonText: "Klik untuk Melihat List Nokos",
        sections
      },
      { quoted: m }
    );
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    m.reply("❌ Gagal memproses transaksi. Silakan coba lagi nanti.");
  }
};

// Konfigurasi command
handler.command = ["listnokos"];
handler.owner = true; // Hanya untuk owner

module.exports = handler;