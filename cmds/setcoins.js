const Discord = module.require("discord.js");
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Mreelibry:Mreelibry1@cluster0-gtrdx.mongodb.net/flexdata", { useNewUrlParser: true });
const UserData = require("../models/userdata.js")

module.exports.run = async (bot, message, args) => {
    await message.delete()
    let definedUser = message.mentions.users.first();
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!definedUser) return bot.send("Пользователь не найден");
    let amt = parseInt(args[1]);
UserData.findOne({
    userID: definedUser.id,
    serverID: message.guild.id
}, (err, userdata) => {
    
    if(amt<0) return bot.send("Вы не можете указать сумму меньше чем 0")
    if(isNaN(args[1])) return bot.send("Вы указали не число!")
    if (err) console.log(err);
    userdata.coins = parseInt(args[1])
    userdata.save().catch(err => console.log(err))
    let embed = new Discord.RichEmbed()
    .setColor("#00CC66")
    .addField("Баланс пользователя", userdata.coins,true)
    .addField("Имя пользователя", message.author.username,true)
    .setFooter(message.author.tag,message.author.avatarURL)
    .setTimestamp()
     message.channel.send(embed)
})
    
    }
module.exports.help = {
    name: "setcoins",
    aliases: []
};