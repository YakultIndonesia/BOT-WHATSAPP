async function handler(m, { yilzi }) {
  // Header untuk Panel Menu
  const teksHeader = `
╔═════════════════════════════════════════╗
║            ⚙️ *PANEL MENU* ⚙️             ║
╚═════════════════════════════════════════╝

🔧 *Kelola Hosting Anda dengan Mudah!* 🔧
🔑 *Hanya untuk Owner atau Admin Terpilih* 🔑

📋 *Informasi Bot*
├ 🤖 *Nama Bot*: ${global.botname2}
├ 📅 *Tanggal*: ${new Date().toLocaleDateString("id-ID")}
├ ⏱️ *Runtime*: ${runtime(process.uptime())}
╰───────────────────────────────╯

⚡ *Pilih menu di bawah untuk memulai pengaturan hosting Anda.* ⚡
`;

  // Sections untuk Panel Menu
  const sections = [
    {
      title: "⚙️ *Panel Hosting 1GB hingga 10GB* ⚙️",
      rows: [
        { title: "📦 Panel 1GB", rowId: ".1gb", description: "Kelola hosting 1GB untuk kebutuhan dasar." },
        { title: "📦 Panel 2GB", rowId: ".2gb", description: "Kelola hosting 2GB untuk kebutuhan sedang." },
        { title: "📦 Panel 3GB", rowId: ".3gb", description: "Kelola hosting 3GB untuk kebutuhan ekstra." },
        { title: "📦 Panel 4GB", rowId: ".4gb", description: "Kelola hosting 4GB untuk kebutuhan profesional." },
        { title: "📦 Panel 5GB", rowId: ".5gb", description: "Kelola hosting 5GB untuk kebutuhan premium." },
        { title: "📦 Panel 6GB", rowId: ".6gb", description: "Kelola hosting 6GB dengan kapasitas besar." },
        { title: "📦 Panel 7GB", rowId: ".7gb", description: "Kelola hosting 7GB untuk bisnis menengah." },
        { title: "📦 Panel 8GB", rowId: ".8gb", description: "Kelola hosting 8GB untuk bisnis besar." },
        { title: "📦 Panel 9GB", rowId: ".9gb", description: "Kelola hosting 9GB untuk kebutuhan korporasi." },
        { title: "📦 Panel 10GB", rowId: ".10gb", description: "Kelola hosting 10GB tanpa batas." },
      ],
    },
    {
      title: "⚙️ *Panel Hosting Unlimited* ⚙️",
      rows: [
        { title: "📦 Panel Unlimited", rowId: ".unli", description: "Kelola hosting tanpa batas untuk kebutuhan premium." },
      ],
    },
    {
      title: "⚙️ *Panel Hosting Versi 2 (1GB hingga 10GB)* ⚙️",
      rows: [
        { title: "📦 Panel 1GB v2", rowId: ".1gbv2", description: "Kelola hosting 1GB untuk kebutuhan dasar." },
        { title: "📦 Panel 2GB v2", rowId: ".2gbv2", description: "Kelola hosting 2GB untuk kebutuhan sedang." },
        { title: "📦 Panel 3GB v2", rowId: ".3gbv2", description: "Kelola hosting 3GB untuk kebutuhan ekstra." },
        { title: "📦 Panel 4GB v2", rowId: ".4gbv2", description: "Kelola hosting 4GB untuk kebutuhan profesional." },
        { title: "📦 Panel 5GB v2", rowId: ".5gbv2", description: "Kelola hosting 5GB untuk kebutuhan premium." },
        { title: "📦 Panel 6GB v2", rowId: ".6gbv2", description: "Kelola hosting 6GB dengan kapasitas besar." },
        { title: "📦 Panel 7GB v2", rowId: ".7gbv2", description: "Kelola hosting 7GB untuk bisnis menengah." },
        { title: "📦 Panel 8GB v2", rowId: ".8gbv2", description: "Kelola hosting 8GB untuk bisnis besar." },
        { title: "📦 Panel 9GB v2", rowId: ".9gbv2", description: "Kelola hosting 9GB untuk kebutuhan korporasi." },
        { title: "📦 Panel 10GB v2", rowId: ".10gbv2", description: "Kelola hosting 10GB tanpa batas." },
      ],
    },
  ];

  // Kirim menu dengan button
  await yilzi.sendMessage(
    m.chat,
    {
      text: teksHeader,
      footer: "Pilih menu untuk memulai pengaturan Anda:",
      buttonText: "Klik untuk memilih",
      sections: sections,
    },
    { quoted: m }
  );
}

// Konfigurasi command
handler.command = [".panelmenu", ".panel"];
module.exports = handler;