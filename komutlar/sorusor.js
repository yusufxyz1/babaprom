const Discord = require('discord.js')
const reyncevaplar = [
  "Evet", 
    "Hayır", 
    "Muhtemelen", 
    "İmkansız", 
    "Ne yazık ki hayır", 
    "Maalesef",
    "Tabii ki", 
    "Belki de", 
    "Şimdi söylemeyeceğim", 
  "Odaklan ve tekrar sor"
];
exports.run = function(client, message, args) {
    var zoru = args.join(' ');
    var cevap = reyncevaplar[Math.floor(Math.random() * reyncevaplar.length)];
if(!zoru) return ("Kardeşim Soru Sormadan Nası Cevaplamamı Bekliyon ?")
    else message.reply(cevap)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["zoru","soru"],
    permLevel: 0
  };  
  exports.help = {
    name: 'sorusor'

  };