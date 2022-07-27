const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const fs = require('fs');

const prefix = '-';
client.commands = new Discord.Collection();

client.once('ready', () => {
    console.log('Irány az űr!');
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
})

client.login('OTc2NzU4NDExMTIxMjY2NzQ4.GvOJ8S.gKHtiK5mFOPIC31YHwxkM7YTyDIzcHbTGS1AV8');