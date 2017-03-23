angular.module("login").controller("loginController", ["$scope", "$location", "$routeParams", "loginService", function ($scope, $location, $routeParams, loginService) {
    $scope.loginClicked = false;
    $scope.hideFailMessage = $routeParams.msg != "fail";

    if (loginService.isLoggedIn()) {
        $location.path("/");
    }

    $scope.login = function () {

        $scope.loginClicked = true;

        var user = {
            email: $scope.email,
            password: $scope.password
        };

        loginService.login(user).then(function () {
            $scope.loginClicked = false;
        });

    }
}]);