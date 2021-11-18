const Discord = require('discord.js');

module.exports = {
	name: 'rules',
	aliases: ['stuffineedtoremember'],
	guildOnly: false,
	ownerOnly: false,
	cooldown: 1,
	description: 'Bot rules',
	usage: '<>',
	async run(client, message, args) {
		owner = await client.users.fetch(message.guild.ownerID, { cache: false }); // so you don't get caching issues || 'n/a'; 
	let embed = new Discord.MessageEmbed()
		.setColor('#0046a8')
		.setAuthor('Bot Rules',client.user.avatarURL())
    .setTitle(`The Bot Rules:`)
    .addFields(
{ name: '1. Alt Accounts', value: 'The usage of alternate accounts will result in a permanent bot ban.' },
{ name: '2. Exploits', value: 'Taking advantage of glitches in the bot to duplicate items, currency or other tradable items will result in a 28 day bot ban' },
{ name: '3. Discord TOS', value: 'Breaking the Discord Terms of Service while using this bot will result in a bot ban until the rule-breaking has been stopped. (ie: If underaged; less than 13 years old, you will be banned until such issue has been resolved; in this case when you are 13≤ years old)' }
);
		message.channel.send({ embeds: [embed] });
	},
};
