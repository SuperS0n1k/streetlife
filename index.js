const env = require('dotenv')
const keyv = require('keyv');
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({
	disableMentions: 'all',
});
client.commands = new Discord.Collection();
cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);	client.commands.set(command.name, command);
};

// config (DO NOT DELET)
token = process.env.token;
if (!token) throw new Error('There must be a token inside the .env file! Make sure that you have created a .env file and defined the token variable with the correct bot token!')
client.database = new keyv('sqlite://./database.sqlite');
client.prefix = process.env.prefix;
if (!client.prefix) throw new Error('Prefix must be defined in the .env file')
client.owners = ['Vanillaist#1138'];
client.getUserFromMention = (mention) => {
	if (!mention) return;
	if (mention.startsWith('<@') && mention.endsWith('>')) {
			mention = mention.slice(2, -1);
			if (mention.startsWith('!')) {
					mention = mention.slice(1);
			};
			return client.users.cache.get(mention);
	};	
};

// error handling 
process.on('unhandledRejection', err => console.error(err));
client.on('error', err => console.error(err));

// when discord bot is ready 
client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}`);
	console.log(`Invite Me! ${await client.generateInvite(8)}`)
  client.user.setActivity(`A life on the streets! | shelp`, { type:"PLAYING" }).catch(console.error)
});

client.on('message', async(message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(client.prefix)) return;
	
	const args = message.content.slice(client.prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	};

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 0) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			embed = new Discord.MessageEmbed()
			.setDescription(`You need to wait another **${timeLeft.toFixed(1)}** seconds before using the **${command.name}** command again!`)
			.setColor('#ff0000')
			return message.channel.send(embed);
		};		
	}; 

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)

	if (command.ownerOnly && (!client.owners.includes(message.author.tag))) {
		return message.channel.send(`You're not listed as a bot owner! ${message.author.tag}`);
	};

	if (command.guildOnly && (message.channel.type == 'dm')) {
		return message.channel.send(`This command doesn't work inside DMs!`);
	};

	try {
		command.run(client, message, args);
	} catch (error) {
		message.channel.send(`There was an error whilst executing that command: \`${error}\``)
	}
});

client.login(token);
