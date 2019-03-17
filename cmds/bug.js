const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
   let reason = args.slice(0).join(" ");
   if(!reason) {
       const noreason = new Discord.RichEmbed()
       .setAuthor(bot.user.username,bot.user.avatarURL)
       .setTitle(":warning:Пожалуйста, опишите суть проблемы, о чем вы хотите сообщить .")
       .setColor('#800080')
       message.channel.send({embed:noreason}).then(msg => msg.delete(15*1000));
       return;
   }
   let a = message.guild.channels.find(c => c.id = '549730083938631680');
   const done = new Discord.RichEmbed()
    .setTitle(":white_check_mark: Ваш баг был передан администратору")
    .setDescription(`Ваш отчет был успешно отправлен!`)
    .setColor('#800080')
   message.channel.send({embed:done}).then(msg => msg.delete(15*1000));

   const dm = new Discord.RichEmbed()
   .addField(`Отчет`, `${message.author.username}, ID:${message.author.id} Сообщает о ошибке!`)
   .addField(`Суть бага:`, `${reason}`)
   .setColor('#800080');
   message.delete().catch(O_o=>{});
   a.send({embed:dm})
}

module.exports.help = {
  name: "bug",
  aliases: []
}