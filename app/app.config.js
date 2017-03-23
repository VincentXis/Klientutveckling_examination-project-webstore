angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            template: "<home></home>"
        })
        .when("/login", {
            template: "<login></login>"
        })
        .when("/signup", {
            template: "<signup></signup>"
        })
        .otherwise({template: "<home></home>"});
    $locationProvider.html5Mode(true);
}]);
