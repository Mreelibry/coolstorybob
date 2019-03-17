const Discord = require("discord.js");
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Mreelibry:Mreelibry1@cluster0-gtrdx.mongodb.net/flexdata", { useNewUrlParser: true });
const UserData = require("../models/userdata.js")

module.exports.run = async (bot,message,args) => {
    UserData.findOne({
        userID: message.author.id
    }, (err, userdata) => {
        if(isNaN(userdata.loss)){
            userdata.loss = 0
            userdata.save().catch(err => console.log(err))
        }
        if(isNaN(userdata.msgcount)){
            userdata.msgcount = 1
            userdata.save().catch(err => console.log(err))      
        }
        if(isNaN(userdata.warns)){
            userdata.warns = 0
            userdata.save().catch(err => console.log(err))      
        }
        if(isNaN(userdata.wins)){
            userdata.wins = 0
            userdata.save().catch(err => console.log(err))      
        }
        if(isNaN(userdata.reputation)){
            userdata.reputation = 0
            userdata.save().catch(err => console.log(err))      
        }
        if(isNaN(userdata.lvl)){
            userdata.lvl = 1
            userdata.save().catch(err => console.log(err))      
        }
        if (err) console.log(err);
    let embed = new Discord.RichEmbed()
    .setDescription("Профиль")
    .setColor('#800080')
   .addField('ℹ️ Ваша роль', message.guild.member(message.author.id).roles.filter(r => r.id != message.guild.id).map(role => `**${role.name}**`).join(', ') || 'Не имеет')
   .addField("💰 Ваш баланс:",`${userdata.coins}`)
   .addField("Ваши значки", userdata.badges || 'Не имеет')
   .addField("⚠️ Количество варнов:",`${userdata.warns}`)
   .addField("<:starlvl:550429141690744868> Ваш уровень:",`${userdata.lvl}`)
   .addField("<:xp:551402968403017750> Ваш опыт:",`\n${userdata.xp}/${(userdata.lvl + 1) * 10}`)
   .addField(":speech_left: Количество отправленных сообщений:", `${userdata.msgcount}`)
   .addField("<:staric:553262805877391370> Ваша репутация:",`${userdata.reputation}`)
   .addField("<:success:553262506391633945> Выигрышей: ",`${userdata.wins}`,true)
   .addField("<:close:553262572975947791> Проигрышей: ",`${userdata.loss}`, true)
   .setFooter(message.author.tag,message.author.avatarURL)
   .setTimestamp()
   
    

   message.channel.send(embed);
    })
}

module.exports.help = {
    name: 'profile',
    aliases: []
}
    
