//app/controllers/contato.js

var verificaAutenticacao = require('././config/auth');
var sanitize = require('mongo-sanitize');

var contatos = [
    {
        _id: 1,
        nome: 'Contato Exemplo 1',
        email: 'cont1@empresa.com.br'
    },
    {
        _id: 2,
        nome: 'Contato Exemplo 2',
        email: 'cont2@empresa.com.br'
    },
    {
        _id: 3,
        nome: 'Contato Exemplo 3',
        email: 'cont3@empresa.com.br'
    }
];

var ID_CONTATO_INC = 3;

module.exports = function (app) {
    var controller = app.controllers.contato;
    var Contato = app.model.contato;

    app.route('/contatos')
        .get(verificaAutenticacao, controller.listaTodos)
        .post(verificaAutenticacao, controller.salvaContato);

    app.route('/contatos:/id')
        .get(verificaAutenticacao, controller.obtemContato)
        .delete(verificaAutenticacao, controller.removeContato);

    controller.listaTodos = function (req, res) {
        Contato.find().populate('emergencia').exec().then(function (contatos) {
            res.json(contatos);
        }, function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        });
    };

    controller.obtemContato = function (req, res) {
        var _id = req.params.id;

        Contato.findById(_id).exec().then(function (contato) {
            if (!contato) throw new Error("Contato não encontrado");
            res.json(contato);
        }, function (erro) {
            console.log(erro);
            res.status(404).json(erro);
        });
    };

    controller.removeContato = function (req, res) {
        var _id = sanitize(req.params.id);

        Contato.remove({
            "_id": _id
        }).exec().then(function () {
            res.end();
        }, function (erro) {
            return console.error(erro);
        });
    };

    controller.salvaContato = function (req, res) {
        var _id = req.params.id;
        var dados = {
            "nome": req.body.nome,
            "email": req.body.email,
            "emergencia" = req.body.emergencia || null;
        };

        if (_id) {
            Contato.findByIdAndUpdate(_id, dados).exec().then(function (contato) {
                res.json(contato);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            });
        } else {
            Contato.create(dados).then(function (contato) {
                res.status(201).json(contato);
            }, function (erro) {
                console.log(erro);
                res.status(500).json(erro);
            });
        };
    };

    var contato = new Contato(req.body);

    contato.save(function (erro, contato) {
        if (erro) {
            res.status(500).end();
            console.log(erro);
        } else {
            res.json(contato);
        }
    });

    function verificaAutenticacao(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.status('401').json('Não autorizado');
        }
    }

    return controller;
}