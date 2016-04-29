angular.module('secretariaweb').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('login', {
            url: "/",
            templateUrl: "views/login/login.html",
            controller: 'LoginController',
            data: {
                requiredlogin: false
            }
        });
});

angular.module('secretariaweb').config(['ngToastProvider', function (ngToast) {
    ngToast.configure({
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
    });
}]);