const { MessageEmbed } = require('discord.js');
const answers = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
];

module.exports = {
    name: '8ball',
    description: 'Asks the Magic 8-Ball for some psychic wisdom',
    cooldown: '5',
    usage: '{question}',
    execute (message, args) {
        const question = args.join(' ');
        if (!question) return message.channel.send('Please provide a question to ask.');
            const embed = new MessageEmbed()
              .setTitle('The Magic 8-Ball')
              .addField('Question', question)
              .addField('Answer', `${answers[Math.floor(Math.random() * answers.length)]}`)
              .setColor(message.guild.me.displayHexColor);
            message.channel.send(embed);
        }
};