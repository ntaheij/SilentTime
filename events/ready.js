const Discord = require('discord.js');
const botconfig = require('../config/botconfig.json');
const prefix = botconfig.defaultprefix;

module.exports = (bot) => {
	console.log(`${bot.user.username} is online`);

	setInterval(function() {
		bot.user.setActivity(`Silence`, { type: 'LISTENING' });
	}, 5000);
};
