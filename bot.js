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

// test novinky

var bot = new Discord.Client({
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '$') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'dick':
                bot.sendMessage({
                    to: channelID,
                    message: 'Ty si dick!'
                });
            break;
         }
     }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

