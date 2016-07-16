angular.module('mean').controller('ContatoController', ['$scope', '$routeParams', 'Conta    to', function ($scope, $routeParams, Contato) {

    if ($routeParams.contatoId) {
        Contato.get({
            id: $routeParams.contatoId
        }, function (contato) {
            $scope.contato = contato;
        }, function (erro) {
            $scope.mensagem = {
                texto: 'Não foi possível obter o contato.'
            };
        });
        console.log($routeParams.contatoId);
    } else {
        $scope.contato = {};
    }

    $scope.salva = function () {
        $scope.contato.$save()
            .then(function () {
                $scope.mensagem = {
                    texto: 'Salvo com sucesso'
                };
                $scope.contato = new Contato();
                document.querySelector('#botao-voltar').focus();
                $scope.$broadcast('contatoSalvo');
            })
            .catch(function (erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível salvar'
                };
            });
    };

    $scope.contato = new Contato();

    Contato.query(function (contatos) {
        $scope.contatos = contatos;
    });
}]);