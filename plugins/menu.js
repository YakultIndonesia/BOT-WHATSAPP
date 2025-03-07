const fs = require("fs");
const os = require("os");

async function handler(m, { yilzi, isCreator, isPremium, runtime }) {
  // Header Menu
  let teksHeader = `
╔════════════════════════════╗
║         🌟 *YILZI BOT* 🌟       ║
╚════════════════════════════╝

🎉 *INFORMASI BOT* 🎉
╭───────────────╮
├ 🟢 *Nama Bot* : ${global.botname2}
├ 🔵 *Mode* : ${yilzi.public ? "Public" : "Self"}
├ 🔴 *Creator* : @${global.owner}
├ 🕒 *Runtime* : ${runtime(process.uptime())}
├ 💻 *VPS Uptime* : ${runtime(os.uptime())}
╰───────────────╯

👤 *INFORMASI USER* 👤
╭───────────────╮
├ 📞 *Nomor* : ${m.sender.split("@")[0]}
├ 💎 *Status* : ${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}
╰───────────────╯

🔔 Pilih menu di bawah ini sesuai kebutuhan Anda:
`;

  // Sections untuk menu
  const sections = [
    {
      title: "🔹 *Other Menu* 🔹",
      rows: [
        { title: "📋 Cek ID Channel", rowId: ".cekidch", description: "Melihat ID Channel." },
        { title: "📋 Cek ID Group", rowId: ".cekidgc", description: "Melihat ID Group Anda." },
        { title: "🎨 Quick Chat", rowId: ".qc", description: "Kirim pesan cepat." },
        { title: "🕵️‍♀️ Read View Once", rowId: ".readviewonce", description: "Buka pesan sekali lihat." },
        { title: "🌟 Sticker WM", rowId: ".stickerwm", description: "Buat stiker dengan watermark." },
        { title: "🌟 Sticker", rowId: ".sticker", description: "Konversi gambar jadi stiker WhatsApp." },
      ],
    },
    {
      title: "🔹 *Search Menu* 🔹",
      rows: [
        { title: "🔍 YouTube Search", rowId: ".yts", description: "Cari video di YouTube." },
        { title: "🔍 APK Mod", rowId: ".apkmod", description: "Temukan APK modifikasi." },
        { title: "🔍 Pinterest", rowId: ".pinterest", description: "Cari gambar menarik di Pinterest." },
      ],
    },
    {
      title: "🔹 *Tools Menu* 🔹",
      rows: [
        { title: "🤖 AI", rowId: ".ai", description: "Konsultasi AI pintar." },
        { title: "🤖 GPT", rowId: ".gpt", description: "Chat dengan GPT canggih." },
        { title: "🔗 To URL", rowId: ".tourl", description: "Konversi file jadi URL." },
        { title: "📸 Screenshot Web", rowId: ".ssweb", description: "Ambil tangkapan layar website." },
        { title: "🈴 Translate", rowId: ".translate", description: "Terjemahkan teks." },
        { title: "📂 To HD", rowId: ".tohd", description: "Konversi gambar ke HD." },
        { title: "🔗 Shortlink", rowId: ".shortlink", description: "Perpendek tautan dengan mudah." },
      ],
    },
    {
      title: "🔹 *Download Menu* 🔹",
      rows: [
        { title: "🎥 TikTok", rowId: ".tiktok", description: "Unduh video TikTok tanpa watermark." },
        { title: "🎵 TikTok MP3", rowId: ".tiktokmp3", description: "Konversi video TikTok jadi MP3." },
        { title: "📷 Instagram", rowId: ".instagram", description: "Unduh konten Instagram." },
        { title: "🎵 YouTube MP3", rowId: ".ytmp3", description: "Unduh MP3 dari YouTube." },
        { title: "🎥 YouTube MP4", rowId: ".ytmp4", description: "Unduh MP4 dari YouTube." },
        { title: "🎧 Play Audio", rowId: ".play", description: "Putar musik favorit Anda." },
        { title: "🎥 Play Video", rowId: ".playvid", description: "Putar video favorit Anda." },
        { title: "💻 Git Clone", rowId: ".gitclone", description: "Clone repositori GitHub." },
        { title: "📁 MediaFire", rowId: ".mediafire", description: "Unduh file dari MediaFire." },
      ],
    },
    {
      title: "🔹 *Shop Menu* 🔹",
      rows: [
        { title: "💳 Buy VPS", rowId: ".buyvps", description: "Beli VPS murah." },
        { title: "🛍️ Produk", rowId: ".produk", description: "Lihat produk unggulan." },
        { title: "🎲 Gacha Spin", rowId: ".spin", description: "Mainkan Gacha Spin." },
        { title: "🎮 Buy Panel", rowId: ".buypanel", description: "Beli panel hosting termurah." },
        { title: "📞 List Nokos", rowId: ".listnokos", description: "Lihat daftar nomor kosong." },
      ],
    },
    {
      title: "🔹 *Panel Menu* 🔹",
      rows: [
        { title: "⚙️ Panel Menu", rowId: ".panelmenu", description: "Kelola panel bot Anda." },
      ],
    },
  ];

  // Kirim menu utama dengan button
  await yilzi.sendMessage(
    m.chat,
    {
      text: teksHeader,
      footer: "🔗 Yilzi Bot V5 - Pilih menu sesuai kebutuhan Anda.",
      buttonText: "Klik Di Sini",
      sections: sections,
    },
    { quoted: m }
  );
}

// Register command handler
handler.command = [".kontol", "allmenu", ".allmenu", "infobot"];
module.exports = handler;