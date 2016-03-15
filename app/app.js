'use strict';

const app = angular.module("MovieHistory", ['ngRoute', 'firebase']);

app.config(['$routeProvider',
	($routeProvider) => {
	    $routeProvider.
	    	when('/login', {
	        	templateUrl: 'partials/login.html',
	        	controller: 'LoginCtrl'
	      	}).
	      	when('/find-new-movies', {
	        	templateUrl: 'partials/find-new-movies.html',
	        	controller: 'FinderCtrl'
	      	}).
        	otherwise({
        		redirectTo: '/login'
      		});
	}
])