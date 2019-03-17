const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor('#800080')
    .addField("Команда для добавления ролей!", "« Используй: !addrole <@user> <роль> »")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor('#800080')
  .addField("Используй", "!addrole <@user> <role>", true)

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Вы не можете сделать это!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("Укажите роль!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Не могу найти эту роль.");

  if(rMember.roles.has(gRole.id)) return message.channel.send("Этот участник уже имеет данную роль");
  await(rMember.addRole(gRole.id));

    await message.channel.send(`*** Я успешно выдал данную роль   ${rMember.user.username} Роль ${gRole.name} ***`)

    message.delete();
  
}

module.exports.help = {
  name: "addrole",
  description: 'Add role to someone',
  usage: 'addrole <@user> <Role>',
  aliases: []
}