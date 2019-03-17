const Discord = module.require("discord.js");
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Mreelibry:Mreelibry1@cluster0-gtrdx.mongodb.net/flexdata", { useNewUrlParser: true });
const UserData = require('../models/userdata.js')

module.exports.run = async (bot,message,args) => {
    let target = message.mentions.members.first();
    let amt = parseInt(args[1]);
  if (amt<0) return message.reply("Детдом - оформлен");
   UserData.findOne({
       userID: message.author.id,
       serverID: message.guild.id
   }, (err, userdata) => {
    if(isNaN(args[1])) return bot.send("Вы указали не число!")
       if(!userdata) {return bot.send("pasholnahoY")} else{
        if (message.mentions.users.first() == message.author) return message.channel.send('Самому себе низя')
    if(!args[0] ) return bot.send("Пользователь не найден!")
    if(!target) return bot.send("Пользователь не найден");
    if(userdata.coins<amt) return message.channel.send(`У вас недостаточно ${args[1]} монет`);
    UserData.findOne({
        userID: target.id,
      }, (err, targetres) => {
    userdata.coins = userdata.coins - amt;
    userdata.save().catch(err => console.log(err))
    if (!targetres) {
        const newTargetRes = new UserData({
          username: target.user.username,
          userID: target.id,
          serverID: message.guild.id,
          badges: "",
          coins: amt,
          lvl: 1,
          warns: 0,
          xp: 0,
          reputation: 0,
          wins: 0,
          loss: 0,
          msgcount: 0,
        })
        newTargetRes.save().catch(err => console.log(err))
      } else {
        targetres.coins = targetres.coins + amt;
        targetres.save().catch(err => console.log(err))
      }
    
       
    message.channel.send("+bablo");

})}

   })
   
};
module.exports.help = {
    name: "pay",
    aliases: []
};