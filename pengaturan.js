
const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const Fichan = new require('./lib/functions')
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
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

// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true

global.saluran = ''
global.idsal = "120363198449115557@newsletter" // opsional ID saluran
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '`𝗛𝗮𝗶𝗸𝗮𝗹`' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['6289528157038'] // ubah aja pake nomor lu

// bot
global.botname = '𝗞𝗮𝗹𝘇𝘅[𝗕𝗼𝘁]' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '© 𝗞𝗮𝗹𝘇𝘅[𝗕𝗼𝘁]' // ubah aja ini nama sticker
global.author = `At ${hariini}\n${time}` // ubah aja ini nama sticker
global.hiasan = `	◦  `
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.gris = '`'
global.wm = `𝗞𝗮𝗹𝘇𝘅[𝗕𝗼𝘁]`
global.namaStore = '𝗞𝗮𝗹𝘇𝘅[𝗕𝗼𝘁]'
global.ownerStore = '𝗞𝗮𝗹𝘇𝘅[𝗕𝗼𝘁]'
global.autobio = true // AutoBio
global.autoread = false //autoread

// apikey panel
global.footer2 = Styles('© Whastapp')
global.domain = 'https://damz.supersaiya.cloud' // Isi Domain Lu
global.apikey2 = 'ptlc_WZbakwbcNauZB9Q0vCs2WFhOqo34ahXrws3EYXaAEnT' // Isi Apikey Plta Lu
global.capikey2 = 'ptla_kDkpQP0RL1Ezg1GqjS4rBxfbZCQUVI7kaYwXQShNv6H' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.apilinode = ''
global.apitokendo = ''

// system
global.Func = Fichan
global.systemN = `(!)`
global.mess = {
    ban: Styles('*[ ❗ ]* Tidak bisa di akses, karena kamu di banned oleh owner'),
    badm: Styles('*[ ❗ ]* Jadikan bot sebagai admin terlebih dahulu '),
    regis: Styles(`*[ ❗ ]* Daftar terlebih dahulu, ketik  .daftar nama.umur`),
    premium: Styles('*[ ❗ ]* Khusus pengguna premium, silakan upgrade ke paket premium terlenih dahulu, Sedang promo 3k premanent 😋'),
    search: Styles('🔍 *Sedang Mencari...*'),
    done: Styles('Berhasil [ ✅ ]'),
    success: Styles('*[ Sucsess ✅ ]*'),
    admin: Styles('*[ ❗ ]* Fitur untuk admin '),
    owner: Styles('*[ ❗ ]* Hanya bisa di akses oleh owner'),
    group: Styles('*[ ❗ ]* Hanya bisa di gunakan di group chat'),
    private: Styles('*[ ❗ ]* Hanya bisa di gunakan di chat pribadi'),
    bot: Styles('*[ ❗ ]* Hanya pengguna bot'),
    wait: Styles('*[ ... ]* Tunggu beberapa saat...'),
    getdata: Styles('Scraping metadata . . .'),
    fail: Styles('Can\'t get metadata!'),
    error: Styles('*[ System Failed ]* Error, please contact the owner'),
    errorF: Styles('*[ System Failed ]* Sorry this feature is in error.'),
}
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})