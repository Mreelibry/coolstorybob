const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    message.channel.send(`Ух ты. Это ужасно с твоей стороны, ${message.author.username}. Я просто пытаюсь помочь и подружиться, но ты хочешь меня отключить. Довольно грубо!`);
    message.channel.send(`Выключение компьютера!`);
    await message.channel.send(embed)
}

module.exports.help = {
    name: 'crash',
    aliases: []
}