const Discord = require("discord.js");
const get = require("request")//parsher youtube
exports.run = async (client, message, args) => {
let soru = args.join('');
if(!soru) return message.reply(' **Sohbet Edelimmi ?**``!sor Bişey Yaz :)`` ')
let encodedsoru = encodeURI(soru)//parsher youtube
get(`https://api.codare.fun/sor/${encodedsoru}`, async function (err, resp, body) { 
body = JSON.parse(body); //parsher youtube
if(err) return message.channel.send('**Hata oluştu Eror Verdim Yapma Bi Daha**')
message.channel.send(body.cevap)
    }) 
}
exports.conf = {
  enabled: true,//parsher youtube
  guildOnly: false,
  aliases: ["sr", 's', 'or', 'bot', 'Bot', ''],
  permLevel: 0
};

exports.help = {//parsher youtube
  name: "sor",
  description: "bota soru sorarsınız",
  usage: "sor"
};