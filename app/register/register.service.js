angular.module("register").factory("registerService", ["$http", function ($http) {
    return {
        register: function (user) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer", user);
        }
    }
}]);