const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const sunucu = new Discord.MessageEmbed()
    .setAuthor(`Windes  | Eklenti`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(client.user.avatarURL())
    .setImage('https://cdn.discordapp.com/attachments/1108819464524415097/1109034877774483466/standard_7.gif')
    .setDescription(
      ` 🔌  QualitySel  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Ticket Sistem__`,
      `♻️ \`${prefix}ticket-sistem\` Gelişmiş Ticket Sistem`,
      true
    )
    .addField(
      `__Seviye Sistem__`,
      `♻️ \`${prefix}seviye-sistem\` Gelişmiş Seviye Sistem`,
      true
    )
    .addField(
      `__OtoRol Sistem__`,
      `♻️ \`${prefix}otorol-sistem\` Gelişmiş OtoRol Sistem`,
      true
    )
    .addField(
      `__ÖzelProfil Sistem__`,
      `♻️ \`${prefix}profil-sistem\` Gelişmiş Profil Sistem`,
      true
    )
    .addField(
      `__Öneri Sistem__`,
      `♻️ \`${prefix}öneri-sistem\` Ayarlanabilir Öneri Sistem`,
      true
    )
    .addField(
      `__Ban Sistem__`,
      `♻️ \`${prefix}ban-sistem\` Ayarlanabilir Ban Sistem`,
      true
    )
      .addField(
      `__AboneRol Sistem__`,
      `♻️ \`${prefix}abonerol-sistem\` Ayarlanabilir Abone Rol Sistem`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🔱  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔱 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz.`
    );
  return message.channel.send(sunucu);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "eklenti",
  description: "Yardım Menüsü",
  usage: "yardım"
};
