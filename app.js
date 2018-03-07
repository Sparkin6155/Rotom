const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in!`);
  client.setStatus('online', 'Secret Divergent!');
});

client.on('guildMemberAdd', member => {
  member.guild.defaultChannel.send(`Welcome to **Mafia Event Party**, ${member}!\n Here we will celebrate the birth of our boi **@*Mafioso Divergent*!**`);
});

client.on('guildMemberRemove', member => {
  member.guild.defaultChannel.send(`Aww...${member} just left!`);
});

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('Pong!');
  }
});

client.login('NDIxMDIxMzMwMDU0NDQ3MTE0.DYHtZg.Xr5tMwRj3kAWHqMf0tZV2uOFinQ');
