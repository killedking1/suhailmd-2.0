const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_20_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMixcbiAgICAgICAgODYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI1LFxuICAgICAgICA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODksXG4gICAgICAgIDkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAzNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDYyLFxuICAgICAgICAxNTksXG4gICAgICAgIDc1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMTVpjdWxXZ29iT3poWmVOdld3UGYwbUdiMGZsTTE0aTlkNGFjNzdZRU5rPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA5MDY0MjczM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjJFQkQxMzgxQTNCMzBEMzIxRTRCRjM4MkZEMkMxMjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNjg1NTk2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDkwNjQyNzMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMTFBNjI2NjRDMDk5NDU1RjZEQzcxQzdCQzkzMjc0Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM2ODU1OTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwOTA2NDI3MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYzRjFEQTcwQjBDQ0RCMzhGN0U0RDFEQTdBNDM3MEE1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzY4NTU5OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA5MDY0MjczM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0U2RjY5NTZDRTgyMUFDQkZEQzdGQzhFRTRCMDQ3MEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNjg1NjAwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkd3cklTMTZyVEU2enE3TW1MYkt2T2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmNmMTdkZDgtNjNmYS00NDA1LTg2MmEtMjg3YjBkZDkwYmRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDEyNixcbiAgICAgIDE4NyxcbiAgICAgIDExOSxcbiAgICAgIDI1MSxcbiAgICAgIDEzLFxuICAgICAgMjAzLFxuICAgICAgMTAxLFxuICAgICAgMTkzLFxuICAgICAgNTAsXG4gICAgICAxMjMsXG4gICAgICAyMzUsXG4gICAgICAxMTgsXG4gICAgICAxMjgsXG4gICAgICAxODIsXG4gICAgICAxOTMsXG4gICAgICAxMTEsXG4gICAgICA3LFxuICAgICAgMTc2LFxuICAgICAgMTUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMTYxLFxuICAgICAgNDMsXG4gICAgICAyNTMsXG4gICAgICAyNDUsXG4gICAgICAxNjEsXG4gICAgICA2MCxcbiAgICAgIDIyOSxcbiAgICAgIDExOCxcbiAgICAgIDE5NyxcbiAgICAgIDQ2LFxuICAgICAgODcsXG4gICAgICA5NixcbiAgICAgIDIxMSxcbiAgICAgIDM1LFxuICAgICAgMTYwLFxuICAgICAgMjksXG4gICAgICAyMjcsXG4gICAgICAxMDIsXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKN1NMMkJGWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDkwNjQyNzMzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NTY1NDc0MjkwNDg3Njo5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIti62YXar9uM2YZcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPK1NucjhIRU5iaTE3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9mb2RrRmE2NFNEUFB3RTBvL0psV3YvREY5RHhNQmZGYTl0L1lOUjVKQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL3UvM2loTjBDdi8zcTN1cjM4WENZaFIxbTZVTzlxeExtYzdFeWJ3QW9aenR4c1ZtSmlmTSs3b0oxeGtzVTdOZklOM1ZDMTl1NzJWajZ3bGlFWDk2QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL0pHM21IOUl3eDJ4SmVqUmlEa0VwMWphbUJOYTVPZmJPSDN1MTVBREwzVkY0ay9oRnB0SUZvRGVQWDk2VDZ6b25nWmpnYUcrWkZ4TUFlMVVPRlhNRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDkwNjQyNzMzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzY4NTU5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1ic1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWJzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTFYrMlIyUzdRWWNWUThNVmVtRFNGYTFTSjZuTzNKVXEyYm82KytNSDhLQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDExNjYyNzAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM2ODU1OTc2MDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
