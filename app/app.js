'use strict';

const app = angular.module("MovieHistory", ['ngRoute', 'firebase']);

app.config(['$routeProvider',
	($routeProvider) => {
	    $routeProvider.
	    	when('/welcome', {
	    		templateUrl: 'partials/landing-page.html',
	        	controller: 'LoginCtrl'
	    	}).
	    	when('/login', {
	        	templateUrl: 'partials/login.html',
	        	controller: 'LoginCtrl'
	      	}).
	      	when('/find-new-movies', {
	        	templateUrl: 'partials/find-new-movies.html',
	        	controller: 'FinderCtrl'
	      	}).
	      	when('/your-movies', {
	      		templateUrl: 'partials/search-your-movies.html',
	        	controller: 'UserMoviesCtrl'
	      	}).
        	otherwise({
        		redirectTo: '/welcome'
      		});
	}
])