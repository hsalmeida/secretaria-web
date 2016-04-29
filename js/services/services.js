angular.module('secretariaweb')
    .factory('Usuario',function($mongolabResourceHttp){
        return $mongolabResourceHttp('users');
    });