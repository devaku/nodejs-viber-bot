const express = require('express');
const router = express.Router();

router.get('/', async function(req, res) {
    res.render('home', {
        title: 'THIS IS A TITLE',
        message: 'THIS IS A MESSAGE'
    });
});

module.exports = {
    router: router
};
