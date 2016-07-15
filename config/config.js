// config/config.js

module.exports = {
    processo = require('./env/' + process.env.NODE_ENV + '.js');
    return processo;
}