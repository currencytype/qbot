
require('dotenv').config();
exports.run = async (client, message, args) => {
    return message.channel.send({embed: {
        color: 15158332,
        description: `**Here are my commands:**\n`
        + `\n`
        + `**Misc**`
        + `\n`
        + `\`${process.env.prefix}rankhelp\` - Shows this list of commands.\n`
        + `\`${process.env.prefix}getinfo\` - Gets the group rank and userid of a user.\n`
        + `\`${process.env.prefix}ranklist\` - Shows a list of ranks from the group.\n`
        + `\n`
        + `**Group Ranking**\n`
        + `\n`
        + `\`${process.env.prefix}setrank <user> <rank name/number>\` - Ranks the user in the Roblox group to the specified rank number or name.\n`
        + `\`${process.env.prefix}promote <user>\` - Moves the user 1 rank up in the Roblox group.\n`
        + `\`${process.env.prefix}demote <user>\` - Moves the user 1 rank down in the Roblox group.\n`
        + `\`${process.env.prefix}fire <user>\` - Moves a user to the lowest rank possible besides Guest.\n`
        + `\n`
        + `**Group Shout**\n`
        + `\n`
        + `\`${process.env.prefix}shout <message>\` - Posts a group shout.\n`
        + `\`${process.env.prefix}clearshout\` - Clears the group shout.\n`
        + `\`${process.env.prefix}currentshout\` - Shows the current group shout.\n`
        + `\n`
        + `**Group Joins**\n`
        + `\n`
        + `\`${process.env.prefix}accept-join <user>\` - Accepts a user's join request.\n`
        + `\`${process.env.prefix}deny-join <user>\` - Denies a user's join request.\n`
        + `\n`
        + `**Moderation**\n`
        + `\n`
  + `\`${process.env.prefix}ban <user> <reason>\`  -  Bans a user for the reason.\n`
        + `\`${process.env.prefix}kick <user> <reason>\`  - Kicks a user for the reason.\n`
        + `\`${process.env.prefix}mute <user> <reason>\`  -  Mutes a user for the reason.\n`
        + `\`${process.env.prefix}unmute <user> <reason>\` - Unmutes a user for the reason.\n`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
}