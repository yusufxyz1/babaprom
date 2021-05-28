const Discord = require('discord.js');

const cevaplar = [
    "Evet",
    "Hayır",
    "Belki",
    "Olabilir",
    "İmkansız"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');
  
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply(new Discord.MessageEmbed().setColor("RANDOM").setTitle('Doğru kullanım `dd!sor soru`'))
    else message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setTitle(`Soru: ${soru}\n\nCevap: ${cevap}`))

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sor'
};