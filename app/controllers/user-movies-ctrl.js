'use strict';

app.controller("UserMoviesCtrl", [
	"$scope",
	"get-users-movies",
	"delete-movie",

	function ($scope, getUsersMovies, deleteMovie) {

		$scope.loadMovieList = () => {
			getUsersMovies()
			.then(
				(movieData) => {
					let arr = [];
					for (let key in movieData) {
						console.log(movieData);
						movieData[key].movie.key = key;
						arr.push(movieData[key]);
					}
					$scope.movies = arr;
					console.log($scope.movies);
				},
				(error) => console.log(error)
			)
		}

		$scope.delete = ($event) => {
			let key = $event.target.id;
			console.log(key);
			deleteMovie(key);
		}
	}
]);