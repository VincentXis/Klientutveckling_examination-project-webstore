angular.module("checkout").controller("checkoutController", ["$scope", "$location", "$routeParams", "loginService", "checkoutService", function ($scope, $location, $routeParams, loginService, checkoutService) {
    $scope.productCart = checkoutService.getProductCart();
    $scope.orderTotal = 0;
    $scope.showSuccessMessage = false;

    $scope.login = function () {
        $location.path("/login");
    };

    $scope.$watch(function () {
        return loginService.isLoggedIn();
    }, function (value) {
        $scope.loggedIn = !!value;
    });

    angular.forEach($scope.productCart, function (product) {
        $scope.orderTotal += product.quantity * product.price;
    });

    $scope.resetProductCart = function () {
        checkoutService.resetProductCart();
    };

    $scope.$watch(function () {
        return checkoutService.getProductCart();
    }, function (newValue, oldValue) {
        if (newValue !== oldValue) {
            $scope.productCart = checkoutService.getProductCart();
        }
    });

    $scope.cartIsEmpty = function () {
        if ($scope.productCart.length == 0) {
            return true;
        } else {
            return false;
        }
    };

    $scope.placeOrder = function () {
        if (loginService.isLoggedIn()) {

        $scope.showSuccessMessage = false;
            var order = {
                customerId: loginService.getUser().customerId,
                products: []
            };
            angular.forEach($scope.productCart, function (item) {
                var product = {
                    productId: item.id,
                    quantity: item.quantity
                };
                order.products.push(product);
            });
            checkoutService.placeOrder(order).then(function () {
                $scope.resetProductCart();
                $scope.showSuccessMessage = true;
            }, function (errorResponse) {

            });
        }
    }
}]);