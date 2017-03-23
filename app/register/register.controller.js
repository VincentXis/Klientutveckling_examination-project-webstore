angular.module("register").controller("registerController", ["$scope", "$location", "registerService", "loginService", function ($scope, $location, registerService, loginService) {

    if (loginService.isLoggedIn()) {
        $location.path("/");
    }

    $scope.register = function () {
        $scope.hideWaitMessage = false;
        $scope.hideFailMessage = true;

        var user = {
            firstName: $scope.customer.firstName,
            lastName: $scope.customer.lastName,
            email: $scope.customer.email,
            phone: $scope.customer.phone,
            password: $scope.customer.password,
            address: $scope.customer.address,
            postalCode: $scope.customer.postalCode,
            city: $scope.customer.city
        };
        registerService.register(user).then(function () {
            loginService.login({email: $scope.customer.email, password: $scope.customer.password})
        }, function (response) {
        });
    }
}]);