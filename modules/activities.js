module.exports.name = "Discord VC Activities";

const client = require('../bot.js').client;
const messages = require('../messages.json');

const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client, {
    token: process.env.BOT_TOKEN
});
