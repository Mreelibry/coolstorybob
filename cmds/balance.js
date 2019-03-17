const Discord = require("discord.js");
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Mreelibry:Mreelibry1@cluster0-gtrdx.mongodb.net/flexdata", { useNewUrlParser: true });
const UserData = require("../models/userdata.js")
module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("Coins")
    .setThumbnail(message.author.displayAvatarURL);

  UserData.findOne({
    userID: message.author.id,
  }, (err, flexcns) => {
    if (err) console.log(err);

    if (!flexcns) {
      embed.setColor("RED");
      embed.addField("Error", "Sorry, you don't have any coins in this server...");
    } else {
      embed.setColor("BLURPLE");
      embed.addField(flexcns.username, flexcns.coins + " coins.");
    }

    message.channel.send(embed)})
}
module.exports.help = {
    name: "money",
    aliases: ['balance', 'bal']
}

