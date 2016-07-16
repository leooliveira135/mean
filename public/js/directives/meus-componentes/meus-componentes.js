// public/js/directives/meus-componentes/meus-componentes.js

angular.module('meusComponentes', []).directive('meuPainel', function () {
    var directive = {};

    directive.restrict = 'EA';

    directive.scope = {
        titulo: '@'
    };

    directive.transclude = true;

    directive.templateUrl = 'js/directives/meus-componentes/meu-painel.html';

    return directive;
}).directive('meuBotaoAviso', function () {
    var directive = {};

    directive.restrict = 'E';

    directive.scope = {
        nome: '@',
        acao: '&'
    };

    directive.template = '<button ng-click="acao()" class="btn btn-warning">' + '{{nome}}' + '</button>';

    return directive;
}).directive('meuFocus', function () {
    var $scope;
    var element;
    var evento = 'contatoSalvo';

    beforeEach(function () {
        module('meusComponentes');
        inject(function ($rootScope, $compile) {
            $scope = $rootScope.$new();
            element = angular.element('<button meu-focus evento="' + evento + '">Voltar</button>');
            $compile(element)($scope);
            $scope.$digest();
        });
    });

    it('Deve focar o botão', function () {
        angular.element(document.body).append(element);
        $scope.$broadcast(evento);
        expect(angular.element(document.activeElement).text()).toBe('Voltar');
    });
});