angular.module("login").factory("loginService", ["$http", "$location", "$rootScope", function ($http, $location, $rootScope) {
    var userData = {};
    var userLoggedIn = false;
    $rootScope.loginLocation = "/";

    return {
        login: function (user) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer/login", user).then(function (response) {
                userData = response.data;
                userLoggedIn = true;
                $location.path("/");
            }, function (response) {
                userData = {};
                userLoggedIn = false;
            });
        },
        logout: function () {
            userData = {};
            userLoggedIn = false;
            $location.path("/");
        },
        isLoggedIn: function () {
            return userLoggedIn;
        },
        getUser: function () {
            return userData;
        }
    }
}]);