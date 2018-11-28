client.on('message', msg => {
  if (msg.content === 'discord.gg|net|channe|channel|com|net|www|') {
   msg.delete(30)
    msg.reply('Reklam Engellendi');
  }
});
