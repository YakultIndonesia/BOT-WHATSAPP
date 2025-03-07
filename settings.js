const fs = require("fs");
const chalk = require("chalk");

// ** Settings Bot **
global.owner = "6282245415403";
global.versi = "0.0.4";
global.namaOwner = "Yilzi";
global.packname = "Bot WhatsApp";
global.botname = "Shop Bot V5 Yilzi";
global.botname2 = "Shop Bot V5";

global.tempatDB = "database.json"; // Jangan ubah
global.pairing_code = true; // Jangan ubah

// ** Settings Link / Tautan **
global.linkOwner = "https://wa.me/6282245415403";
global.linkGrup = "https://t.me/Yilzi_informasi";
global.linkGrup2 = "https://chat.whatsapp.com/CqiwCo3l5Y5BK2sqOY2Amr";

// ** Delay JPM & Push Contact ** (1000 ms = 1 detik)
global.delayJpm = 7000;
global.delayPushkontak = 7000;

// ** Settings Channel / Saluran **
global.linkSaluran = "https://whatsapp.com/channel/0029VarZaKGLdQedA8hiw42D";
global.idSaluran = "";
global.namaSaluran = "Yilzi Official - Channel";

// ** Payment Gateway **
global.merchantIdOrderKuota = "";
global.apiOrderKuota = "";
global.qrisOrderKuota = "";

// ** Setting Token Cloud **
global.apitokendo = "*"; // API Digital Ocean

// ** Settings All Payment **
global.dana = "081359123789";
global.ovo = "Tidak Tersedia";
global.gopay = "081359123789";
global.qris = "https://img0.pixhost.to/images/16/518788250_yilzizopedia.jpg";

// ** Settings API Panel Pterodactyl **
global.egg = "15"; // Egg ID
global.nestid = "5"; // Nest ID
global.loc = "1"; // Location ID
global.domain = "https://yilziii.publichosting.my.id";
global.apikey = "ptla_lVJOoZG1OxbWV9JIzVf1paFtdCOqH6oZDglwCjlUotE"; // PTLA
global.capikey = "ptlc_fLhbghmKZ0E9QSVTV3hhAcGHXm1rJxT4F2xWToFtHMT";

// ** Settings API Panel Pterodactyl Server 2 **
global.eggV2 = "15"; // Egg ID
global.nestidV2 = "5"; // Nest ID
global.locV2 = "1"; // Location ID
global.domainV2 = "https://yilziii.publichosting.my.id";
global.apikeyV2 = "ptla_lVJOoZG1OxbWV9JIzVf1paFtdCOqH6oZDglwCjlUotE"; // PTLA
global.capikeyV2 = "ptlc_fLhbghmKZ0E9QSVTV3hhAcGHXm1rJxT4F2xWToFtHMT"; // PTLC

// ** Settings API Subdomain **
global.subdomain = {
  "yilzizpedia.us.kg": {
    zone: "9e4e70b438a65c1d3e6d0e48b82d79de",
    apitoken: "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o",
  },
  "marketplace.us.kg": {
    zone: "2f33118c3db00b12c38d07cf1c823ed1",
    apitoken: "6WS_Op6yuPOWcO17NiO-sOP8Vq9tjSAFZyAn82db",
  },
  "pteroserver.us.kg": {
    zone: "f693559a94aebc553a68c27a3ffe3b55",
    apitoken: "ZPAXx7CL51PtbGweL2pE3BsI3x0hgTgLuy56iXuo",
  },
  "digitalserver.us.kg": {
    zone: "df13e6e4faa4de9edaeb8e1f05cf1a36",
    apitoken: "HXVf4soYFM3iiOewHZ6tk6LEnG9f7m7CVhU0EoVz",
  },
  "xyz-store.biz.id": {
    zone: "8ae812c35a94b7bd2da993a777b8b16d",
    apitoken: "oqZafkd3mSt1bABD9MMTidpCtD9VZdiPTjElVKJB",
  },
  "shopserver.us.kg": {
    zone: "54ca38e266bfdf2dcdb7f51fd79c2db5",
    apitoken: "4qOupI-Of-6yNrBaeS1-H0KySuKCd0wS-x0P5XQ4",
  },
  "Yilzi.web.id": {
    zone: "46d0cd33a7966f0be5afdab04b63e695",
    apitoken: "CygwSHXRSfZnsi1qZmyB8s4qHC12jX_RR4mTpm62",
  },
  "Yilziku.my.id": {
    zone: "f6d1a73a272e6e770a232c39979d5139",
    apitoken: "0Mae_Rtx1ixGYenzFcNG9bbPd-rWjoRwqN2tvNzo",
  },
  "Yilzi.me": {
    zone: "a1c08ecd2f96516f2a85250b98850e8b",
    apitoken: "f3IBOeIjRHYSsRhzxBO7yiwl-Twn3fqjmdkLdwlf",
  },
  "cloud-shopp.biz.id": {
    zone: "365f57282cbea3a6d5a738f107df244e",
    apitoken: "hZKxD6afDLF-wsg1qVA-qbDK_h8lBE4NtqnVZPP8",
  },
};

// ** Message Command **
global.mess = {
  owner: "❌ *Akses Ditolak*\nFitur ini hanya untuk owner bot!",
  admin: "❌ *Akses Ditolak*\nFitur ini hanya untuk admin grup!",
  botAdmin: "❌ *Akses Ditolak*\nFitur ini hanya untuk ketika bot menjadi admin!",
  group: "❌ *Akses Ditolak*\nFitur ini hanya untuk dalam grup!",
  private: "❌ *Akses Ditolak*\nFitur ini hanya untuk dalam private chat!",
  prem: "❌ *Akses Ditolak*\nFitur ini hanya untuk user premium!",
  wait: "⏳ Loading...",
  error: "❌ Error!",
  done: "✅ Done",
};

// ** Auto-Reload Config File **
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});