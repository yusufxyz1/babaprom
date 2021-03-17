const Discord = require ("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message) => {

const nobles = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Eğlence Bot** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `!`")
.setThumbnail(client.user.avatarURL)
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» ${process.env.prefix}adamasmaca :** Adam Asmaca Oynarsınız.
> **» !balık-tut :** Denizde balık tutarsınız.
> **» !beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
> **» !ara155 :** Polisi aramanıza yarar.
> **» !efkarım :** Şu anda olan efkarınızı ölçersiniz.
> **» !ejderha-yazı :** Ejderha temalı logo üretirsiniz.
> **» !espri :** Bot sizin için espri yapar.
> **» !hesapla :** Belirttiğiniz matematik işlemini bot yapar.
> **» !kartopu :** Etiketlediğiniz kişiye kartopu atarsınız.
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