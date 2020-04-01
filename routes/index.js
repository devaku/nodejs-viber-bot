module.exports = function(app) {
    const controllerPath = '../api/controllers';
    app.use('/', require(`${controllerPath}/homeController.js`).router);
};
