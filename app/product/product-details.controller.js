angular.module("product").controller("productDetailsController", ["$scope", "$routeParams", "$location", "productService", "checkoutService", function ($scope, $routeParams, $location, productService, checkoutService) {
    $scope.counter = 0;

    productService.getProductById($routeParams.id).then(function (response) {
        $scope.product = response.data;
        $scope.countCheck = function () {
            if ($scope.product.unitsInStock == 0) {
                return true;
            } else {
                return false;
            }
        };
    });

    $scope.addProductToCart = function (product) {
        if ($scope.product.unitsInStock > 0) {
            if ($scope.counter < $scope.product.unitsInStock) {
                checkoutService.addToCart(product);
                $scope.counter++;
                $scope.message = "Produkten tillagd i kundvagn"
            } else {
                $scope.message = "Det går inte att lägga till fler i kundvagnen";
            }
        }
    };
}]);