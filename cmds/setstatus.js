const Discord = require("discord.js");
 module.exports.run = async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Недостаточно прав для использование этой комманды.")
        const typee = args[0];
        const game = args.slice(1).join(' ');
          if(typee == "PLAYING"){
            bot.user.setActivity(game, { type: 'PLAYING' });
          }
          else if(typee == "STREAMING"){
            bot.user.setActivity(game, { type: 'STREAMING' });
          }
          else if(typee == "LISTENING"){
            bot.user.setActivity(game, { type: 'LISTENING' });
          }
          else if(typee == "WATCHING"){
            bot.user.setActivity(game, { type: 'WATCHING' });
          }
          else{
            message.reply("Нет такого статуса!");
          }
          message.channel.send(`***Статус изменен***. ***Теперь я ${typee} ${game}.***`);

}
 module.exports.help = {
  name: "setstatus",
  aliases: []
}