// config/config.js

module.exports = {
    var processo = require('./env/' + process.env.NODE_ENV + '.js');
    return processo;
}