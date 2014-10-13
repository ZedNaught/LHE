var pageApp = angular.module('pageApp', ['ngRoute']);


	pageApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home1.html',
				controller  : 'mainController'
			})

			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			.when('/hire', {
				templateUrl : 'pages/hire.html',
				controller  : 'hireController'
			});
	});


	pageApp.controller('mainController', function($scope) {
		$scope.pageClass = 'page-home';
	});

	pageApp.controller('aboutController', function($scope){
		$scope.pageClass = 'page-about';
	});

	pageApp.controller('hireController', function($scope){
		$scope.pageClass = 'page-hire';
	});
