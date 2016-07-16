// config/config.js

module.exports = function () {
    try {
        return require('./env/' + process.env.NODE_ENV + '.js');
    } catch (err) {
        console.log(err);
    }
}