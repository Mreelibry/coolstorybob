const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require('../profile.json')
module.exports.run = async (bot,message,args) => {
 
    try{
 
    function isNumeric(n) {
   
            return !isNaN(parseFloat(n)) && isFinite(n);
             
    }
 
    let slot = ['1', '2', '3','5'];
    let rand1 = Math.floor(Math.random() * (slot.length - 0) + 0);
    let rand2 = Math.floor(Math.random() * (slot.length - 0) + 0);
    let rand3 = Math.floor(Math.random() * (slot.length - 0) + 0);
 
    let result = slot[rand1]+slot[rand2]+slot[rand3];
   
 
 
        if(!profile[message.author.id]) return bot.send("Хм.. Вы у нас новенький! Напишите комманду еще раз! Вы теперь есть в шашей базе данных.");
       
        let uCoins = profile[message.author.id].coins
 
        let coef1 = 1
        let coef2 = 25
   
   
        if(!isNumeric(args[0])) return bot.send("У вас недостаточно средств!");
   
        if(!args[0]) return bot.send("Укажите ставку");
   
        if(uCoins<parseInt(args[0])) return bot.send(`Ваша ставка слишком большая! Ваш баланс: ${uCoins}`);
   
        if(args[0] < 10) return bot.send("Минимальная ставка 10");
   
        if(rand1==rand2 || rand2==rand3){
            profile[message.author.id].coins += Math.floor(parseInt(args[0]*coef1));
            let embed = new Discord.RichEmbed()
        .setColor('#800080')
        .addField(`💎 Выигрыш 💎`,`🔸 Выиграно: 🔸\n 🔹 ${Math.floor(parseInt(args[0]*coef1))}  монеток! 🔹\n 🔸 Ваш баланс: 🔸\n 🔹 ${profile[message.author.id].coins} 🔹`)
        message.channel.send(embed);
   
       
        }else if(rand1 == rand2 && rand2 == rand3){
           profile[message.author.id].coins += Math.floor(parseInt(args[0]*coef2));
            let embed = new Discord.RichEmbed()
        .setColor('#800080')
        .addField(`💎 Большой Выигрыш 💎`,`🔸 Выиграно: 🔸\n 🔹 ${Math.floor(parseInt(args[0]*coef2))} монеток! 🔹\n 🔸 Ваш баланс: 🔸\n 🔹 ${profile[message.author.id].coins} 🔹`) 
        message.channel.send(embed);
 
   
        }else{
            profile[message.author.id].coins -= Math.floor(parseInt(args[0]));
            let embed = new Discord.RichEmbed()
            .setColor('#800080')
            .addField(`❌ Проигрыш ❌`,`⛔ Проиграно: ⛔\n ⛔ ${args[0]}  монеток ⛔\n ⛔ Ваш баланс: ⛔\n ⛔ ${profile[message.author.id].coins} ⛔`);
            message.channel.send(embed);
        }    
        fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
            if(err) console.log(err);
        });
   
}catch(err){
    console.log(`Произошла ошибка\n\n\n:${err.name}\n\n\n:${err.message}\n\n\n:${err.stack}`);
}
};
module.exports.help = {
    name: "casino",
    aliases: []
};