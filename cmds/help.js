const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const Discord = require('discord.js')
    let embed = new Discord.RichEmbed()
    
    .setTitle("Помощь!")
    .addField("<:economy:551415169377632256> **Экономика** <:economy:551415169377632256>","**!bonus \n !pay @Пользователь количество монеток - передает монетки на счет другого пользователя. \n!casino Количество - Испытывай удачу и приумножай свой баланс! \n!money - проверка вашего баланса! \n!RoleShop Номер - Магазинчик ролей\n !joblist - узнать список работ :3**")
    .addField(":gear: **Основные команды**:gear:", "**!report** ***@Пользователь*** **\n!info**\n ***!bug суть бага***\n**!ping проверить роботоспособность бота**\n", true)

    .setColor('#800080')
    await message.channel.send(embed)
}

module.exports.help = {
    name: 'help',
    aliases: []
}
    