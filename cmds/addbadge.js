const Discord = module.require("discord.js");
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Mreelibry:Mreelibry1@cluster0-gtrdx.mongodb.net/flexdata", { useNewUrlParser: true });
const UserData = require('../models/userdata.js')
let bdg = require("../badges.json")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return bot.send("Вы не можете использовать эту команду!")
    let target = message.mentions.members.first();
    if (!args[0]) {
        let pages = [`${bdg.HYDRA} - **HYDRA**\n${bdg.VANGUARD_GOLD} - **VANGUARD_GOLD**\n${bdg.VANGUARD_SILVER} - **VANGUARD_SILVER**\n${bdg.VANGUARD_BRONZE} - **VANGUARD_BRONZE**\n${bdg.HOWL} - **HOWL**\n${bdg.SERVICE_MEDAL_2019_LVL6} - **SERVICE_MEDAL_2019_LVL6**\n${bdg.SERVICE_MEDAL_2019_LVL5} - **SERVICE_MEDAL_2019_LVL5**\n${bdg.SERVICE_MEDAL_2019_LVL4} - **SERVICE_MEDAL_2019_LVL4**\n${bdg.SERVICE_MEDAL_2019_LVL3} - **SERVICE_MEDAL_2019_LVL3**\n${bdg.SERVICE_MEDAL_2019_LVL2} - **SERVICE_MEDAL_2019_LVL2**\n${bdg.SERVICE_MEDAL_2019_LVL1} - **SERVICE_MEDAL_2019_LVL1**`,`${bdg.KATOWICE2019_CRYSTAL} - **KATOWICE2019_CRYSTAL**\n${bdg.KATOWICE2019_GOLD} - **KATOWICE2019_GOLD**\n${bdg.KATOWICE2019_SILVER} - **KATOWICE2019_SILVER**\n${bdg.KATOWICE2019} - **KATOWICE2019**\n${bdg.GUARDIAN} - **GUARDIAN**\n${bdg.GUARDIAN_2} - **GUARDIAN_2**\n${bdg.GUARDIAN_3} - **GUARDIAN_3**\n${bdg.GUARDIANELITE} - **GUARDIANELITE**\n${bdg.BLOODHOUND_GOLD} - **BLOODHOUND_GOLD**\n${bdg.BLOODHOUND_SILVER} - **BLOODHOUND_SILVER**\n${bdg.BLOODHOUND_BRONZE} - **BLOODHOUND_BRONZE**`,`${bdg.BRAVOPIN} - **BRAVOPIN**\n${bdg.BLOODHOUNDPIN} - **BLOODHOUNDPIN**\n${bdg.PHOENIXPIN} - **PHOENIXPIN**\n${bdg.BRIGADIERPIN} - **BRIGADIERPIN**\n${bdg.CANALSPIN} - **CANALSPIN**\n${bdg.DEATHPIN} - **DEATHPIN**\n${bdg.MIRAGE} - **MIRAGE**\n${bdg.INFERNO} - **INFERNO**\n${bdg.FIVEYEARS} - **FIVEYEARS**\n${bdg.TENYEARS} - **TENYEARS**\n${bdg.NODEJS} - **NODEJS**`]; 
  let page = 1; 
 
  const embed = new Discord.RichEmbed() 
    .setTitle("Значки!", "Список значков.")
    .setColor("#ff0000")
    .setFooter(`Page ${page} of ${pages.length}`) 
    .setDescription(pages[page-1])
    .setTimestamp()
 
  message.channel.send(embed).then(msg => { 
   
    msg.react('⏪').then( r => { 
      msg.react('⏩') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Page ${page} of ${pages.length}`); 
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === pages.length) return; 
        page++; 
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Page ${page} of ${pages.length}`); 
        msg.edit(embed) 
      })
   
    })
 
  })
     
    }
    if(!args[1]){
    if (args[0] == "HYDRA") {
        //так делаешь для КАЖДОГО значка
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += bdg.HYDRA
            userdata.save().catch(err => console.log(err))
            bot.send(`${bdg.HYDRA} - Значок был добавлен!`)
        })
    }

    if (args[0] == "NODEJS") {
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += bdg.NODEJS
            userdata.save().catch(err => console.log(err))
            bot.send(`${bdg.NODEJS} - Значок был добавлен!`)
        })
    }
    if (args[0] == "COBBLESTONE") {
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += bdg.COBBLESTONE
            userdata.save().catch(err => console.log(err))
            bot.send(`${bdg.COBBLESTONE} - Значок был добавлен!`)
        })
    }
    if (args[0] == "VANGUARD_GOLD") {
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += bdg.VANGUARD_GOLD
            userdata.save().catch(err => console.log(err))
            bot.send(`${bdg.VANGUARD_GOLD} - Значок был добавлен!`)
        })
    }
    if (args[0] == "PRIME") {
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += bdg.PRIME
            userdata.save().catch(err => console.log(err))
            bot.send(`${bdg.PRIME} - Значок был добавлен!`)
        })
    }
    if (args[0] == "HOWL") {
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += bdg.HOWL
            userdata.save().catch(err => console.log(err))
            bot.send(`${bdg.HOWL} - Значок был добавлен!`)
        })
    }
    if (args[0] == "KATOWICE2019") {
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += bdg.KATOWICE2019
            userdata.save().catch(err => console.log(err))
            bot.send(`${bdg.KATOWICE2019} - Значок был добавлен!`)
        })
    }
    if (args[0] == "KATOWICE2019_SILVER") {
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += bdg.KATOWICE2019_SILVER
            userdata.save().catch(err => console.log(err))
            bot.send(`${bdg.KATOWICE2019_SILVER} - Значок был добавлен!`)
        })
    }
    if (args[0] == "KATOWICE2019_GOLD") {
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += bdg.KATOWICE2019_GOLD
            userdata.save().catch(err => console.log(err))
            bot.send(`${bdg.KATOWICE2019_GOLD} - Значок был добавлен!`)
        })
    }
    if (args[0] == "KATOWICE2019_CRYSTAL") {
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += bdg.KATOWICE2019_CRYSTAL
            userdata.save().catch(err => console.log(err))
            bot.send(`${bdg.KATOWICE2019_CRYSTAL} - Значок был добавлен!`)
        })
    }
    if (args[0] == "FIVEYEARS") {
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += bdg.FIVEYEARS
            userdata.save().catch(err => console.log(err))
            bot.send(`${bdg.FIVEYEARS} - Значок был добавлен!`)
        })
    }
    if (args[0] == "TENYEARS") {
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += bdg.TENYEARS
            userdata.save().catch(err => console.log(err))
            bot.send(`${bdg.TENYEARS} - Значок был добавлен!`)
        })
    }
    if (args[0] == "19SERVICEMEDAL") {
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += TENNINESERVICEMEDAL
            userdata.save().catch(err => console.log(err))
            bot.send(`${TENNINESERVICEMEDAL} - Значок был добавлен!`)
        })
    }
    if (args[0] == "TT") {
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += bdg.TSITE
            userdata.save().catch(err => console.log(err))
            bot.send(`${bdg.TSITE} - Значок был добавлен!`)
        })
    }
    if (args[0] == "BRAVOPIN") {
        UserData.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += bdg.BRAVOPIN
            userdata.save().catch(err => console.log(err))
            bot.send(`${bdg.BRAVOGOLD} - Значок был добавлен!`)
        })
    }
}else if(args[1] == target){
    if(!target) return bot.send("Пользователь не найден");
    if (args[0] == "CT") {
        //так делаешь для КАЖДОГО значка
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += CT
            userdata.save().catch(err => console.log(err))
            bot.send(`${CT} - Значок был добавлен!`)
        })
    }

    if (args[0] == "JS") {
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += JS
            userdata.save().catch(err => console.log(err))
            bot.send(`${DG} - Значок был добавлен!`)
        })
    }
    if (args[0] == "COBBLESTONE") {
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += COBBLESTONE
            userdata.save().catch(err => console.log(err))
            bot.send(`${COBBLESTONE} - Значок был добавлен!`)
        })
    }
    if (args[0] == "VANGUARDGOLD") {
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += VANGUARDGOLD
            userdata.save().catch(err => console.log(err))
            bot.send(`${VANGUARDGOLD} - Значок был добавлен!`)
        })
    }
    if (args[0] == "PRIME") {
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += PRIME
            userdata.save().catch(err => console.log(err))
            bot.send(`${PRIME} - Значок был добавлен!`)
        })
    }
    if (args[0] == "HOWL") {
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += HOWL
            userdata.save().catch(err => console.log(err))
            bot.send(`${HOWL} - Значок был добавлен!`)
        })
    }
    if (args[0] == "KATOWICE2019") {
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += KATOWICE2019
            userdata.save().catch(err => console.log(err))
            bot.send(`${KATOWICE2019} - Значок был добавлен!`)
        })
    }
    if (args[0] == "KATOWICE2019_SILVER") {
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += KATOWICE2019_SILVER
            userdata.save().catch(err => console.log(err))
            bot.send(`${KATOWICE2019_SILVER} - Значок был добавлен!`)
        })
    }
    if (args[0] == "KATOWICE2019_GOLD") {
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += KATOWICE2019_GOLD
            userdata.save().catch(err => console.log(err))
            bot.send(`${KATOWICE2019_GOLD} - Значок был добавлен!`)
        })
    }
    if (args[0] == "KATOWICE2019_CRYSTAL") {
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += KATOWICE2019_CRYSTAL
            userdata.save().catch(err => console.log(err))
            bot.send(`${KATOWICE2019_CRYSTAL} - Значок был добавлен!`)
        })
    }
    if (args[0] == "5YEARS") {
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += FIVEYEARS
            userdata.save().catch(err => console.log(err))
            bot.send(`${FIVEYEARS} - Значок был добавлен!`)
        })
    }
    if (args[0] == "10YEARS") {
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += TENYEARS
            userdata.save().catch(err => console.log(err))
            bot.send(`${TENYEARS} - Значок был добавлен!`)
        })
    }
    if (args[0] == "19SERVICEMEDAL") {
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += TENNINESERVICEMEDAL
            userdata.save().catch(err => console.log(err))
            bot.send(`${TENNINESERVICEMEDAL} - Значок был добавлен!`)
        })
    }
    if (args[0] == "TT") {
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += TT
            userdata.save().catch(err => console.log(err))
            bot.send(`${TT} - Значок был добавлен!`)
        })
    }
    if (args[0] == "BRAVO_GOLD") {
        UserData.findOne({
            userID: target.id,
            serverID: message.guild.id
        }, (err, userdata) => {
            userdata.badges += BRAVOGOLD
            userdata.save().catch(err => console.log(err))
            bot.send(`${BRAVOGOLD} - Значок был добавлен!`)
        })
    }
}
}
module.exports.help = {
    name: "addbg",
    aliases: []
};