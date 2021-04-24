const { MessageEmbed } = require('discord.js');
const { embedColor } = require('../config.json');

module.exports = {
    name: 'announce',
    description: 'Get the bot to announce something',
    usage: 'announce {message}',
    cooldown: '5',
    guildOnly: true,
    execute (message, args) {
        const annTxt = args.join(' ');
        if (!annTxt) return message.channel.send('Error: Please provide a message to say.');
            const embed = new MessageEmbed()
              .setTitle('Announcement')
              .setAuthor(message.author.username, message.author.displayAvatarURL({ size: 64 }))
              .setDescription(`${annTxt}`)
              .setTimestamp()
              .setColor(embedColor);
          message.delete();
          message.channel.send(embed);
      }
};