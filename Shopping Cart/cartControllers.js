var cart = angular.module("ShoppingCart", []);

cart.controller('CartController1', function($scope)
{
	$scope.items = [
	{title: 'Paint pots', quantity: 8, price: 3.95},
	{title: 'Polka dots', quantity: 10, price: 4},
	{title: 'Pebbles', quantity: 18, price: 5}
    ];

    $scope.remove = function(index){
    	$scope.items.splice(index,1);
    }
});