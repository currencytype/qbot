const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();

exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.some(role =>["Ranking Admin", "Join Request Permissions"].includes(role.name))){
        return message.channel.send({embed: {
            color: 10038562,
            description: "You need the `Ranking Admin` or `Join Request Permissions` role to run this command.",
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
  let username = args[0];
  if(!username){
    return message.channel.send({embed: {
      description: 'Please provide a username.',
      color: 10038562,
      author: {
        name: message.author.tag,
        icon_url: message.author.displayAvatarURL()
      }
    }});
  }
  let userid;
  try {
    userid = await roblox.getIdFromUsername(username);
  } catch (err) {
    return message.channel.send({embed: {
      description: 'That user does not exist.',
      color: 10038562,
      author: {
        name: message.author.tag,
        icon_url: message.author.displayAvatarURL()
      }
    }});
  }
  try {
    username = await roblox.getUsernameFromId(userid);
  } catch (err) {
    console.log(chalk.red('An error occured when running the deny-join command: ' + err));
    return message.channel.send({embed: {
      description: 'Oops! An unexpected error has occured. It has been logged to the bot console.',
      color: 10038562,
      author: {
        name: message.author.tag,
        icon_url: message.author.displayAvatarURL()
      }
    }});
  }
  let acceptJoinRequestResponse;
  try {
    acceptJoinRequestResponse = await roblox.handleJoinRequest(Number(process.env.groupId), userid, true);
  } catch (err) {
    return message.channel.send({embed: {
      description: 'That user does not have an active join request.',
      color: 10038562,
      author: {
        name: message.author.tag,
        icon_url: message.author.displayAvatarURL()
      }
    }});
  }
  message.channel.send({embed: {
    color: 15158332,
    description: `**Success!** Accepted ${username}'s join request.`,
    author: {
      name: message.author.tag,
      icon_url: message.author.displayAvatarURL()
    }
  }});
  if(process.env.logchannelid === 'false') return;
  let logchannel = await message.guild.channels.cache.get(process.env.logchannelid);
  logchannel.send({embed: {
    color: 15158332,
    description: `<@${message.author.id}> has accepted ${username}'s join request.`,
    author: {
      name: message.author.tag,
      icon_url: message.author.displayAvatarURL()
    },
    footer: {
      text: 'Action Logs'
    },
    timestamp: new Date(),
    thumbnail: {
      url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&format=png&username=${username}`
    }
  }});
}
