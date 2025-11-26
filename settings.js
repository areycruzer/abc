const fs = require('fs');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

    SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚊𝚛𝚟𝚊𝚔-𝙼𝙳=b094fafed6b8f2c4' : process.env.SESSION_ID,
    PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
    SESSION_NAME: process.env.PORT === undefined ? "aarvak" : process.env.SESSION_NAME,
    OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? "91XXXXXXXXXX" : process.env.OWNER_NUMBER,
    OWNER_NAME: process.env.OWNER_NAME === undefined ? "Cruzer" : process.env.OWNER_NAME,
    BOT_NAME: process.env.BOT_NAME === undefined ? "Aarvak-MD" : process.env.BOT_NAME,
    ALIVE_IMG: process.env.ALIVE_IMG === undefined ? "https://telegra.ph/file/38a4ba6f7a51c15f5feaf.jpg" : process.env.ALIVE_IMG,
    ALIVE_MSG: process.env.ALIVE_MSG === undefined ? "Hello, I am Aarvak-MD." : process.env.ALIVE_MSG,
    MENU_URL: process.env.MENU_URL === undefined ? "https://telegra.ph/file/38a4ba6f7a51c15f5feaf.jpg" : process.env.MENU_URL,
    GITHUB_URL: process.env.GITHUB_URL === undefined ? "https://github.com/areycruzer/abc" : process.env.GITHUB_URL,
    FOOTER_TEXT: process.env.FOOTER_TEXT === undefined ? "© 2025 Aarvak-MD" : process.env.FOOTER_TEXT,
};
