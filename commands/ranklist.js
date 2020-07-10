const roblox = require("noblox.js");
const Discord = require("discord.js");
require('dotenv').config();

exports.run = async (client, message, args) => {
    const getRoles = await roblox.getRoles(Number(process.env.groupId))
    const formattedRoles = getRoles.map((r) => `\`${r.name}\` - ${r.rank} **(${r.memberCount})**`);

    const rankListEmbed = new Discord.MessageEmbed() 
      .setTitle('Rank Information:')
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor(15158332)
      .setDescription(formattedRoles)
    message.channel.send(rankListEmbed)
}