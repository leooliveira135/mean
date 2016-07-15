/*
    O objeto abaixo chama a função da rota do nosso
    objeto com o papel de controller.
*/

module.exports = function (app) {
    try {
        var controller = app.controllers.home;
        app.get('/', controller.index);
    } catch (err) {
        console.log(err);
    }
};