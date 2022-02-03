const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription('Unban the user id with or without a reason')
		.addStringOption(option => option.setName('id').setDescription('Enter a user id').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('Enter a reason')),
	cooldown: '25',
	guildOnly: true,
    execute (interaction) {
		if (!interaction.guild.me.permissions.has('BAN_MEMBERS')) return interaction.reply({ content: 'Error: Bot permission denied. Enable **BAN_MEMBERS** permission in `Server Settings > Roles` to use this command.' });
		if (!interaction.member.permissions.has('BAN_MEMBERS')) return interaction.reply({ content: 'Error: You have no permission to use this command.' });

			const idField = interaction.options.getString('id');

			let reasonField = interaction.options.getString('reason');
				if (!reasonField) {
					reasonField = 'None';
				}

		const embed = new MessageEmbed()
			.setTitle('Unban')
			.addFields(
				{ name: 'ID', value: `\`${idField}\`` },
				{ name: 'By', value: `${interaction.member}` },
				{ name: 'Reason', value: `\`${reasonField}\`` }
			)
			.setTimestamp()
			.setColor('#FF0000');

		interaction.guild.members.unban(idField)
			.then(() => {
				interaction.reply({ embeds: [embed] });
			})
			.catch(() => {
				interaction.reply({ content: 'Error: Invalid user ID.' });
			});
		}
};