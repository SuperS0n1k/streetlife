const Discord = require('discord.js');

module.exports = {
	name: 'farm',
	aliases: ['f', 'land'],
	guildOnly: true,
	ownerOnly: false,
	cooldown: 0.5,
	description: 'Some chill farming',
	usage: '<>',
	async run(client, message, args) {
		owner = await client.users.fetch(message.guild.ownerID, { cache: false }); // so you don't get caching issues || 'n/a'; 
	let embed = new Discord.MessageEmbed()
		.setColor('#0046a8')
		.setAuthor('Your Farming Pastures',message.author.avatarURL())
    .setTitle(`${message.author.username}'s Farm (Indev)`)
.addFields(
{ name: 'Plot 1 \:seedling:', value: '\:brown_square:\:brown_square:\:brown_square:\:brown_square:\:brown_square:\:brown_square:', footer: 'Empty Plot'},
{ name: 'Plot 2 \:seedling:', value: '\:brown_square:\:brown_square:\:brown_square:\:brown_square:\:brown_square:\:brown_square:', footer: 'Empty Plot' },
{ name: 'Plot 3 \:seedling:', value: '\:brown_square:\:brown_square:\:brown_square:\:brown_square:\:brown_square:\:brown_square:', footer: 'Empty Plot' },
{ name: 'Plot 4 \:seedling:', value: '\:brown_square:\:brown_square:\:brown_square:\:brown_square:\:brown_square:\:brown_square:', footer: 'Empty Plot' },
{ name: 'Plot 5 \:seedling:', value: '\:brown_square:\:brown_square:\:brown_square:\:brown_square:\:brown_square:\:brown_square:', footer: 'Empty Plot' },
{ name: 'Plot 6 \:seedling:', value: '\:brown_square:\:brown_square:\:brown_square:\:brown_square:\:brown_square:\:brown_square:', footer: 'Empty Plot' },
);
		message.channel.send( {embed} );
	},
};
