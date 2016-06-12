var app = angular.module('firstApp', []);

app.controller('HelloController',
	function($scope){
		$scope.greeting = {text: 'Hello'};
	});

app.controller('NewController',
	function($scope){
		$scope.greet = {text: 'NewHello'};
	});
