angular.module('mean').controller('ContatosController', function (Contato, $scope) {
    $scope.total = 0;
    $scope.incrementa = function () {
        $scope.total++;
    };
    $scope.contatos = [
        {
            "_id": 1,
            "nome": "Contato Angular 1",
            "email": "cont1@empresa.com.br"
        },
        {
            "_id": 2,
            "nome": "Contato Angular 2",
            "email": "cont2@empresa.com.br"
        },
        {
            "_id": 3,
            "nome": "Contato Angular 3",
            "email": "cont3@empresa.com.br"
        }
    ];
    $scope.filtro = '';
    $scope.mensagem = {
        texto: ''
    };

    function buscaContatos() {
        contato.query(function (contatos) {
            $scope.contatos = contatos;
            $scope.mensagem = {};
        }, function (erro) {
            $scope.mensagem = {
                texto: 'Não foi possível obter a lista'
            };
        });
    };

    buscaContatos();

    $scope.remove = function (contato) {
        var promise = contato.delete({
                id: contatos._id
            }, buscaContatos,
            function (erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível remover o contato'
                };
                console.log(erro);
            }
        );
    };
});