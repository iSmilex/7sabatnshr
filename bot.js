const Discord = require('discord.js');
const one = new Discord.Client();
console.log("Welcome");
 client.on("guildMemberRemove", member => {
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



one.login("NDgyMjY5NjEyNDYxOTE2MTYy.DmCfPw.i31uJUkLD0E6u-yLT55SHJm6P1Y");
