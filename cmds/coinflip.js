const Discord = module.require("discord.js");
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Mreelibry:Mreelibry1@cluster0-gtrdx.mongodb.net/flexdata", { useNewUrlParser: true });
const UserData = require('../models/userdata.js')

module.exports.run = async (bot,message,args) => {
    let amt = parseInt(args[1]);
    UserData.findOne({
        userID: message.author.id,
        serverID: message.guild.id
    }, (err, userdata) => {
     
        if(isNaN(args[1])) return bot.send("Вы указали не число!")
         
        if(!args[1]) return bot.send("Укажите ставку");
   
        if(args[1] < 10) return bot.send("Минимальная ставка 10");

        if(!args[0]) return bot.send("Вы не указали сторону")
        if(userdata.coins<amt) return message.channel.send(`У вас недостаточно ${args[1]-userdata.coins} монет`);
        let slots = ['CT', 'TT'];
        
        
        let rand1 = Math.floor(Math.random() * (slots.length - 0) + 0);
        let slot = slots[rand1]
      
        if(slots.indexOf(args[0]) == -1){
        
            let errdmembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle("Вы не правильно указали сторону!")
            message.channel.send(errdmembed);
        } else 
        if(args[0] == slot){
            if(slot == 'CT'){
               userdata.coins = userdata.coins + Math.floor(parseInt(args[1]*1))
               userdata.wins = userdata.wins + 1
               userdata.save().catch(err => console.log(err))
            let gdembd = new Discord.RichEmbed()
            .setColor('#33ff66')
            .addField(`**Вы выиграли:**`, `***${args[1]}$***`, true)
            .addField(`**Выпало:**`, `***${slot}***`, true)
            .setFooter(`${message.author.tag}`)
            .setThumbnail('https://i.imgur.com/KIvijUm.png')
            .setTimestamp()
            message.channel.send(gdembd);
            } else {
                userdata.coins = userdata.coins + Math.floor(parseInt(args[1]*1));
                userdata.wins = userdata.wins + 1
    
                let ddembd = new Discord.RichEmbed()
                .setColor('#33ff66')
                .addField(`**Вы выиграли:**`, `***${args[1]}$***`, true)
                .addField(`**Выпало:**`, `***${slot}***`, true)
                .setFooter(`${message.author.tag}`)
                .setThumbnail('https://i.imgur.com/5HyaW4u.png')
                .setTimestamp()
                message.channel.send(ddembd);
                userdata.save().catch(err => console.log(err))
            }
            
            
        } else if(args[0] != slot){
            if(slot == 'CT'){
                userdata.coins = userdata.coins - Math.floor(parseInt(args[1]*1))
                userdata.loss = userdata.loss + 1
                userdata.save().catch(err => console.log(err))
             let lssembd = new Discord.RichEmbed()
             .setColor('#990000')
             .addField(`**Вы проиграли:**`, `***${args[1]}$***`, true)
             .addField(`**Выпало:**`, `***${slot}***`, true)
             .setFooter(`${message.author.tag}`)
             .setThumbnail('https://i.imgur.com/KIvijUm.png')
             .setTimestamp()
             message.channel.send(lssembd);
             } else {
                 userdata.coins = userdata.coins - Math.floor(parseInt(args[1]*1));
                 userdata.loss = userdata.loss + 1
                 userdata.save().catch(err => console.log(err))
                 let lsembd = new Discord.RichEmbed()
                 .setColor('#990000')
                 .addField(`**Вы проиграли:**`, `***${args[1]}$***`, true)
                 .addField(`**Выпало:**`, `***${slot}***`, true)
                 .setFooter(`${message.author.tag}`)
                 .setThumbnail('https://i.imgur.com/5HyaW4u.png')
                 .setTimestamp()
                 message.channel.send(lsembd);
             }
          
        }
     
     
      
    })
};
module.exports.help = {
    name: "coinflip",
    aliases: []
};