'use strict';
angular.module('myApp', ['myApp.controllers', 'myApp.directives']);

// config dependency injection
angular.module('d3', []);
angular.module('myApp.controllers', []);
angular.module('myApp.directives', ['d3']);


  angular.module('myApp', ['myApp.controllers', 'myApp.directives']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html'
		})
		.otherwise({
			redirectTo: '/'
		});

  $locationProvider.html5Mode(true);

}]);
