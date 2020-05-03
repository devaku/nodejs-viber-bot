// Viber related
const ViberBot = require('viber-bot').Bot;

// Creating the bot with access token, name and avatar
const bot = new ViberBot({
    authToken: process.env.VIBER_TOKEN,
    name: process.env.VIBER_APP_TITLE,
    avatar: process.env.AVATAR,
});

module.exports = bot;
