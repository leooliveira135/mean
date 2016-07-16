var http = require('http');
var app = require('./config/express')();
require('./config/passport');
var config = require('./config/config')();
require('./config/database')(config.db);

/*
    Subindo o servidor Node utilizando a 
    instância do Express
*/

http.createServer(app).listen(config.port, config.address, function () {
    console.log('Express Https Server ' + config.address + ' (' + config.env + ') escutando na porta ' + config.port);
});