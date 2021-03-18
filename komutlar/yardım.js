const Discord = require ("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message) => {

const nobles = new Discord.MessageEmbed()// fwhy code dan alınıp editlenmiştir

.setColor("RANDOM")
.setTitle(`**▬▬▬▬▬▬[** ©️ **Eğlence Bot** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: __${process.env.prefix}istatistik__ **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix:** __${process.env.prefix}__ `)
.setThumbnail(client.user.avatarURL)
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» ${process.env.prefix}adamasmaca :** Adam Asmaca Oynarsınız.
> **» ${process.env.prefix}gay :** Etiketlediğiniz Kişinin Gaylik Düzeyini Öğrenirsiniz.
> **» ${process.env.prefix}yılbaşı :** Yılbaşı Sayacı.
> **» ${process.env.prefix}kaçcm :** :D?
> **» ${process.env.prefix}kimlik :** Rastgele Kimlik Oluşturursunuz.
> **» ${process.env.prefix}liderlik :** Coin Sıralamasını Gösterir.
> **» ${process.env.prefix}balık-tut :** Balık Tutarsınız.
> **» ${process.env.prefix}trump :** Trump Tweet Atar.
> **» ${process.env.prefix}rozet :** Rozetlerinizi Gösterir.
> **» !kaç-cm :** Bot malafat uzunluğunuzu söyler.
> **» !kralol :** Kral olmanıza yarar.
> **» !tokat :** Etiketlediğiniz kişiyi tokatlarsınız.
> **» !yazıtura :** Bot ile yazı-tura oyununu oynarsınız.
> **» !yılbaşı :** Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.
> **» !öp :** Etiketlediğiniz kişiyi öpmenize yarar.
> **» !şekerye :** Bot size şeker ikram eder.


**Linkler ->** **[Destek Sunucusu](${ayarlar.destekSunucusuDavetLinki})** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)**`)
 
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
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};