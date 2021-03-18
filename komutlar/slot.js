const Discord = require('discord.js');
const cmd = require('discord.js-commando');
const st = require('common-tags');
const slots = ['🍇', '🍊', '🍐', '🍒', '🍋'];

exports.run = function(client, message) {

    var slot1 = slots[Math.floor(Math.random() * slots.length)];
    var slot2 = slots[Math.floor(Math.random() * slots.length)];
    var slot3 = slots[Math.floor(Math.random() * slots.length)];
    
    if (slot1 === slot2 && slot1 === slot3) {
        message.channel.send(st`
        ${slot1} : ${slot2} : ${slot3}

        Kazandın
        `); 
    } else {
        message.channel.send(st`
        ${slot1} : ${slot2} : ${slot3}

        Kaybettin
        `);    
  }
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['slot'],
  permLevel: 0
};

exports.help = {
  name: 'slots', 
  description: 'Slots oyunu oynatır',
  usage: 'slots'
};