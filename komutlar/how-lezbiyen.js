const Discord = require('discord.js');

let db = require("quick.db")
let ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {

let username = `${message.author.id}`;
if(message.mentions.members.first()) username = message.mentions.members.first().user.username+' is';
if(message.mentions.users.first()) username = message.mentions.users.first().username+' is';

let random = Math.floor(Math.random(100) * 100);
return message.channel.send(new Discord.MessageEmbed().setColor('#E91E63').setTitle('Lezbiyen Yüzdesi Ölçer').setDescription(`<@${username}> **Kullanıcısı** %${random} **Lezbiyen** \<a:rainbowtwerk:835122996342554666>`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'lez'
};