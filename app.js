//Load Development Variables
if (
    process.env.NODE_ENV === undefined ||
    process.env.NODE_ENV === 'DEVELOPMENT'
) {
    require('dotenv').config();
}

// Initialize the Viber Bot
let SERVER_URL = process.env.SERVER_URL;
let bot = require('./lib_modules/viber/botsetup.js');

// Initialize Express
const expresssetup = require('./lib_modules/utils/expressetup.js');
const app = expresssetup.app;
const PORT = expresssetup.PORT;

// Set routes
require('./routes/index.js')(app, bot);

app.listen(PORT, async function () {
    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        const ngrok = require('./lib_modules/utils/ngrokmodule.js');
        SERVER_URL = await ngrok.GetNgrokUrl();
    }
    // Attach the Webhook
    bot.setWebhook(SERVER_URL);
    console.log(`Server is running at URL ${SERVER_URL}`);
});
