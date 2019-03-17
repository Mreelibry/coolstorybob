const Discord = module.require("discord.js");
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Mreelibry:Mreelibry1@cluster0-gtrdx.mongodb.net/flexdata", { useNewUrlParser: true });
const UserData = require('../models/userdata.js')

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return bot.send("Вы не можете использовать эту команду!")
    let target = message.mentions.members.first();
    

    
    if(!args[0]){
   
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            if(err) console.log(err)
            userdata.badges = ''
            userdata.save().catch(err => console.log(err))
            bot.send("Профиль был успешно очищен.")
        })
    
}else if(args[0] == target){
    if(!target) return bot.send("Пользователь не найден");
    UserData.findOne({
        userID: target.id,
        serverID: message.guild.id
    }, (err, userdata) => {
        if(err) console.log(err)
        userdata.badges = ''
        userdata.save().catch(err => console.log(err))
        bot.send("Профиль был успешно очищен.")
    })
    }
}
module.exports.help = {
    name: "clearbadge",
    aliases: []
};