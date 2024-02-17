//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "NO YT-Channel " //ur yt chanel name
global.socialm = "GitHub: Debashis121212" //ur github or insta name
global.location = "Nalhati, Birbhum, WB,INDIA  " //ur location

//new
global.botname = '░▒▓█𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘-𝕭𝖔𝖙 𝖁10█▓▒░' //ur bot name
global.ownernumber = '919339619072' //ur owner number
global.ownername = '░▒▓█ 𝕯𝖊𝖇𝖆𝖘𝖍𝖎𝖘 𝕯𝖊𝖞 █▓▒░' //ur owner name
global.websitex = "https://www.facebook.com/sipra.dey.56863/"
global.wagc = "https://chat.whatsapp.com/C4NU6KefgoLL9W8vpbhbEY"
global.themeemoji = '📌'
global.wm = "𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘 𝕸𝖚𝖑𝖙𝖎𝖉𝖊𝖛𝖎𝖈𝖊 𝕭𝖔𝖙"
global.botscript = 'https://github.com/Debashis121212/Dd-Cheems-Bot' //script link
global.packname = "Sticker By"
global.author = "Debashis Dey\n\n+919339619072"
global.creator = "919339619072 @s.whatsapp.net"
global.xprefix = ''
global.premium = ["919339619072"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!Fuck Off',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})