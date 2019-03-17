const Discord = require("discord.js");
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Mreelibry:Mreelibry1@cluster0-gtrdx.mongodb.net/flexdata", { useNewUrlParser: true });
const UserData = require("../models/userdata.js")
module.exports.run = async (bot,message,args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("У вас нет прав, на использование данной команды!");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!rUser) return bot.send("Пользователь не найден");
    UserData.findOne({
        userID: rUser.id
    }, (err, userdata) => {
        if (err) console.log(err);
    let embed = new Discord.RichEmbed()
    .setDescription("Профиль")
    .setColor('#800080')
   .addField('ℹ️ роли', message.guild.member(message.author.id).roles.filter(r => r.id != message.guild.id).map(role => `**${role.name}**`).join(', ') || 'Не имеет')
   .addField("💰 Ваш баланс:",`${userdata.coins}`)
   .addField("Ваши значки", userdata.badges || 'Не имеет')
   .addField("⚠️ Количество варнов:",`${userdata.warns}`)
   .addField(" Ваш уровень:",`${userdata.lvl}`)
   .addField("Ваш опыт:",`\n${userdata.xp}/${(userdata.lvl + 1) * 10}`)
   .addField("Количество отправленных сообщений:", `${userdata.msgcount}`)
   .addField("Ваша репутация:",`${userdata.reputation}`)
   .addField("Выигрышей: ",`${userdata.wins}`,true)
   .addField("Проигрышей: ",`${userdata.loss}`, true)
   .setFooter(message.author.tag,message.author.avatarURL)
   .setTimestamp()
   
    

   message.channel.send(embed);
    })
};
module.exports.help = {
    name: "pinfo",
    aliases: []
};
