const express = require('express');
const router = express.Router();

router.get('/', async function(req, res) {
    res.send({
        status: 'HOME PAGE'
    });
});

module.exports = {
    router: router
};
