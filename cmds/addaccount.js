const Discord = module.require("discord.js");
const profile = require("../profile.json");
const fs = require('fs')

module.exports.run = async (bot,message,args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("У вас нет прав, на использование данной команды!");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!rUser) return bot.send("Пользователь не найден");
    let uid = message.author.id;
    if(profile[rUser.id]) return bot.send("Ошибочка, данный профиль уже находится в базе данных");

    profile[rUser.id] ={
        coins:10,
        warns:0,
        xp:0,
        lvl:1,
        reputation:0,
        loss:0,
        vin:0,
        msgcount:0,
    };
    

    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .addField("Вы добавили в базу данных ",`${rUser.user.tag}`);
    message.channel.send(embed);
fs.writeFile(`./profile.json`, "", function(error){
 
    if(error) throw error; 
    console.log("Успешное добавление в базу данных!");
    let data = fs.readFileSync("./profile.json", "utf8");
});


};

module.exports.help = {
    name: "dacc",
    aliases: []
};