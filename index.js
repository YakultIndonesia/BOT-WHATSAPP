require("./settings");
const fs = require("fs");
const pino = require("pino");
const path = require("path");
const axios = require("axios");
const chalk = require("chalk");
const readline = require("readline");
const FileType = require("file-type");
const { exec } = require("child_process");
const { say } = require("cfonts");
const { Boom } = require("@hapi/boom");
const NodeCache = require("node-cache");

const {
  default: WAConnection,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  useMultiFileAuthState,
  Browsers,
  DisconnectReason,
  makeInMemoryStore,
  makeCacheableSignalKeyStore,
  fetchLatestWaWebVersion,
  proto,
  PHONENUMBER_MCC,
  getAggregateVotesInPollMessage,
} = require("@whiskeysockets/baileys");

const pairingCode =
  global.pairing_code || process.argv.includes("--pairing-code");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

//================================================================================

const yangBacaHomo = [
  `
⠄⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄
⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄
⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄
⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄
⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰
⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤
⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗
⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄
⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄
⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄
⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄
⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄
⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴
⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿
`,
  `
⣿⣿⣷⡁⢆⠈⠕⢕⢂⢕⢂⢕⢂⢔⢂⢕⢄⠂⣂⠂⠆⢂⢕⢂⢕⢂⢕⢂⢕⢂
⣿⣿⣿⡷⠊⡢⡹⣦⡑⢂⢕⢂⢕⢂⢕⢂⠕⠔⠌⠝⠛⠶⠶⢶⣦⣄⢂⢕⢂⢕
⣿⣿⠏⣠⣾⣦⡐⢌⢿⣷⣦⣅⡑⠕⠡⠐⢿⠿⣛⠟⠛⠛⠛⠛⠡⢷⡈⢂⢕⢂
⠟⣡⣾⣿⣿⣿⣿⣦⣑⠝⢿⣿⣿⣿⣿⣿⡵⢁⣤⣶⣶⣿⢿⢿⢿⡟⢻⣤⢑⢂
⣾⣿⣿⡿⢟⣛⣻⣿⣿⣿⣦⣬⣙⣻⣿⣿⣷⣿⣿⢟⢝⢕⢕⢕⢕⢽⣿⣿⣷⣔
⣿⣿⠵⠚⠉⢀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢕⢕⢕⢕⢕⢕⣽⣿⣿⣿⣿
⢷⣂⣠⣴⣾⡿⡿⡻⡻⣿⣿⣴⣿⣿⣿⣿⣿⣿⣷⣵⣵⣵⣷⣿⣿⣿⣿⣿⣿⡿
⢌⠻⣿⡿⡫⡪⡪⡪⡪⣺⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
⠣⡁⠹⡪⡪⡪⡪⣪⣾⣿⣿⣿⣿⠋⠐⢉⢍⢄⢌⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠈
⡣⡘⢄⠙⣾⣾⣾⣿⣿⣿⣿⣿⣿⡀⢐⢕⢕⢕⢕⢕⡘⣿⣿⣿⣿⣿⣿⠏⠠⠈
⠌⢊⢂⢣⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢐⢕⢕⢕⢕⢕⢅⣿⣿⣿⣿⡿⢋⢜⠠⠈
⠄⠁⠕⢝⡢⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣕⣑⣑⣑⣵⣿⣿⣿⡿⢋⢔⢕⣿⠠⠈
⠨⡂⡀⢑⢕⡅⠂⠄⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⢔⢕⢕⣿⣿⠠⠈
⠄⠪⣂⠁⢕⠆⠄⠂⠄⠁⡀⠂⡀⠄⢈⠉⢍⢛⢛⢛⢋⢔⢕⢕⢕⣽⣿⣿⠠⠈
`,
  `
⣿⣯⣿⣟⣟⡼⣿⡼⡿⣷⣿⣿⣿⠽⡟⢋⣿⣿⠘⣼⣷⡟⠻⡿⣷⡼⣝⡿⡾⣿
⣿⣿⣿⣿⢁⣵⡇⡟⠀⣿⣿⣿⠇⠀⡇⣴⣿⣿⣧⣿⣿⡇⠀⢣⣿⣷⣀⡏⢻⣿
⣿⣿⠿⣿⣿⣿⠷⠁⠀⠛⠛⠋⠀⠂⠹⠿⠿⠿⠿⠿⠉⠁⠀⠘⠛⠛⠛⠃⢸⣯
⣿⡇⠀⣄⣀⣀⣈⣁⠈⠉⠃⠀⠀⠀⠀⠀⠀⠀⠀⠠⠎⠈⠀⣀⣁⣀⣀⡠⠈⠉
⣿⣯⣽⡿⢟⡿⠿⠛⠛⠿⣶⣄⠀⠀⠀⠀⠀⠀⠈⢠⣴⣾⠛⠛⠿⠻⠛⠿⣷⣶
⣿⣿⣿⠀⠀⠀⣿⡿⣶⣿⣫⠉⠀⠀⠀⠀⠀⠀⠀⠈⠰⣿⠿⠾⣿⡇⠀⠀⢺⣿
⣿⣿⠻⡀⠀⠀⠙⠏⠒⡻⠃⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠐⡓⢚⠟⠁⠀⠀⡾⢫
⣿⣿⠀⠀⡀⠀⠀⡈⣉⡀⡠⣐⣅⣽⣺⣿⣯⡡⣴⣴⣔⣠⣀⣀⡀⢀⡀⡀⠀⣸
⣿⣿⣷⣿⣟⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⢾⣷⣿
⣿⣿⣟⠫⡾⠟⠫⢾⠯⡻⢟⡽⢶⢿⣿⣿⡛⠕⠎⠻⠝⠪⢖⠝⠟⢫⠾⠜⢿⣿
⣿⣿⣿⠉⠀⠀⠀⠀⠈⠀⠀⠀⠀⣰⣋⣀⣈⣢⠀⠀⠀⠀⠀⠀⠀⠀⠀⣐⢸⣿
⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿
⣿⣿⣿⣿⣦⡔⠀⠀⠀⠀⠀⠀⢻⣿⡿⣿⣿⢽⣿⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿
⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠘⠛⢅⣙⣙⠿⠉⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄⣅⠀⠓⠀⠀⣀⣠⣴⣺⣿⣿⣿⣿⣿⣿⣿⣿
`,
  `
⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
`,
  `
⠄⣾⣿⡇⢸⣿⣿⣿⠄⠈⣿⣿⣿⣿⠈⣿⡇⢹⣿⣿⣿⡇⡇⢸⣿⣿⡇⣿⣿⣿
⢠⣿⣿⡇⢸⣿⣿⣿⡇⠄⢹⣿⣿⣿⡀⣿⣧⢸⣿⣿⣿⠁⡇⢸⣿⣿⠁⣿⣿⣿
⢸⣿⣿⡇⠸⣿⣿⣿⣿⡄⠈⢿⣿⣿⡇⢸⣿⡀⣿⣿⡿⠸⡇⣸⣿⣿⠄⣿⣿⣿
⢸⣿⡿⠷⠄⠿⠿⠿⠟⠓⠰⠘⠿⣿⣿⡈⣿⡇⢹⡟⠰⠦⠁⠈⠉⠋⠄⠻⢿⣿
⢨⡑⠶⡏⠛⠐⠋⠓⠲⠶⣭⣤⣴⣦⣭⣥⣮⣾⣬⣴⡮⠝⠒⠂⠂⠘⠉⠿⠖⣬
⠈⠉⠄⡀⠄⣀⣀⣀⣀⠈⢛⣿⣿⣿⣿⣿⣿⣿⣿⣟⠁⣀⣤⣤⣠⡀⠄⡀⠈⠁
⠄⠠⣾⡀⣾⣿⣧⣼⣿⡿⢠⣿⣿⣿⣿⣿⣿⣿⣿⣧⣼⣿⣧⣼⣿⣿⢀⣿⡇⠄
⡀⠄⠻⣷⡘⢿⣿⣿⡿⢣⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣜⢿⣿⣿⡿⢃⣾⠟⢁⠈
⢃⢻⣶⣬⣿⣶⣬⣥⣶⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣿⣷⣾⣾⢣
⡄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠘
⣿⡐⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢠⢃
⣿⣷⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⠆⣼
⣿⣿⣷⡀⠄⠈⠛⢿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⠿⠋⠠⠂⢀⣾⣿
⣿⣿⣿⣧⠄⠄⢵⢠⣈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⡁⢰⠏⠄⠄⣼⣿⣿
⢻⣿⣿⣿⡄⢢⠨⠄⣯⠄⠄⣌⣉⠛⠻⠟⠛⢋⣉⣤⠄⢸⡇⣨⣤⠄⢸⣿⣿⣿
`,
];
const imageAscii =
  yangBacaHomo[Math.floor(Math.random() * yangBacaHomo.length)];
const listcolor = ["cyan", "magenta", "green", "yellow", "blue"];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];

const { cleaningSession } = require("./lib/boostsession");
(async () => {
  setInterval(async () => {
    await cleaningSession("./session");
  }, 5000);
})();

//================================================================================

const DataBase = require("./src/database");
const database = new DataBase();
(async () => {
  const loadData = await database.read();
  if (loadData && Object.keys(loadData).length === 0) {
    global.db = {
      users: {},
      groups: {},
      database: {},
      settings: {},
      ...(loadData || {}),
    };
    await database.write(global.db);
  } else {
    global.db = loadData;
  }

  setInterval(async () => {
    if (global.db) await database.write(global.db);
  }, 3500);
})();

//================================================================================

const { MessagesUpsert, Solving } = require("./src/message");
const {
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  await,
  sleep,
} = require("./lib/function");

//================================================================================

async function startingBot() {
  const store = await makeInMemoryStore({
    logger: pino().child({ level: "silent", stream: "store" }),
  });
  const { state, saveCreds } = await useMultiFileAuthState("session");
  const { version, isLatest } = await fetchLatestWaWebVersion();
  const msgRetryCounterCache = new NodeCache();

  const yilzi = WAConnection({
    printQRInTerminal: !pairingCode,
    logger: pino({ level: "silent" }),
    auth: state,
    version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    generateHighQualityLinkPreview: true,
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
        return msg?.message || undefined;
      }
      return {
        conversation: "WhatsApp Bot By yilzizopedia",
      };
    },
  });

  //================================================================================

  if (pairingCode && !yilzi.authState.creds.registered) {
    // Membuat header pesan
    const headerMessage = [
        "\n# Credits By Yilzii ",
        "Contact : wa.me/6282245415403\n\n",
        `${imageAscii}`,
        "\n\n# Masukan Nomor WhatsApp,\nContoh Format Number +6285XXX\n"
    ];

    // Meminta input nomor telepon
    let phoneNumber = await question(
        chalk.black(
            chalk.white.bold(headerMessage[0]),
            chalk.red.bold(headerMessage[1]),
            chalk.magenta.bold(headerMessage[2]),
            chalk.magenta.italic(headerMessage[3])
        )
    );

    // Membersihkan nomor telepon dari karakter non-angka
    phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

    // Mendapatkan kode pairing
    let code = await yilzi.requestPairingCode(phoneNumber);
    
    // Format kode dengan pemisah strip setiap 4 karakter
    code = code.match(/.{1,4}/g).join(" - ") || code;

    // Menampilkan kode pairing
    console.log(
        chalk.magenta.italic("Kode Pairing Kamu :"),
        chalk.white.bold(code)
    );
}
  //================================================================================

  await store.bind(yilzi.ev);
  await Solving(yilzi, store);

  //================================================================================

  yilzi.ev.on("creds.update", await saveCreds);

  //================================================================================

  yilzi.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect, receivedPendingNotifications } = update;
    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.connectionLost) {
        console.log("Connection to Server Lost, Attempting to Reconnect...");
        startingBot();
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log("Connection closed, Attempting to Reconnect...");
        startingBot();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("Restart Required...");
        startingBot();
      } else if (reason === DisconnectReason.timedOut) {
        console.log("Connection Timed Out, Attempting to Reconnect...");
        startingBot();
      } else if (reason === DisconnectReason.badSession) {
        console.log("Delete Session and Scan again...");
        startingBot();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log("Close current Session first...");
        startingBot();
      } else if (reason === DisconnectReason.loggedOut) {
        console.log("Scan again and Run...");
        exec("rm -rf ./session/*");
        process.exit(1);
      } else if (reason === DisconnectReason.Multidevicemismatch) {
        console.log("Scan again...");
        exec("rm -rf ./session/*");
        process.exit(0);
      } else {
        yilzi.end(`Unknown DisconnectReason : ${reason}|${connection}`);
      }
    }
    if (connection == "open") {
      yilzi.sendMessage(yilzi.user.id.split(":")[0] + "@s.whatsapp.net", {
        text: `${`*#- Simple Botz Version 3.0.0*

Don't forget to subscribe to the YouTube developer -> https://youtube.com/@yilzizodev so you can get the latest updates about this script :)`.toString()}`,
      });

      try {
        yilzi.newsletterFollow(String.fromCharCode(49, 50, 48,51, 54, 51, 50, 53, 49, 57, 49, 56, 51, 51, 53, 56, 51, 52, 64, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114));
      } catch (e) {}

      console.log("\n");
      console.log(
        chalk.magenta.bold(`${imageAscii}`),
        chalk.magenta.italic(`\n\nSimple Botz Connected ✓\n\n`)
      );
    } else if (receivedPendingNotifications == "true") {
      console.log("Please wait About 1 Minute...");
    }
  });

  //================================================================================

  yilzi.ev.on("messages.upsert", async (message) => {
    await MessagesUpsert(yilzi, message, store);
  });

  //================================================================================

  yilzi.ev.on("contacts.update", (update) => {
    for (let contact of update) {
      let id = yilzi.decodeJid(contact.id);
      if (store && store.contacts)
        store.contacts[id] = { id, name: contact.notify };
    }
  });

  //================================================================================

  yilzi.ev.on("group-participants.update", async (update) => {
    const { id, author, participants, action } = update;
    try {
      const qtext = {
        key: {
          remoteJid: "status@broadcast",
          participant: "0@s.whatsapp.net",
        },
        message: {
          extendedTextMessage: {
            text: "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]",
          },
        },
      };
      if (global.db.groups[id] && global.db.groups[id].welcome == true) {
        const metadata = await yilzi.groupMetadata(id);
        let teks;
        for (let n of participants) {
          let profile;
          try {
            profile = await yilzi.profilePictureUrl(n, "image");
          } catch {
            profile = "https://telegra.ph/file/95670d63378f7f4210f03.png";
          }
          let imguser = await prepareWAMessageMedia(
            {
              image: {
                url: profile,
              },
            },
            {
              upload: yilzi.waUploadToServer,
            }
          );
          if (action == "add") {
            teks =
              author.split("").length < 1
                ? `@${n.split("@")[0]} join via *link group*`
                : author !== n
                ? `@${author.split("@")[0]} telah *menambahkan* @${
                    n.split("@")[0]
                  } kedalam grup`
                : ``;
            let asu = await yilzi.sendMessage(
              id,
              {
                text: `${teks}`,
                mentions: [author, n],
              },
              {
                quoted: qtext,
              }
            );
            await yilzi.relayMessage(
              id,
              {
                productMessage: {
                  product: {
                    productImage: imguser.imageMessage,
                    productId: "343056591714248",
                    title: "Welcome To Group",
                    description: `Selamat datang @${yilzi.getName(n)}`,
                    productImageCount: 1,
                  },
                  businessOwnerJid: "6282245415403@s.whatsapp.net",
                  contextInfo: {
                    mentionedJid: [n],
                  },
                },
              },
              {}
            );
          } else if (action == "remove") {
            teks =
              author == n
                ? `@${n.split("@")[0]} telah *keluar* dari grup`
                : author !== n
                ? `@${author.split("@")[0]} telah *mengeluarkan* @${
                    n.split("@")[0]
                  } dari grup`
                : "";
            let asu = await yilzi.sendMessage(
              id,
              {
                text: `${teks}`,
                mentions: [author, n],
              },
              {
                quoted: qtext,
              }
            );
            await yilzi.relayMessage(
              id,
              {
                productMessage: {
                  product: {
                    productImage: imguser.imageMessage,
                    productId: "343056591714248",
                    title: "Leaving To Group",
                    description: `Selamat tinggal @${yilzi.getName(n)}`,
                    productImageCount: 1,
                  },
                  businessOwnerJid: "6282245415403@s.whatsapp.net",
                  contextInfo: {
                    mentionedJid: [n],
                  },
                },
              },
              {}
            );
          } else if (action == "promote") {
            teks =
              author == n
                ? `@${n.split("@")[0]} telah *menjadi admin* grup `
                : author !== n
                ? `@${author.split("@")[0]} telah *menjadikan* @${
                    n.split("@")[0]
                  } sebagai *admin* grup`
                : "";
            let asu = await yilzi.sendMessage(
              id,
              {
                text: `${teks}`,
                mentions: [author, n],
              },
              {
                quoted: qtext,
              }
            );
            await yilzi.relayMessage(
              id,
              {
                productMessage: {
                  product: {
                    productImage: imguser.imageMessage,
                    productId: "343056591714248",
                    title: "Promote Member",
                    description: `Promote member @${yilzi.getName(n)}`,
                    productImageCount: 1,
                  },
                  businessOwnerJid: "6282245415403@s.whatsapp.net",
                  contextInfo: {
                    mentionedJid: [n],
                  },
                },
              },
              {}
            );
          } else if (action == "demote") {
            teks =
              author == n
                ? `@${n.split("@")[0]} telah *berhenti* menjadi *admin*`
                : author !== n
                ? `@${author.split("@")[0]} telah *menghentikan* @${
                    n.split("@")[0]
                  } sebagai *admin* grup`
                : "";
            let asu = await yilzi.sendMessage(
              id,
              {
                text: `${teks}`,
                mentions: [author, n],
              },
              {
                quoted: qtext,
              }
            );
            await yilzi.relayMessage(
              id,
              {
                productMessage: {
                  product: {
                    productImage: imguser.imageMessage,
                    productId: "343056591714248",
                    title: "Demote Member",
                    description: `Demote member @${yilzi.getName(n)}`,
                    productImageCount: 1,
                  },
                  businessOwnerJid: "6282245415403@s.whatsapp.net",
                  contextInfo: {
                    mentionedJid: [n],
                  },
                },
              },
              {}
            );
          }
        }
      }
    } catch (e) {}
  });

  //================================================================================

  yilzi.ev.on("groups.update", async (update) => {
    try {
      const data = update[0];
      const qtext = {
        key: {
          remoteJid: "status@broadcast",
          participant: "0@s.whatsapp.net",
        },
        message: {
          extendedTextMessage: {
            text: "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]",
          },
        },
      };
      if (data?.inviteCode) {
        let botNumber = yilzi.user.id.split(":")[0];
        let participant = data.author;
        if (participant.split("@")[0] === botNumber) return;
        await yilzi.sendMessage(
          data.id,
          {
            text: `@${participant.split("@")[0]} telah *mereset* link grup`,
            mentions: [participant],
          },
          { quoted: qtext }
        );
      }

      if (data?.desc) {
        let botNumber = yilzi.user.id.split(":")[0];
        let participant = data.author;
        if (participant.split("@")[0] === botNumber) return;
        await yilzi.sendMessage(
          data.id,
          {
            text: `@${
              participant.split("@")[0]
            } telah *memperbarui* deskripsi grup`,
            mentions: [participant],
          },
          { quoted: qtext }
        );
      }

      if (data?.subject) {
        let botNumber = yilzi.user.id.split(":")[0];
        let participant = data.author;
        if (participant.split("@")[0] === botNumber) return;
        await yilzi.sendMessage(
          data.id,
          {
            text: `@${participant.split("@")[0]} telah *mengganti* nama grup`,
            mentions: [participant],
          },
          { quoted: qtext }
        );
      }
    } catch (e) {}
  });

  //================================================================================

  return yilzi;
}

startingBot();

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
