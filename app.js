let bot = '';
let SERVER_URL = '';
const ngrok = require('./lib_modules/utils/ngrokmodule.js');

//Load Development Variables
if (
    process.env.NODE_ENV === undefined ||
    process.env.NODE_ENV === 'DEVELOPMENT'
) {
    require('dotenv').config();
    bot = require('./lib_modules/utils/viber/setupbot.js');
} else {
    bot = require('./lib_modules/utils/viber/setupbot.js');
    SERVER_URL = process.env.SERVER_URL;
}

const PORT = process.env.PORT;
const express = require('express');
const morgan = require('morgan');

const routes = require('./routes/index.js');
const app = express();

// morgan logger
app.use(morgan('short'));

// Public folder
app.use(express.static('public'));

// Parse incoming JSON
app.use(
    express.urlencoded({
        extended: true,
    })
);

//Set routes
routes(app);

app.use('/', bot.middleware(), (req, res) => {
    console.log(req);
    console.log(res);
});

//Set ejs as view engine
app.set('view engine', 'ejs');
app.set('view options', {
    delimiter: '?',
});

app.set('port', PORT);
app.listen(PORT, async function () {
    SERVER_URL = await ngrok.GetNgrokUrl();
    bot.setWebhook(SERVER_URL);
    console.log(`Server is running at URL ${SERVER_URL}`);
});
