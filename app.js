const express = require('express');
const morgan = require('morgan');

const app = express();

//Load Development Variables
if (process.env.NODE_ENV === undefined) {
    require('dotenv').config();
}

const PORT = process.env.PORT;

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

app.set('port', PORT);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
