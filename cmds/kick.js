const Discord = module.require("discord.js");
const fs = require('fs');

module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав, на использование данной команды!");
 let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(rUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Вы не можете кикнуть администратора");
    if(!rUser) return bot.send("Пользователь не найден");

    let embed = new Discord.RichEmbed()
    .setDescription("Кик")
    .setColor('#800080')
    .addField("Администратор",message.author.username)
    .addField("Кикнул",`${rUser.user.username}`);
    message.channel.send(embed);
    
    message.guild.member(rUser).kick
    }catch(err){
        console.log(`Произошла ошибка\n\n\n:${err.name}\n\n\n:${err.message}\n\n\n:${err.stack}`);
    };

};
module.exports.help = {
    name: "kick",
    aliases: []
};