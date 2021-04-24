const { MessageEmbed } = require('discord.js');
const { embedColor } = require('../config.json');

module.exports = {
	name: 'serverinfo',
	description: 'Display info about this server',
	usage: 'serverinfo',
	cooldown: '5',
	guildOnly: true,
	execute (message) {
		const embed = new MessageEmbed()
			.setTitle('Server Info')
			.addField('Name', `\`${message.guild.name}\``, true)
			.addField('Region', `\`${message.guild.region}\``, true)
			.addField('Creation Date & Time', `\`${message.guild.createdAt}\``)
			.addField('Members', `\`${message.guild.memberCount}\``, true)
			.addField('Channels', `\`${message.guild.channels.cache.filter(ch => ch.type !== 'category').size}\``, true)
			.setColor(embedColor);
		message.channel.send(embed);
	}
};