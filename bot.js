const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Hello') {
    	message.reply('Good day to you as well!');
  	}
});

client.on('message', message => {
    if (message.content === 'Alexa, play despacito') {
    	message.reply('Here is Despacito by Luis Fonsi for you - https://www.youtube.com/watch?v=kJQP7kiw5Fk');
  	}
});

let prefix = ">";

bot.on('ready', () => {
    console.log("")
    console.log("-------AMDOSX Selfbot-------    ")
    console.log("                                ")
    console.log("   Name: " + bot.user.tag + "   ")
    console.log("     State: Connected           ")
    console.log("                                ")
    console.log("---------------------------     ")
});

bot.on('message', msg => {

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if(msg.content.startsWith(prefix) && msg.author == bot.user) {

    switch(cmd) {
      case "test":
        msg.edit(msg.guild.iconURL)
        break;
      case "forum":
        msg.edit("https://forum.amd-osx.com/")
        break;
      case "info":
        const infoembed = new Discord.RichEmbed()
        .setAuthor("AMDOSX Bot", "https://cdn.discordapp.com/icons/249992304503291905/8502ffd49810685b7b3afd9a5140be2d.jpg")
        .setDescription("This is a little bot written by me (Xekresis) using Discord.js. \n I developed this Bot to support users faster and easier. \n This Bot can only be used by me. \n If you have any questions pm or tag me.")
        .setColor(0x00AE86)
        msg.edit(infoembed);
        break;
      case "efi":
        const efiembed = new Discord.RichEmbed()
        .setAuthor("How to copy the EFI Folder", "https://cdn.discordapp.com/icons/249992304503291905/8502ffd49810685b7b3afd9a5140be2d.jpg")
        .setDescription("First download Clover Configurator from here (if you haven't already): http://bit.ly/ccvamdosx/ \n Open it and click on the -Mount EFI- Tab \n Mount the EFI on your USB and HDD/SSD\n Copy the EFI Folder from the USB to your HDD/SSD")
        .setColor(0xDC143C)
        msg.edit(efiembed);
        break;
    }
  }
});

bot.login('');

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
