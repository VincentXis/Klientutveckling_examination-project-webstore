angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            template: "<home></home>"
        })
        .when("/login", {
            template: "<login></login>"
        })
        .when("/register", {
            template: "<register></register>"
        })
        .otherwise({template: "<home></home>"});
    $locationProvider.html5Mode(true);
}]);
