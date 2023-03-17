const db = require("quick.db");//parsher youtube

module.exports = async message => {
  let client = message.client;
  let prefix = 
      (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||
    process.env.prefix;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;//parsher youtube
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {//parsher youtube
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);//parsher youtube
  }
};