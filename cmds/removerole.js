const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Команда для удаления ролей!" , "« Используй: !removerole <@user> <роль> »")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor('#800080')
  .addField("Используй", "!removerole <@user> <роль>", true)

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Larissa needs to give you `manage members` premission to do that!.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);

  if(!role) return message.channel.send("Укажите роль!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Я не могу найти данную роль.");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("У этого пользователя нет данной роли..");
  await(rMember.removeRole(gRole.id));

  await message.channel.send(`*** Я успешно удалил роль у  ${rMember.user.username}'s ${gRole.name} ***`)

  message.delete();

}

module.exports.help = {
  name: "removerole",
  aliases: []
}