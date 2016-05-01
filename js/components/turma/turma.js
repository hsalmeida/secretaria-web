angular.module('secretariaweb').controller('TurmaController', ['$scope', '$rootScope', '$state', '$cookies',
    'Usuario',
    function($scope, $rootScope, $state, $cookies, Usuario, Grupo){
        $rootScope.bodybg = {
            background: '#FFFFFF'
        };

        $scope.setselectedrow = function (index) {
            if ($scope.selectedrow === index) {
                $scope.selectedrow = -1;
            } else {
                $scope.selectedrow = index;
            }
        };

        $scope.escolas = [
            {
                nome: "Escola Municipal Mato Grosso",
                turmas: [
                    {nome: "Proemi 101"},
                    {nome: "Proemi 201"}
                ]
            },
            {
                nome: "Ciep Maria Werneck de Castro",
                turmas: [
                    {nome: "3005"},
                    {nome: "3101"},
                    {nome: "2101"},
                    {nome: "3201"},
                    {nome: "1301"},
                    {nome: "1201"},
                    {nome: "3001"},
                    {nome: "1101"}
                ]
            }
        ]
    }]);