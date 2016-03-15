'use strict';

const app = angular.module("MovieHistory", ['ngRoute', 'firebase']);

app.config(['$routeProvider',
	($routeProvider) => {
	    $routeProvider.
	    	when('/login', {
	        	templateUrl: 'partials/login.html',
	        	controller: 'LoginCtrl'
	      	}).
        	otherwise({
        		redirectTo: '/login'
      		});
	}
])