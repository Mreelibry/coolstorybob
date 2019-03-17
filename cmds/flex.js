const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require('../profile.json')
userUsed = new Set();
module.exports.run = async (bot,message,args) => {
    
    if(userUsed.has(message.author.id)) {
    let embed = new Discord.RichEmbed()
    .setColor('#4591F1')
    .setDescription('Вам нужно подождать, пержде чем использовать эту команду повторно!')
     message.channel.send(embed)
    }
    else{
 
    let slot = ["Ты - Фl3х М@|_|_|ина.", "Чуист, братан.", "Все швепс.","Ля, какой.","Оуу май, да ты сасный.","Какой ты $еКs"];
    let result = Math.floor((Math.random() * slot.length))

    message.channel.send(slot[result])

    userUsed.add(message.author.id);
    setTimeout(() => {
        userUsed.delete(message.author.id);
          }, 1000 * 3)
     }
}
module.exports.help = {
    name: "flex",
    aliases: []
};