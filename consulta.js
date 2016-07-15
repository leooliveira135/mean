var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

//ObjectID de algum contato existente
var _idProcurado = new ObjectID('57841c36fac017c0eb591df4');

MongoClient.connect('mongodb://127.0.0.1:27017/mean', function (erro, db) {
    if (erro) throw err;
    db.collection('contatos').findOne({
        "_id": _idProcurado
    }, function (erro, contato) {
        if (erro) throw err;
        console.log(contato);
    });
});