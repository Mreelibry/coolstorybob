const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
  let a = message.author
   let reason = args.slice(0).join(" ");
   if(!reason) {
       const noreason = new Discord.RichEmbed()
       .setAuthor("Голосование")
       .setTitle("Пожалуйста, введите сообщение перед отправкой голосования.")
       .setColor('#800080');
       message.channel.send({embed:noreason})
       return;
   }
   const done = new Discord.RichEmbed()
   .setAuthor(`${message.author.username}`, ` ${message.author.avatarURL}`)
   .setDescription(`${reason}`)
   .setColor('#800080');
   let m = await message.channel.send({embed:done})
   await m.react("☑")
   await m.react("❎")

};
module.exports.help = {
    name: "vote",
    aliases: []
};