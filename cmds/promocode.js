const Discord = module.require("discord.js");
const profile = require("../profile.json");
const fs = require('fs');
userUseds = new Set();
let ts = require ('../tensec.json');

module.exports.run = async (bot,message,args) => {
    
    try{
        let bonus = ts.onekcoins;
        let time = 1000*60*ts.tensectime;
    if(profile[message.author.id].ts > Date.now()) {
        let embed = new Discord.RichEmbed()
        .setColor('#4591F1')
        .setDescription(`Вам осталось ждать, ${Math.floor(((profile[message.author.id].ts-Date.now())/1000)/60)} минут.`)
         message.channel.send(embed).then(msg => msg.delete(15*1000));
        }
        else{
    if(!args[0]) return bot.send("Вы не указали промо");
    let promocds =       [    'test', 'betatest', 'mooncordteam'];
    let promocds_coins = [       100,        200,            300];
    let promocds_cd =    [1*60*1000,10*60*1000,100*60*1000];
    if(args.length!=1 || promocds.indexOf(args[0]) == -1){
        
        let errdmembed = new Discord.RichEmbed()
        .setColor('#800080')
        .addField("Вы не правильно указали промокод", `либо он уже закончился!`)
        message.channel.send(errdmembed);
    } else {
        profile[message.author.id].coins += promocds_coins[promocds.indexOf(args[0])];
        profile[message.author.id].ts = promocds_cd[promocds.indexOf(args[0])]+Date.now();

        let embed = new Discord.RichEmbed()
        .setColor('#800080')
        .addField("Вы использовали промокод!", `Проверьте свой баланс!`)
        message.channel.send(embed);
    
        fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
            if(err) console.log(err);
        });
    }
    //userUseds.add(message.author.id);
    //setTimeout(() => {
      //  userUseds.delete(message.author.id);
        //  }, 1000 * 10)
       
        }
    }catch(err){
        console.log(`Произошла ошибка\n\n\n:${err.name}\n\n\n:${err.message}\n\n\n:${err.stack}`);
    }
}



module.exports.help = {
    name: "promocode",
    aliases: []
};