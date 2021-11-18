const Discord = require('discord.js');

module.exports = {
	name: 'beg',
	aliases: [],
	guildOnly: false,
	ownerOnly: false,
	cooldown: 30,
	description: 'Begs for coins and items.',
	usage: '<>',
  async run(client, message, args) {
		owner = await client.users.fetch(message.guild.ownerID, { cache: false }); // so you don't get caching issues || 'n/a'; 
var begpeople = [
'46mil',
'The Bot Devs',
'Rick Astley',
'Your Mom'
]
let people = begpeople[Math.floor(Math.random() * begpeople.length)]
const min = 1;
const max = 69;
const createRandom = (min, max) => {
   const diff = max - min;
   const random = Math.random();
   return Math.floor((random * diff) + min);
}
BegAmt = (createRandom(min, max));
	let embed = new Discord.MessageEmbed()
		.setColor('#ff0000')
	.setAuthor('Begging',message.author.avatarURL())
    .addFields({ name: `${people}`, value: `You begged on the streets and got ${BegAmt}` })
		message.channel.send( {embed} );
	},
};
