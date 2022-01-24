require('dotenv').config()

const Discord = require('discord.js')
const Canvas = require("canvas")
const request = require(`request`);
const schedule = require('node-schedule');
const noblox = require('noblox.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
const notifier = require('node-notifier');
const fs = require('fs');
const prefix = "^"

client.on("ready", () => {
console.log("Bot is ready")
})

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if(msg.content.includes("^help")) {
		const embed = {
			"color": 3066993,
			"title": 'Help',
			"url": 'https://discord.gg/AqRg7ZPYFW',
			"author": {
				"name": 'GGU',
				"icon_url": 'https://cdn.discordapp.com/attachments/931008082555838522/934996652622766160/standard_3.gif',
				"url": 'https://discord.gg/AqRg7ZPYFW',
			},
			"thumbnail": {
				"url": 'https://cdn.discordapp.com/attachments/931008082555838522/934996652622766160/standard_3.gif',
			},
			"fields": [
				{
					"name": 'Commands',
					"value": 'List of commands for use with GGU',
				},
				{
					"name": '\u200b',
					"value": '\u200b',
					"inline": false,
				},
				{
					"name": '^upload',
					"value": 'Uploads attached decal',
					"inline": true,
				},
				{
					"name": '^help',
					"value": 'Sends help menu (This embed)',
					"inline": true,
				},
			],
			"timestamp": new Date(),
			"footer": {
				"text": 'GGU is better then BFM',
				"icon_url": 'https://cdn.discordapp.com/attachments/931008082555838522/934996652622766160/standard_3.gif',
			},
		};

		msg.channel.send({ embed });
    	}

	if(msg.content.includes("^convert")) {
      if(!msg.attachments.first()){ msg.channel.send("attach a file") }
        if(msg.attachments.first())
        msg.attachments.forEach(attachment => {
		const url = attachment.url;
		var stream = request(msg.attachments.first().url).pipe(fs.createWriteStream('./decal.png'))
                })
            }
    if(msg.content.includes("^upload")) {
      if(!msg.attachments.first()){ msg.channel.send("attach a file") }
        if(msg.attachments.first())
        msg.attachments.forEach(attachment => {
		const url = attachment.url;
		var stream = request(msg.attachments.first().url).pipe(fs.createWriteStream('./decal.png'))
		var Cum = "Made with GGU";
		var SEX = "5";

		async function startApp () {




		  const currentUser = await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_CFC8D4CF65C5D5A307AEF550CAF5AFC9775162DE531629A076C8BC1A56ED87822A4A700FEA29C6DA1BCEDEA3057A0FA060409A95454A141FD6493EC9156059BFA4604226F3EB91B542D7F28AE8370AA12ADDD6C0BA6F3CA3E417A3FF6CD4E7846971C3D23ADB2A2FDFDD930C18EA1119C20E4ADDA1A492D72252B256E90BBD4C7DEDCE280BBE1654468AA534865E175F0742C0351BFC5CA9606B75A019F1B29BFEADAFF3BAD1184A75BFEB5181972CE500758AD4714DB81F2B373AA9939A0F0C1A4E9153C75E0C63F1EE11CF8605AD8CBC069B435FF6A8CA87023F20E6F5AF0D63FF5CE85AFA04DF85A9F6A54F334475FBE207CAC1A778D3551975CC6727FD69AB29EBC76FC0E709C9EBB8D0BBFC8388C7B4368918DA990BA1D32C69A4AD17C6EF0790B28501F808C5EC0F2B5E6C4183BA82F21E82456FD82AAB113A5B5AD88304E9721377ADB069ADA95527D7015DDC3D3A082A')
		    await new Promise(resolve => setTimeout(resolve, SEX));
		      notifier.notify({
		        title: "it uploaded",
		        icon: ("./icon.png"),
		        message: `Decal was uploaded on acc named  ${currentUser.UserName} `
		      });
		    console.log()
		    noblox.uploadItem(`${Cum}`, 13, fs.createReadStream("./decal.png")) ///// name your finished decal, decal.png
		    let inventory = await noblox.getInventoryById({userId: currentUser.UserID, assetTypeId: 13, sortOrder: "Asc", limit: 1})
		    console.log(`decal uploaded on: https://www.roblox.com/users/${currentUser.UserID}/profile`)
		    console.log(`The asset id is: ${inventory[0].userAssetId}`)
		    console.log("this is meant for one time use on an acc")

		}
		startApp()
			})
		}
	})

client.login(process.env.BOT_TOKEN)