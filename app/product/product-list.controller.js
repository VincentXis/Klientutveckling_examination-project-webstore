angular.module("product").controller("productListController", ["$scope", "$routeParams", "$location", "productService", function ($scope, $routeParams, $location, productService) {
    var products = [];
    $scope.limitByCategory = "";
    $scope.limitBySearch = "";
    $scope.productId = "";

    productService.getProducts().then(function (response) {
        products = response.data;
        $scope.limitByCategory = $routeParams.category;
        $scope.limitBySearch = $routeParams.search;
        $scope.products = products;
    });

    $scope.showProduct = function (id) {
        $location.path("/product/" + id);
    };

    $scope.countCheck = function (amount) {
        if (amount == 0) {
            return false;
        } else {
            return true;
        }
    }
}]);