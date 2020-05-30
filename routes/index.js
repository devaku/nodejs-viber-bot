module.exports = function (app, bot) {
    app.use('/', bot.middleware(), (req, res) => {
        console.log(req);
        console.log(res);
    });
};
