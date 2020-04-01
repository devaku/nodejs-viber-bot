const express = require('express');
const morgan = require('morgan');

const app = express();

//Development
app.use(morgan('short'));

//Public folder
app.use(express.static('public'));

//Parse incoming JSON
app.use(
    express.urlencoded({
        extended: true
    })
);

app.set('port', 8080);
app.listen(8080, () => {
    console.log('Webhook is listening');
});
