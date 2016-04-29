angular.module('secretariaweb').controller('LoginController', ['$scope', '$rootScope', '$state', '$cookies',
    'Usuario',
    function($scope, $rootScope, $state, $cookies, Usuario, Grupo){
        $rootScope.bodybg = {
            background: '#db4437 url(img/core/cover.png) no-repeat fixed center'
        };

        var angularCookieUsrObj = $cookies.getObject('secretariaWebCookieKeyUsrObj');
        if(angularCookieUsrObj) {
            $rootScope.currentUser = angularCookieUsrObj;
        }

        if($rootScope.currentUser && $rootScope.currentUser.remember) {
            $scope._email = $rootScope.currentUser.email;
            $scope._remem = $rootScope.currentUser.remember;
        }

        function assignCurrentUser (user) {
            $rootScope.currentUser = user;
            return user;
        }

        $scope.submit = function(email, password, rememberMe) {
            var query = {
                "email" : email,
                "password" : password,
                "secretariaweb" : true
            };
            Usuario.query(query).then(function(user){
                $scope.notFound = false;
                if(user[0]){
                    var curUser = user[0];

                    curUser.remember = rememberMe;
                    assignCurrentUser(curUser);
                    if(rememberMe) {
                        $cookies.putObject('secretariaWebCookieKeyUsrObj', curUser);
                    }

                    $state.go('mapa', {"grupo" : grupos[0]._id.$oid});

                } else {
                    $scope.notFound = true;
                }
            });
        };
    }]);