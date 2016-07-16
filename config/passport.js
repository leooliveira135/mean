// config/passport.js
var passport = require('passport');
var githubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');
var config = require('./config')();

module.exports = function () {
    var Usuario = mongoose.model('Usuario');
    var githubCallback = 'http://' + config.domain + ':' + config.port + '/auth/github/callback';

    passport.use(new githubStrategy({
        clientID: config.clientID,
        clientSecret: config.clientSecret,
        callbackURL: githubCallback
    }, function (accessToken, refreshToken, profile, done) {
        Usuario.findOrCreate({
            "login": profile.username
        }, {
            "nome": profile.username
        }, function (erro, usuario) {
            if (erro) {
                console.log(erro);
                return done(erro);
            }

            return done(null, usuario);
        });

        /*
            Chamado apenas UMA VEZ e recebe o usuário do nosso banco disponibilizado pelo callback da estratégia de autenticação. Realizando apenas a serialização do ObjectID do usuário na sessão
        */
        passport.serializeUser(function (usuario, done) {
            done(null, usuario._id);
        });

        /*
            Recebe o ObjectID do usuário armazenado na sessão
        */
        passport.desserializeUser(function (id, done) {
            Usuario.findById(id).exec().then(function (usuario) {
                done(null, usuario);
            });
        });
    }));
};