const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => { 

    if(args.length === 0) {
        let embed = new Discord.RichEmbed()
        .setColor('#800080')
        .setTitle(`Фото  ${message.author.username}`)
        .setImage(message.author.displayAvatarURL);

        return message.channel.send(embed);
    } else {
        let aUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(aUser) {
            let embed = new Discord.RichEmbed()
            .setColor('#800080')
            .setTitle(`Фото`)
            .setDescription(`Фото ${aUser.user.username}`)
            .setImage(aUser.user.displayAvatarURL);

            return message.channel.send(embed);
        } else {
            message.reply(" Пользователь не существует!");
        }
    }
}

module.exports.help = {
    name: "avatar",
    aliases: []
}