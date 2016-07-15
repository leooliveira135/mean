var http = require('http');
var app = require('./config/express')();
require('./config/express')(app);
require('./config/passport');
require('./config/database')('mongodb://localhost/mean');

/*
    Subindo o servidor Node utilizando a 
    instância do Express
*/

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express Server escutando na porta ' + app.get('port'));
});