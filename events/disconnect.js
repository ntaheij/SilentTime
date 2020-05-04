const Discord = require("discord.js");
const botconfig = require("../config/botconfig.json");
const name  = botconfig.name;

module.exports = bot =>
{
    console.error();
    console.log(`${name} disconnected at ${new Date()}.`)
}