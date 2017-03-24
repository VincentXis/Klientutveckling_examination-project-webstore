angular.module("product").controller("productDetailsController", ["$scope", "$routeParams", "$location", "$q", "productService", function ($scope, $routeParams, $location, $q, productService) {
    $scope.product = {}
    $scope.amount = 1;
    productService.getProductById($routeParams.id).then(function (response) {
        $scope.product = response.data;
    });
    $scope.countCheck = function () {
        if ($scope.product.unitsInStock == 0) {
            return true;
        } else {
            return false;
        }
    }

}]);