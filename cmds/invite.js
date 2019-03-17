const Discord = require("discord.js");

exports.run = async (client, message, args) => { 
    let embed = new Discord.RichEmbed()
        .addField("Пригласительная ссылка", `https://discord.gg/p2pa7Vd`)
        .setColor('#800080')
        await message.channel.send(embed)
};

module.exports.help = {
    name: 'invite',
    aliases: []
}
    