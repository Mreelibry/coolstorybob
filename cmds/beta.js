const Discord = require("discord.js");
const config = require("../config.json");


module.exports.run = async (bot, message, args) => {

    message.delete().catch();

    message.channel.send( `FLEXBOT by Metzker & Eugene`)

    console.log(`»  &COMMAND.BETA → $BETA COMMAND USED`);

    return;
}


module.exports.help = {
    name: "beta",
    aliases: []
}