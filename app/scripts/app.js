'use strict';
var myApp = angular.module('myApp', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html'
		})
		.otherwise({
			redirectTo: '/'
		});

  $locationProvider.html5Mode(true);

}]);
