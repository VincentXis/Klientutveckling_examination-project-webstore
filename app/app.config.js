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
        .when("/products", {
            template: "<product-list></product-list>"
        })
        .when("/product/:id", {
            template: "<product-details></product-details>"
        })
        .when("/checkout", {
            template: "<checkout></checkout>"
        })
        .otherwise({template: "<home></home>"});
    $locationProvider.html5Mode(true);
}]);
