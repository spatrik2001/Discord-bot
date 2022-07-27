module.exports = {
    name: 'ping',
    description: 'Ping parancs',
    execute(message, args) {
        message.channel.send('@everyone');
    }
}