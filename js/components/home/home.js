angular.module('secretariaweb').controller('HomeController', ['$scope', '$rootScope', '$state', '$cookies',
    'Usuario',
    function($scope, $rootScope, $state, $cookies, Usuario, Grupo){
        $rootScope.bodybg = {
            background: '#FFFFFF'
        };
    }]);