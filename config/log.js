module.exports = {
    LogConsole: (text) => {
        if (process.env.NODE_ENV === 'DEVELOPMENT') {
            console.log(text);
        }
    }
};
