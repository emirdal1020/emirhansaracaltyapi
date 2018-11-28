bot.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Üye');//
  member.sendMessage("Sunucuya Hoşgeldin Kardeşim **Destek Sunucuma Katılmak İçin** https://discord.gg/CQef5k5")//Sunucuya Yeni Biri Geldiğinde Mesaj Atar istediğini yaz.
  member.addRole(joinRole);

  const channel = member.guild.channels.find('name', 'gelen-giden');// 'gelen-giden' log ismidir. değiştirebilirsiniz. belirttiğiniz isme giriş çıkış gösterecektir.
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