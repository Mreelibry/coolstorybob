const Discord = module.require("discord.js");
let profile = require('../profile.json');
const fs = require('fs');

module.exports.run = async (bot,message,args) => {
    try{
        
    let roles = ['Властелин','Доверенное Лицо','Аниме','Vip','Аутист','Знакомый','Designer'];
    let prices = [10000,8000,7000,6000,4000,2000,1000];
    let spisok = '';
    let x = args[0]-1;
    function isNumeric(n) {
    
        return !isNaN(parseFloat(n)) && isFinite(n);
         
    }
    for(let i =0;i<roles.length;i++){
        spisok+=`**[${i+1}]** | ${roles[i]} : ${prices[i]}\n`;
    }
    if(!args[0])return bot.send(spisok+'Используйте "!shop Число" - Для покупки');
    if(args[0]>roles.length) return bot.send("Вы ввели слишком больше число");
    if(profile[message.author.id].coins<prices[x]) return bot.send("Вам не хватает денег");
    if(args[0]<=0) return bot.send("Вы ввели слишком маленькое число");
    if(!isNumeric(args[0])) return bot.send("ВВедите число")

    if(roles[x]){
    
        let role = message.guild.roles.find(r => r.name === `${roles[x]}`);
        if(!role) return bot.send("Роль не найдена")
        if(message.member.roles.has(role.id)) return bot.send("Вы уже купили эту роль");
        profile[message.author.id].coins -= prices[x];
        message.member.addRole(role);
        bot.send(`Вы купили роль ${role.name} за ${prices[x]} монет`);
        fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
            if(err) console.log(err);
        });
    }

    }catch(err){
        console.log(`Произошла ошибка\n\n\n:${err.name}\n\n\n:${err.message}\n\n\n:${err.stack}`);
    }

};
module.exports.help = {
    name: "shop",
    aliases: []
};