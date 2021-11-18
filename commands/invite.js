const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	aliases: ['botinvite','addbot'],
	guildOnly: false,
	ownerOnly: false,
	cooldown: 0,
	description: 'Display some server information',
	usage: '<>',
	async run(client, message, args) {
		owner = await client.users.fetch(message.guild.ownerID, { cache: false }); // so you don't get caching issues || 'n/a'; 
		let embed = new Discord.MessageEmbed()
		.setColor('#0046a8')
		.setAuthor('Invite The Bot!',client.user.avatarURL())
    .addField(`Here you go! ${await client.generateInvite(8)}`)
		message.channel.send( {embed} );
	},
};
