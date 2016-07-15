/*
    O módulo retorna um objeto. E adicionamos
    uma ou mais ações que podem ser chamadas por
    uma rota acessada pelo usuário.
*/

var controller = {};
controller.index = function (req, res) {
    //retorna a página index.ejs
    res.render('index', {
        nome: 'Express'
    });
};

module.exports = controller;