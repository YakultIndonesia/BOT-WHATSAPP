const os = require("os");

async function handler(m, { yilzi, isCreator, isPremium, qtext, runtime }) {
  try {
    // Teks utama
    let teks = `
╔════════════════════════════╗
║             🌟 SHOP YILZII BOT V5 🌟                 ║
╚════════════════════════════╝

🎉 *INFORMASI BOT* 🎉
╭───────────────╮
├ 🟢 *Nama Bot* : ${global.botname2 || 'Yilzi Bot'}
├ 🔵 *Mode* : ${yilzi.public ? "Public" : "Self"}
├ 🔴 *Creator* : @${global.owner || 'creator'}
├ 🕒 *Runtime* : ${runtime(process.uptime())}
├ 💻 *VPS Uptime* : ${runtime(os.uptime())}
╰───────────────╯

👤 *INFORMASI USER* 👤
╭───────────────╮
├ 📞 *Nomor* : ${m.sender.split("@")[0]}
├ 💎 *Status* : ${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}
╰───────────────╯
`;

    // Sections untuk menu Panel
    const sections = [{
      title: "-# Pilihan Menu Bot V5",
      rows: [{
        title: "ALL MENU BOT",
        rowId: ".allmenu",
        description: "Untuk Melihat Lengkap Bot"
      }, {
        title: "PRODUK MENU",
        rowId: ".produk",
        description: "Untuk Melihat List Produk Bot"
      }]
    }];
    
    // Pesan berbentuk list
    const listMessage = {
      text: teks,
      buttonText: "Klik Disini untuk Pilih",
      sections
    };

    // Ensure `from` is defined correctly
    const from = m.chat;

    // Kirim pesan
    await yilzi.sendMessage(from, listMessage, { quoted: m });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    await m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi.");
  }
}

handler.command = ["menu", ".menu", "help", "info"];

module.exports = handler;
