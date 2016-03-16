'use strict';

app.controller("FinderCtrl", [
	'$scope',
	'get-movies',

	function ($scope, getMovies) {
		$scope.movieToSearch = "";
		$scope.search = () => {
			let searchTerm = $scope.movieToSearch;
			getMovies(searchTerm)
			.then(
				(movieData) => {
					$('#card').append(`<img src=${movieData.Poster} />`);
					$('#card').append(`<a href="#">Add To Watchlist</a>`);
				}
			)
		}
	}]
);