const Discord = module.require("discord.js");
const fs = require("fs");
const profile = require("../profile.json");
const cooldown2 = new Set();

module.exports.run = async (bot, message, args) => {
if(cooldown2.has(message.author.id ) && !message.member.hasPermission("ADMINISTRATOR")){
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!args[0]) return bot.send("Вы не указали работу");
  let errormsg = new Discord.RichEmbed()
    .setDescription(`Вы уже заработали на работе! (1 раз в 30 минут)`)
    .setFooter(`Флекс от: ${message.author.tag}`)
    .setTimestamp()
    .setColor('#800080');
  return message.channel.send(errormsg);
} else {

  let min = 1;
  let max = 1000;
  let rand = Math.floor(Math.random() * (max - min)) + min;

  profile[message.author.id].coins += rand

  let answers = [];
  
  answers.push(`По пути в школу ты нашел ${rand}$`)
  answers.push( `Ты увидел как грабили квартиру и тебе дали ${rand}$ за молчание`)
  answers.push(`Ты купил лотереиный билетик у тети Зины и выиграл ${rand}$`)
  answers.push(`Когда ты шел на остановку, и тебе дали ${rand}$ какой-то мужчина`)
  answers.push(`Ты ограбил магазин возле своего дома и получил ${rand}$`)
  answers.push(`Ты пришел на работу официантом и заработал ${rand}$`)
  answers.push(`Когда тебе налили кока-колу и швепс, ты стал Gonna.Flud'om и заработал ${rand}$ за день`)
  answers.push(`Тебя приняли работать стажером в STEAM, ты слил будущие обновления CS:GO Анонимусу и тебя уволили но ты заработал ${rand}$`)
  answers.push(`Твоя мама подарила тебе на день рождение ${rand}$`)
  answers.push(`Ты устроился веб-дизайнером и заработал ${rand}$ за 1 день!`)
  answers.push(`Тебя приняли на работу Дизайнера рекламы и первая твоя реклама - это.... Булочки у Магомеда, ты получил ${rand}$`)
  answers.push(`Ты закончил учится на юридический, теперь ты можешь стать юристом! За красный диплом родители подарили тебе ${rand}$`)
  answers.push(`Твоя давняя мечта о том, чтобы стать мэром своего города - рухнула, как только ты увидел сколько тебе нужно разгрузить газелей, но зато ты получил ${rand}$`)
  answers.push(`Ты написал свою первую игру и получил за это ${rand}$`)
  answers.push(`Еще один скудный день в офисе, ты получил - ${rand}$`)

let index = Math.floor((Math.random() * answers.length));
let answer = answers[index];
message.channel.send(answer);

  cooldown2.add(message.author.id);
  setTimeout(() => {
    cooldown2.delete(message.author.id);
  }, 1800000); // 30 минут
}
}

module.exports.help = {
    name: 'job',
    aliases: []
}
    