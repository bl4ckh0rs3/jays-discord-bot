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

client.on('message', message => {
    if (message.content === 'Bitch') {
    	message.reply('What did you say to me you little punk? Fuck you! :middle_finger:');
  	}
});

    if(message.content.startsWith(prefix + "google")) {
    let google = args.slice(1).join('+');
    let link = `https://www.google.com/search?q=` + google;
	message.channel.send(link);
}
    
if(message.content.startsWith(prefix + "youtube")) {
    let youtube = args.slice(1).join('+');
    let link = `https://www.youtube.com/results?search_query=` + youtube;
	message.channel.send(link);
}
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

