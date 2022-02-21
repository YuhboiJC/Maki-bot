const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTQ1MzU4MDE1OTYyNDIzMzY3.YhO_Qg.cSjSemEOOGYTsNb9-ws5S6SWUcE"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)