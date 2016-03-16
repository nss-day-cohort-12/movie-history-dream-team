'use strict';

app.factory('get-users-movies', function($q, $http) {
	let firebaseRef = new Firebase('https://dreamteam-music-hist.firebaseio.com/');

	let getUsersMovies = () => {
	 	return $q(function(resolve, reject) {
			$http.get(`https://dreamteam-music-hist.firebaseio.com/movies/.json`)
	    		.success(
	                (movieData) => resolve(movieData),
	                (error) => reject(error)
	            );
	        });
	};

	return getUsersMovies;
});