const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} Adli Reyiz bir stres çarkı çevirdi!`,
            image: {
                url: "http://c10.haberself.com/res/haberself/59/4/261154_o5c20.gif"
            }
        }
    });

    let bitiş = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, Kanka stres çarkın ${bitiş.toFixed(2)} saniye döndü.`
            }
        });
    }, 5 * 1000);
};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'stresçarkı', 
  description: 'Stres çarkınla meydan oku!',
  usage: 'stresçarkı'
};
