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

    if(!soru) return message.reply(new Discord.MessageEmbed().setColor("RANDOM").setTitle('\<a:Bsulu:758618028891570197> Doğru kullanım `[dd!sor soru]`'))
    else message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setTitle(`\<a:BAnimeEyes:758618011207991316> Sorun: ${soru}\n\n \<a:Bfkmdkdkm:758618043050885120>Cevap: ${cevap}`))

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