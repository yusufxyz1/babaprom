const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`Windes | Öneri Sistem`)
    .setTitle(``)
    .setImage('https://cdn.discordapp.com/attachments/1108819464524415097/1109034877774483466/standard_7.gif')
    .setColor("#00ff00")
    
    .setDescription(
      `Ⓜ️ Windes Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__ÖneriLog Ayarla__**`,
      `🔸 \`${prefix}önerilog ayarla\` \n Discord Sunucuza Öneri Log Kanal Ayarlarsınız.`,
      true
    )
    .addField(
      `**__ÖneriLog Sıfırla__**`,
      `🔸 \`${prefix}önerilog sıfırla\` \n Discord Sunucuza Öneri Log Kanalı Sıfırlarsınız.`,
      true
    )
    .addField(
      `**__Öneri Yap__**`,
      `🔸 \`${prefix}öneri-yap\` \n Discord Sunucuza Ayarladınız Öneri Loga Mesaj Atar.`,
      true
    )
    .addField(
      `**__Shadow Sunucuya Özel Öneri__**`,
      `<a:green:822530401301954632> \`${prefix}öneri\` \n Discord Sunucumuza Bota Veya MCSunucumuza Öneri Yapabilirsiniz..`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `⚜️  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n ⚜️ \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz.`
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "öneri-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
