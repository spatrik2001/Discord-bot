const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Invite SpaceY to your server!'),
    async execute(interaction) {
        const inviteEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setAuthor({ name: '🚀 Invite' })
            .setDescription(`To invite **SpaceY** to your server, just [click](https://harmatosbikafing.hu/invite) here! The bot will have \`Administrator\` permissions, but you can disable it since he doesn't need this permission right now!`)
            .setTimestamp()
            .setFooter({ text: `${interaction.user.username}`, iconURL: `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}` });
        await wait(500);
        await interaction.reply({ embeds: [inviteEmbed] });

    },
}