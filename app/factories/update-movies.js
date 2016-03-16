'use strict';

app.factory('update-movies', function ($q, $http) {
	let updateMovie = (urlSnippet) => {
		let movieRef = new Firebase(`https://dreamteam-music-hist.firebaseio.com/movies/${urlSnippet}`);
	 	movieRef.update({watched: true});
	}
	return updateMovie;
})