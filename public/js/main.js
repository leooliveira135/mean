var app = angular.module('mean', ['ngRoute', 'ngResource']).config(function ($routeProvider) {
    $routeProvider.when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
    });
    $routeProvider.when('/contato/:contatoId', {
        templateUrl: '/partials/contato.html',
        controller: 'ContatoController'
    });
    $routeProvider.when('/contato', {
        templateUrl: '/partials/contato.html',
        controller: 'ContatoController'
    });
});