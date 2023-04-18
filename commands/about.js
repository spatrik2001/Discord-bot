const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('Informations about the bot'),
	async execute(interaction) {
        const aboutEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setAuthor({ name: '🚀 About' })
            .addFields(
                { name: 'Author', value: 'Rezancehraci#6939' },
                { name: 'Source Code', value: '[Source](https://github.com/spatrik2001/Discord-bot)' },
                { name: 'Version', value: `[v1.0.3](https://github.com/repos/spatrik2001/Discord-bot)` },
                { name: 'Servers', value: '*Coming soon...*', inline: true },
                { name: 'Memory Usage', value: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', inline: true },
            )
            .setTimestamp()
            .setFooter({ text: `${interaction.user.username}`, iconURL: `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}` });
        await wait(500);
		await interaction.reply({ embeds: [aboutEmbed] });

	},
};