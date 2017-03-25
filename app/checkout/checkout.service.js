angular.module("checkout").factory("checkoutService", ["$http", "$location", "$rootScope", "loginService", function ($http, $location, $rootScope, loginService) {
    var productCart = [];
    var itemAlreadyAdded = false;
    return {
        addToCart: function (product) {
            if (productCart.length == 0) {
                product.quantity = 1;
                productCart.push(product);
            } else {
                itemAlreadyAdded = false;
                for (var i = 0; i < productCart.length; i++) {
                    if (product.id == productCart[i].id) {
                        productCart[i].quantity++;
                        itemAlreadyAdded = true;
                        break;
                    }
                }
                if (!itemAlreadyAdded) {
                    product.quantity = 1;
                    productCart.push(product)
                }
            }
        },
        getCount: function (productId) {
            var quantity = 0;
            if (productCart.length == 0) {
                return quantity;
            } else {
                for (var i = 0; i < productCart.length; i++) {
                    if (productCart[i].id == productId){
                        quantity = productCart[i].quantity;
                    }
                }
                return quantity;
            }
        },
        getProductCart: function () {
            return productCart;
        },
        resetProductCart: function () {
            productCart = [];
        },
        placeOrder: function (order) {
            return $http.post("http://nackbutik.azurewebsites.net/api/order", order);
        }
    }
}]);