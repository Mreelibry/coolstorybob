const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection()
bot.mutes = require('./mutes.json');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;
const mongoose = require('mongoose');
const UserData = require('./models/userdata.js')
mongoose.connect("mongodb+srv://Mreelibry:Mreelibry1@cluster0-gtrdx.mongodb.net/flexdata", { useNewUrlParser: true });
fs.readdir('./cmds/', (err, files) => {
    if (err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) console.log("нет комманд для загрузки");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}.${f} Загружен`);
        bot.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {
            bot.aliases.set(props.help.name, alias)
        });
    });
});

const activities_list = [
    "!help - Посмотреть список комманд!",
    "порно.",
    "за твоей мамой!",
    `видео "Как научится флексить".`,
    "как ты моешься.",
    "vk.com/wacab - создатель!"
];
bot.on('ready', () => {
    bot.user.setStatus('available')
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index], { type: 'WATCHING' }); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000);
    console.log(`На сервер зашел ${bot.user.username}!`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log(link);
    })
});

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('556489872391798794').send(`${member} соси член`);
});

bot.setInterval(() => {
    for (let i in bot.mutes) {
        let time = bot.mutes[i].time;
        let guildid = bot.mutes[i].guild;
        let guild = bot.guilds.get(guildid);
        let member = guild.members.get(i);
        let muteRole = member.guild.roles.find(r => r.name === "Muted");
        if (!muteRole) continue;

        if (Date.now() >= time) {
            member.removeRole(muteRole);
            delete bot.mutes[i];
            fs.writeFile('./mutes.json', JSON.stringify(bot.mutes), (err) => {
                if (err) console.log(err);
            });
        }
    }

}, 5000)
async function test1() {
    bot.channels.find(c => c.id === "556454615999053850").setName(`Всего участников: ${bot.guilds.get('553696575961169970').members.size}`);
    bot.channels.find(c => c.id === "556460589950566407").setName(`Людей: ${bot.guilds.get('553696575961169970').members.filter(mem => !mem.user.bot === true).size}`);
    bot.channels.find(c => c.id === "556486282121838593").setName(`Ботов: ${bot.guilds.get('553696575961169970').members.filter(mem => mem.user.bot === true).size}`);
    bot.channels.find(c => c.id === "556487989145108502").setName(`В сети: ${bot.guilds.get('553696575961169970').presences.size}`);
}; setInterval(test1, 30000)

bot.on('guildMemberAdd', (member) => {
    let role = member.guild.roles.find(r => r.name === "Новичок");
    member.addRole(role);
});

bot.on('message', async message => {
    bot.send = function (msg) {
        message.channel.send(msg);
    };
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    if (!message.content.startsWith(prefix)) {
        let coinstoadd = Math.ceil(Math.random() * 5);
        let xptoadd = Math.ceil(Math.random() * 7);
        UserData.findOne({
            userID: message.author.id
        }, (err, flexcns) => {
            if (err) console.log(err);

            if (!flexcns) {
                const newDoc = new UserData({
                    username: message.author.username,
                    userID: message.author.id,
                    serverID: message.guild.id,
                    badges: "",
                    coins: coinstoadd,
                    lvl: 1,
                    warns: 0,
                    xp: xptoadd,
                    reputation: 0,
                    wins: 0,
                    loss: 0,
                    msgcount: 0
                })
                newDoc.save().catch(err => console.log(err));
            } else {
                flexcns.coins = flexcns.coins + coinstoadd;
                flexcns.xp = flexcns.xp + xptoadd;
                flexcns.msgcount = flexcns.msgcount + 1;
                if (flexcns.xp >= ((flexcns.lvl + 1) * 10)){
                    flexcns.xp = 0;
                    flexcns.lvl += 1;
                    let lvlup = new Discord.RichEmbed()
                    .addField(`Вы повысили свой уровень до`,`${flexcns.lvl}!`)
                    .setFooter(message.author.tag,message.author.avatarURL).setTimestamp()
                    message.channel.send(lvlup)
                }
                flexcns.save().catch(err => console.log(err))
            }
        })
           }




        let messageArray = message.content.split(" ");
        let command = messageArray[0].toLowerCase();
        let args = messageArray.slice(1);
        if (!message.content.startsWith(prefix)) return;
        let cmd = bot.commands.get(command.slice(prefix.length));
        if (cmd) cmd.run(bot, message, args);
        bot.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        bot.uId = message.author.id;
    });
bot.login(token);