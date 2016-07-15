angular.module('mean').factory('Contato', function ($resource) {
    return $resource('/contatos/:id');
});