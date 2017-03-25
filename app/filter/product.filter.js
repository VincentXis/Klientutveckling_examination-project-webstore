angular.module("appFilter").filter("limitProducts", function () {
    return function (products, limitByCategory, limitBySearch) {
        var filterProducts = [];

        if (limitBySearch) {

            angular.forEach(products, function (product) {

                if (product.description.toLowerCase().indexOf(limitBySearch) >= 0 ||
                    product.name.toLowerCase().indexOf(limitBySearch) >= 0 ) {
                    filterProducts.push(product);
                }
            });

        } else if (limitByCategory) {

            angular.forEach(products, function (product) {
                if (product.categoryId == limitByCategory) {
                    filterProducts.push(product);
                }
            });

        } else {
            filterProducts = products;
        }
        return filterProducts;
    }
});