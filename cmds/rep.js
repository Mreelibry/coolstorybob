const Discord = module.require("discord.js");
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Mreelibry:Mreelibry1@cluster0-gtrdx.mongodb.net/flexdata", { useNewUrlParser: true });
const UserData = require('../models/userdata.js')


module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first())
    UserData.findOne({
        userID: rUser.id,
        serverID: message.guild.id
    }, (err, userdata) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("У вас нет прав, на использование данной команды!");
        if(!args[0]) return bot.send("Вы не указали пользователя");
        if(!rUser) return bot.send("Пользователь не найден");
        if(args[1]) return bot.send("Вы не можете давать больше чем одну репутацию");
        userdata.reputation = userdata.reputation + 1
        userdata.save().catch(err => console.log(err))
        bot.send(`${CT} - Значок был добавлен!`)
    })
};


module.exports.help = {
    name: "rep",
    aliases: []
};