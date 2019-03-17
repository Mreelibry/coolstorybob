const Discord = require('discord.js'); 
 
exports.run = (client, message, args, tools) => {
 
  let pages = ['\n**Команды для админов!**\n\n`!addcoins <@user> <Количество> - Добавление денег!\n!removecoins <@user> <Количество> - Удаление денег!\n!ban <@user> - Бан человека!\n!kick <@user> - Кик человека\n!mute <@user> <Врёмя в секундах> - Выдает мут игроку на определенное время!\n!unmute <@user> - Снимает мут у указанного человека\n!pinfo <@user> - Показывает профиль человека!\n!addbg <Значок> <@user> - Если не указать пользователя вы выдадите значок самому себе.`','\n**Команды для админов!**\n\n`\n!say <Сообщение> - Сообщение от имени бота!\n!addrole <@user> <role> - Добавляет роль указанному человеку!\n!removerole <@user> <role> - Удаляет роль указанному человеку!\n!rep <@user> - Добавляет очко репутации указанному человеку!\n!warn <@user> - Выдает предупреждение указанному человеку!\n!unwarn <@user> - Снимает предупреждение у указанного человека!\n!clear <Количество> - Очищает чат!\n!setstatus <statustype> <Значение>`']; 
  let page = 1; 
 
  const embed = new Discord.RichEmbed() 
    .setColor(0xffffff)
    .setFooter(`Page ${page} of ${pages.length}`) 
    .setDescription(pages[page-1])
 
  message.channel.send(embed).then(msg => { 
   
    msg.react('⏪').then( r => { 
      msg.react('⏩') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Page ${page} of ${pages.length}`); 
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === pages.length) return; 
        page++; 
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Page ${page} of ${pages.length}`); 
        msg.edit(embed) 
      })
   
    })
 
  })
 
}
module.exports.help = {
    name: "pages",
    aliases: []
};