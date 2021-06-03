const Discord = require ("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message) => {

const nobles = new Discord.MessageEmbed()// fwhy code dan alınıp editlenmiştir

.setColor("GREEN")
.setTitle(``)
.setThumbnail(client.user.avatarURL)
.setDescription(`

\<a:Bcollwolf:780848550790955018> **yDarK BOT | Eğlence Komutları** \<a:Bcollwolf:780848550790955018>

\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}adamasmaca | :** Adam Asmaca Oynarsınız.
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}gay | :** Etiketlediğiniz Kişinin Gaylik Düzeyini Öğrenirsiniz.
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}lez | :** Etiketlediğiniz Kişinin Lezbiyenlik Düzeyini Öğrenirsiniz.
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}başlat | :** Akinatör Oynarsınız.
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}kullanıcıbilgi | :** Avatarınızı Görürsünüz.
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}avatar | :** Avatarınızı Görürsünüz.
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}sor | :** Bota Soru Sorarsınız.
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}yılbaşı | :** Yılbaşı Sayacı.
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}kaçcm | :** :D?
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}kimlik | :** Rastgele Kimlik Oluşturursunuz.
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}balık-tut | :** Balık Tutarsınız.
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}trump | :** Trump Tweet Atar.
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}rozet | :** Rozetlerinizi Gösterir.
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}evlenme-teklifi | :** Evlenme Teklifi Edersin. ^^
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}kralol | :** Kral Olursun.
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}yazı-tura | :** Yazı mı Tura mı?
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}öp | :** Birini Öpersin.
\<a:RainbowOkGif:747069805189791784> **| ${process.env.prefix}duello | :** Birisiyle Duello Atarsın.


**» Linkler** 
**[Destek Sunucusu](${ayarlar.destekSunucusuDavetLinki})** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=767317246119903243&scope=bot&permissions=805314622)**`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(nobles)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'eğlence', 
    description: 'The Help Command',
    usage: 'help'
};