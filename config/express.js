var express = require('express');
var home = require('../app/routes/home');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');
var helmet = require('helmet');

/*
    O módulo deve retornar uma instância
    configurada do Express. Centralizando as
    configs em um único arquivo.
*/

module.exports = function () {
    var app = express();
    app.set('port', 3000); //config do ambiente
    app.use(cookieParser());
    app.use(session({
        secret: 'homem avestruz',
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    //imediatamente após a inicialização da sessão do Passport
    app.disable('x-powered-by');
    app.use(helmet.xframe());
    app.use(helmet.xssFilter());
    app.use(helmet.nosniff());
    app.use(express.static(__dirname + './public')); //middleware
    /*
        Config de templates engines utilizando
        variáveis de ambiente
        ---------------------------------------------------
        Na primeira linha, estamos dizendo que a view engine utilizada é ejs.
        ----------------------------------------------------
        Na segunda linha, definimos o diretório onde ficarão as views.
    */

    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    /*
        Solicita que o bodyParser realize o parse
        do JSON e requisições com o corpo x-ww-form-urlencoded. Podendo acessar os dados atráves
        da requisição por req.body
    */
    app.use(express.static(__dirname + './public'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride('_method'));
    //função load carrega todos os scripts dentro das pastas. A função into adiciona dinamicamente props que apontam a esses módulos.
    load('model', {
        cwd: 'app'
    }).then('controllers').then('routes').into(app);
    load('model', {
        cwd: 'app'
    }).then('controllers').then('routes').into(app);
    load('model', {
        cwd: 'app'
    }).then('controllers').then('routes/auth.js').then('routes').into(app);
    load('model', {
        cwd: 'app'
    }).then('controllers').then('routes/auth.js').then('routes').into(app);
    app.get('*', function (req, res) {
        res.status(404).render('404');
    })

    home(app);

    return app;
};