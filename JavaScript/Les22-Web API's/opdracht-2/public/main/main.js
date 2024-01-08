const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTU1YTUwNWM4NWQ2YzA1NWU4NzYzYjk4ZjIwZjIwOCIsInN1YiI6IjY1OTAyNzE2NTcxNzZmNmJjYjdmODNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oA5Iqk2EbpVuCLAd5JF1G9qPBHNgoilXVu-HdoJQOcw",
	},
};
let movies;

fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", options)
	.then((response) => response.json())
	.then((response) => {
		console.log(response);
		movies = response;
		topMovies();
	})
	.catch((err) => console.error(err));

function topMovies() {
	let divMovies = document.createElement("div");
	divMovies.classList.add("movies");

	for (let key in movies.results) {
		console.log(movies.results[key]);

		let divMovie = document.createElement("div");
		divMovie.classList.add("movies-info");

		let name = document.createElement("p");
		let nameText = document.createTextNode(movies.results[key].name);
		name.appendChild(nameText);
		divMovie.appendChild(name);

		let img = document.createElement("img");
		console.log(key);
		img.src = "https://image.tmdb.org/t/p/w500/" + movies.results[key].poster_path;
		img.alt = movies.results[key].name;
		img.classList.add("movies-img");
		divMovie.appendChild(img);

		divMovies.appendChild(divMovie);
	}
	document.body.appendChild(divMovies);
}

// let movieDetails;
// fetch("https://api.themoviedb.org/3/movie/502356?language=nl-NL", options)
// 	.then((response) => response.json())
// 	.then((response) => {
// 		movieDetails = response;
// 		console.log(response);
// 		movie();
// 	})
// 	.catch((err) => console.error(err));

// let credits;
// fetch("https://api.themoviedb.org/3/movie/502356/credits?language=en-US", options)
// 	.then((response) => response.json())
// 	.then((response) => {
// 		credits = response;
// 		console.log(response);
// 		movieCast();
// 	})
// 	.catch((err) => console.error(err));

function movie() {
	console.log(movieDetails);
	let name = movieDetails.title;
	let tagline = movieDetails.tagline;
	let description = movieDetails.overview;
	let release = movieDetails.release_date;
	let runtime = movieDetails.runtime;
	let genre = movieDetails.genres.map((genre) => genre.name).join(", ");
	let score = movieDetails.vote_average + " based on " + movieDetails.vote_count + " votes";
	let money = movieDetails.revenue.toLocaleString("nl-NL");
	let img = "https://image.tmdb.org/t/p/w500/" + movieDetails.poster_path;

	console.log(tagline);
	let movieInfo = {
		Naam: name,
		Tagline: tagline,
		Beschrijving: description,
		Uitgave: release,
		Duren: runtime + " minuten",
		Genre: genre,
		Scoren: score,
		Geld: money,
		Afbeelding: img,
	};

	let divMovie = document.createElement("div");
	divMovie.classList.add("movie");

	let divMovieInfo = document.createElement("div");
	divMovieInfo.classList.add("movie-info", "flex-item");

	let divMovieImg = document.createElement("div");
	divMovieImg.classList.add("movie-poster", "flex-item");

	for (let key in movieInfo) {
		let p = document.createElement("p");
		if (key !== "Afbeelding") {
			let text = document.createTextNode(`${key}: ${movieInfo[key]}`);
			p.appendChild(text);
			p.classList.add("movie-text");
			divMovieInfo.appendChild(p);
		} else {
			let img = document.createElement("img");
			console.log(key);
			img.src = movieInfo[key];
			img.alt = movieInfo.Naam;
			img.classList.add("movie-img");
			divMovieImg.appendChild(img);
		}
	}
	divMovie.appendChild(divMovieInfo);
	divMovie.appendChild(divMovieImg);
	document.body.appendChild(divMovie);
}

function movieCast() {
	let divCast = document.createElement("div");
	divCast.classList.add("credits");

	let title = document.createElement("p");
	let titleText = document.createTextNode("Acteurs");
	title.classList.add("cast-title");
	title.appendChild(titleText);
	divCast.appendChild(title);

	let divCastPersons = document.createElement("div");
	divCastPersons.classList.add("cast");

	for (let key in credits.cast) {
		console.log(credits.cast[key]);
		if (credits.cast[key].profile_path !== null) {
			let divPerson = document.createElement("div");
			divPerson.classList.add("person-info");
			let img = document.createElement("img");
			console.log(key);
			img.src = "https://image.tmdb.org/t/p/w500/" + credits.cast[key].profile_path;
			img.alt = credits.cast[key].name;
			img.classList.add("person-img");
			divPerson.appendChild(img);

			let name = document.createElement("p");
			let nameText = document.createTextNode(credits.cast[key].name);
			name.appendChild(nameText);

			let actname = document.createElement("p");
			let actnameText = document.createTextNode(credits.cast[key].character);
			actname.appendChild(actnameText);

			divPerson.appendChild(name);
			divPerson.appendChild(actname);
			divCastPersons.appendChild(divPerson);
		}
	}
	divCast.appendChild(divCastPersons);
	document.body.appendChild(divCast);
}
