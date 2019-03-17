const Discord = module.require("discord.js");
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Mreelibry:Mreelibry1@cluster0-gtrdx.mongodb.net/flexdata", { useNewUrlParser: true });
const UserData = require("../models/userdata.js")

module.exports.run = async (bot, message, args) => {
    let definedUser = message.mentions.users.first();
UserData.findOne({
    userID: definedUser.id,
    serverID: message.guild.id
}, (err, userdata) => {
    if (err) console.log(err);
    if(isNaN(args[1])) return bot.send("Вы указали не число!")
    userdata.coins = userdata.coins - parseInt(args[1])
    userdata.save().catch(err => console.log(err))
    message.channel.send("uspeh")
})
    
    }
module.exports.help = {
    name: "removecoins",
    aliases: []
};