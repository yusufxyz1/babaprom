const db = require("quick.db");

module.exports = async message => {
  let client = message.client;
  let prefix = 
      (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||
    process.env.prefix;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let args = message.content.split(" ").slice(2);
    let command = message.content.split(" ")[1];
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, args, perms);
  }
};