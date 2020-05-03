// Viber related
const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;

// Creating the bot with access token, name and avatar
const bot = new ViberBot({
    authToken: process.env.VIBER_TOKEN,
    name: process.env.VIBER_APP_TITLE,
    avatar: process.env.AVATAR,
});

// The user will get those messages on first registration
bot.onSubscribe((response) => {
    say(
        response,
        `Hi there ${response.userProfile.name}. I am ${bot.name}! This application was created by Alejo Kim Uy.`
    );
});

bot.on(BotEvents.MESSAGE_RECEIVED, async function (message, response) {
    // This bot will respond only to text messages
    if (!(message instanceof TextMessage)) {
        say(response, `Sorry, I only respond to text messages`);
    } else {
        console.log(message);
        let { text } = message;
        if (text.toLowerCase().trim() === 'about') {
            SayAbout(response);
        } else {
            say(response, `You said: ${message.text}`);
        }
    }
});

function say(response, message) {
    response.send(new TextMessage(message));
}

function SayAbout(response) {
    let messageArray = [
        `Hi there ${response.userProfile.name}. I am ${bot.name}! This Node.js application was created by Alejo Kim Uy.`,
        `If you're interested in working with me, you can find my details on my LinkedIn: https://www.linkedin.com/in/alejo-kim-uy-612319108/`,
        `If you want to see my other coding projects, you can find them on my Github: https://www.linkedin.com/in/alejo-kim-uy-612319108/`,
    ];
    let counter = 0;
    let message = '';
    let interval = setInterval(() => {
        if (counter === messageArray.length) {
            clearInterval(interval);
        } else {
            message = messageArray[counter];
            say(response, message);
            counter++;
        }
    }, 1000);
}

module.exports = bot;
