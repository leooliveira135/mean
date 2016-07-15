// test/js/e2e/contatosPageSpec.js
var ContatosPage = new require('./pages/contatosPage');

describe('Página principal', function () {
    var pagina = new ContatosPage();

    beforeEach(function () {
        pagina.visitar();
    });

    it('Deve estar logado', function () {
        element(by.id('usuario-logado')).getText().then(function (texto) {
            expect(texto.trim().length).toBeGreaterThan(0);
        });
    });

    it('Deve remover um contato da lista', function () {
        var totalAnt = element.all(by.repeater('contato in contatos')).count();
        element(by.repeater('contato in contatos').row(0)).element(by.css('.btn')).click();

        var totalDep = element.all(by.repeater('contato in contatos')).count();
        expect(totalDep).toBeLessThan(totalAnt);
    });
});