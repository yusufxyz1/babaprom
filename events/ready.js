const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');//parsher youtube

module.exports = client => {
  var degisenOynuyor = [
    //parsher youtube
    "",
    ""
    
  ]
  
  setInterval(function() {
    var degisenOynuyor1 = degisenOynuyor[Math.floor(Math.random() * (degisenOynuyor.length))]
    client.user.setActivity(`${degisenOynuyor1}`);//parsher youtube

}, 2 * 30000);
  
  client.user.setStatus("online"); //dnd, idle, online, offline
  
}