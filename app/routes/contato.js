//app/routes/contato.js
module.exports = function (app) {
    var controller = app.controllers.contato;
    app.route('/contatos')
        .get(controller.listaTodos)
        .post(controller.salvaContato);

    app.route('/contatos/:id')
        .get(controller.obtemContato)
        .delete(controller.removeContato);
}