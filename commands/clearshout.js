const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();

exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.some(role =>["Shout Permissions"].includes(role.name))){
        return message.channel.send({embed: {
            color: 10038562,
            description: "You need the `Shout Permissions` role to run this command.",
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
    let clearShoutResponse;
    try {
        clearShoutResponse = await roblox.shout(Number(process.env.groupId), '');
    } catch (err) {
        console.log(chalk.red('An error occured when running the clearshout command: ' + err));
        return message.channel.send({embed: {
            color: 10038562,
            description: `Oops! An unexpected error has occured. It has been logged to the bot console.`,
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
    message.channel.send({embed: {
        color: 15158332,
        description: `**Success!** Cleared group shout.`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
    if(process.env.logchannelid === 'false') return;
    let logchannel = message.guild.channels.cache.get(process.env.logchannelid);
    logchannel.send({embed: {
        color: 15158332,
        description: `<@${message.author.id}> has cleared the group shout.`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        },
        footer: {
            text: 'Action Logs'
        },
        timestamp: new Date()
    }});
}
