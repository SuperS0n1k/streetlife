const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	aliases: ['ping','thebotded?'],
	description: 'See if the bot is alive!',
	usage: '<>',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: false,
	async run(client, message, args) {
		message.reply(`Somehow, Vanillaist#1138 didn't mess up and I am online!`)
	},
};
