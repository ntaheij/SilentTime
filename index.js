const Discord = require('discord.js');
const botconfig = require('./config/botconfig.json');

const bot = new Discord.Client({ disableEveryone: true });

var beginYear = 2020;
var beginMonth = 5;
var beginDay = 4;
var beginHour = 20;
var beginMinute = 2;
var beginSecond = 0;

var endYear = 2020;
var endMonth = 5;
var endDay = 4;
var endHour = 21;
var endMinute = 00;
var endSecond = 0;

/*For some reason zegt timestamps dat er een maand teveel bij zit?*/
if (beginMonth == 1) {
	beginMonth = 12;
} else {
	beginMonth = beginMonth - 1;
}
if (endMonth == 1) {
	endMonth = 12;
} else {
	endMonth = endMonth - 1;
}

const beginDate = new Date(beginYear, beginMonth, beginDay, beginHour, beginMinute, beginSecond, 0).getTime();
const endDate = new Date(endYear, endMonth, endDay, endHour, endMinute, endSecond, 0).getTime();

require('./util/eventHandler')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.on('message', async (message) => {
	var x = new Date();
	var now = x.getTime();

	if (now > beginDate && now <= endDate) {
		message
			.delete()
			.then((message) => message.author.send('Respectloos.... Waarom praat je nu?!'))
			.catch(console.error);
	}
});

bot.login(botconfig.token);
