bot.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Üye');//
  member.sendMessage("Sunucuya Hoşgeldin Kardeşim İnşallah eğlenirsin sunucumuzda.")
  member.addRole(joinRole);

  const channel = member.guild.channels.find('name', 'gelen-giden');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('0x00cc44')
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle(`:inbox_tray: ${member.user.username} Sunucuya Hoşgeldin Kanka`)
  .setTimestamp()
  channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'gelen-giden');//
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('0xff1a1a')
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle(`:outbox_tray: ${member.user.username} Açaydım Kollarımı Gitme Diyeydim!`)
  .setTimestamp()
  channel.sendEmbed(embed);
});
