// test/spec/ContatoControllerSpec.js

describe("ContatoController", function () {
    var $scope, $httpBackend;

    beforeEach(function () {
        module('mean');
        inject(function ($injector, _$httpBackend_) {
            $scope = $injector.get('$rootScope').$new();
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', '/contatos/1').respond({
                _id: '1'
            });
            $httpBackend.when('GET', '/contatos').respond([{}]);
        });
    });

    it("Deve criar um Contato vazio quando nenhum parâmetro de rota for passado", inject(function ($controller) {
        $controller('ContatoController', {
            "$scope": $scope
        });
        expect($scope.contato._id).toBeUndefined();
    }));

    it("Deve preencher o Contato quando parâmetro de rota for passado", inject(function ($controller) {
        $controller('ContatoController', {
            '$routeParams': {
                contatoId: 1
            },
            '$scope': $scope
        });
        $httpBackend.flush();
        expect($scope.contato._id).toBeDefined();
    }));
});

describe('meuBotaoAviso', function () {
    var $scope;
    var element;

    beforeEach(function () {
        module('meusComponentes');
        inject(function ($rootScope, $compile) {
            $scope = $rootScope.$new();
            element = angular.element('<meu-botao-aviso nome="Remover" acao="remove()">');
            $compile(element)($scope);
            $scope.$digest();
        });
    });

    it('Deve criar um botão de aviso com texto e função', function () {
        expect(element.text()).toContain('Remover');
        expect(element.attr('acao')).toBe('remove()');
    });
});

describe('meuFocus', function () {
    var $scope;
    var element;
    var evento = 'contatiSalvo';

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

describe('meuPainel', function () {
    var $scope;
    var element;

    beforeEach(function () {
        module('meusComponentes');
        module('templates');
        inject(function ($compile, $rootScope) {
            $scope = $rootScope.$new();
            element = angular.element('<meu-painel titulo="Principal"><p>Oi</p></meu-painel>');
            $compile(element)($scope);
            $scope.$digest();
        });
    });
});