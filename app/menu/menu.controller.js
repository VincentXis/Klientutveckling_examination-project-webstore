angular.module("app").controller('menuController', ["$scope", "$rootScope", "$location", "categoryService", "loginService",
    function ($scope, $rootScope, $location, categoryService, loginService) {

        $scope.categories = [];

        categoryService.getCategories().then(function (response) {
            var categories = response.data;
            angular.forEach(categories, function (category) {
                $scope.categories.push(category)
            })
        });

        $scope.login = function () {
            $location.path("/login");
        };

        $scope.register = function () {
            $rootScope.loginLocation = $location.path();
            $location.path("/register");
        };

        $scope.logout = function () {
            loginService.logout();
        };

        $scope.search = function () {
            $location.path("/product/search/" + $scope.searchQuery);
        };

        $scope.$watch(function () {
            return loginService.isLoggedIn();
        }, function (value) {
            $scope.loggedIn = !!value;
        });

        $scope.checkout = function () {
            $location.path("/checkout");
        }
    }]);