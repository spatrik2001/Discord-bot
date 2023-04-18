const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Displays the avatar of a user.'),
    async execute(interaction) {
        // const user = interaction.mentions.users.first() || interaction.author;
        const avatarEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle(`${interaction.user.username}'s Avatar`)
            .setImage(interaction.user.avatarURL({ dynamic: true, size: 4096 }))
            .setFooter({ text: `Requested by ${interaction.user.username}`, iconUrl: interaction.user.avatarURL({ dynamic: true }) });

        await wait(500);
        await interaction.reply({ embeds: [avatarEmbed] });
  },
};