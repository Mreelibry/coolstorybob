const Discord = require("discord.js");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Cписок работ")
    .setColor('#800080')
   .addField("*** Дворник ***",'потом придумаю')
   .addField("***Дотер***",'потом придумаю')
   .addField("***Сварщик***",'потом придумаю')
   .addField("***Хацкер***",'потом придумаю')
   .addField("***Ютубе***р",'потом придумаю')
   .addField("***Бизнесмен***",'потом придумаю')
   .setFooter('Чтоб устроиться на работу пропиши - !job [1]', 'https://cdn.discordapp.com/embed/avatars')
   


   await message.channel.send(embed);
}

module.exports.help = {
    name: 'joblist',
    aliases: []
}
 