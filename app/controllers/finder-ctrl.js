'use strict';

app.controller("FinderCtrl", [
	'$scope',
	'get-movies',
	'post-requests',
	'authenticate',

	function ($scope, getMovies, postRequests, authenticate) {

		$scope.movieWasSearched = false;

		$scope.movieToAdd = {
			poster: "",
			title: "",
			year: "",
			actors: [],
			user: "-KCwF1J8j17zjGJxCGq_",
			rating: 0,
			watched: false,
		}

		$scope.movieToSearch = "";

		$scope.search = () => {
			let searchTerm = $scope.movieToSearch;
			getMovies(searchTerm)
			.then(
				(movieData) => {
					$scope.movieWasSearched = true;
					$('#card').append(`<img src=${movieData.Poster} />`);
					$scope.movieToAdd.poster = movieData.Poster;
					$scope.movieToAdd.title = movieData.Title;
					$scope.movieToAdd.year = movieData.Year;
					$scope.movieToAdd.actors = movieData.Actors.split(',');
				}
			)
		}

		$scope.addMovie = () => {
			postRequests.postMovie($scope.movieToAdd)
			.then(
				(movieData) => console.log('movie saved!'),
				(error) => console.log(error)
			)
		}

	}]
);