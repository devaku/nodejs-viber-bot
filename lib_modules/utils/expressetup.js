const PORT = process.env.PORT;
const express = require('express');
const morgan = require('morgan');
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

//Set ejs as view engine
app.set('view engine', 'ejs');
app.set('view options', {
    delimiter: '?',
});

app.set('port', PORT);

exports.app = app;
exports.PORT = PORT;
