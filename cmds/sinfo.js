const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	let creationDate = message.guild.createdAt;
	let todayDate = new Date();

	let diffDays = Math.round(Math.abs((creationDate.getTime() - todayDate.getTime())/(oneDay)));

    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .addField("Название сервера", message.guild.name)
    .addField("Количество участников", message.guild.memberCount)
    .addField("Дней серверу", diffDays)
    .addField("Вы зашли", message.member.joinedAt.toLocaleString())
    .setThumbnail(message.guild.iconURL)
    .setTimestamp()
    .setAuthor('Информация о сервере')
    .setFooter(`${message.author.tag}`);

    bot.send(embed);

};
module.exports.help = {
    name: "sinfo",
    aliases: []
};