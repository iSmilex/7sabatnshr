const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");

client.on('ready', () => {
  client.user.setGame(`Dynasty Server.`,"http://twitch.tv/S-F")
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});


 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
حيآك الله في سيرفر داينستي للسوآلف والفلة . 
كل يوم فعآليآت : كتآبية - صوتية
- كرسي الإعترآف
- أسرع كتآبة
- فكك
** الرآبط :link: : https://discord.gg/J9srXnG **`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
حيآك الله في سيرفر داينستي للسوآلف والفلة . 
كل يوم فعآليآت : كتآبية - صوتية
- كرسي الإعترآف
- أسرع كتآبة
- فكك
** الرآبط :link: : https://discord.gg/J9srXnG **
`) 
}).catch(console.error)
})
client.login('NDgyMjY5NjEyNDYxOTE2MTYy.DmCfPw.i31uJUkLD0E6u-yLT55SHJm6P1Y');
