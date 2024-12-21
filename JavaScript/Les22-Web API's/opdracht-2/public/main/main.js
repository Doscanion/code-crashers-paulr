const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTU1YTUwNWM4NWQ2YzA1NWU4NzYzYjk4ZjIwZjIwOCIsInN1YiI6IjY1OTAyNzE2NTcxNzZmNmJjYjdmODNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oA5Iqk2EbpVuCLAd5JF1G9qPBHNgoilXVu-HdoJQOcw",
	},
};
let movies;

let divMovies = document.createElement("div");
divMovies.classList.add("movies");

for (let pageInt = 1; pageInt <= 5; pageInt++) {
	fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageInt}`, options)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			movies = response;
			topMovies();
		})
		.catch((err) => console.error(err));
}

function topMovies() {
	for (let key in movies.results) {
		console.log(movies.results[key]);
		let movieId = movies.results[key].id;

		let divMovie = document.createElement("div");
		divMovie.classList.add("movies-info");

		let name = document.createElement("p");
		name.classList.add("movie-title");
		let nameText = document.createTextNode(movies.results[key].title);
		name.appendChild(nameText);

		name.addEventListener("click", function () {
			let language = sessionStorage.getItem("language");
			movieFetch(movieId, language);
		});

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

let movieDetails;
let credits;
function movieFetch(movieId, langSelect) {
	console.log(`${movieId}`);
	if (langSelect === null) {
		langSelect = "nl-NL";
	}
	console.log(langSelect);
	fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=${langSelect}`, options)
		.then((response) => response.json())
		.then((response) => {
			movieDetails = response;
			console.log(response);
			movie(langSelect);
		})
		.catch((err) => console.error(err));
}

let languageSet = {
	"nl-NL": {
		name: "Naam",
		tagline: "Tagline",
		description: "Beschrijving",
		release: "Uitgave",
		runtime: "Duren",
		genre: "Genre",
		score: "Scoren",
		money: "Geld",
		img: "Afbeelding",
		min: " minuten",
	},
	"en-GB": {
		name: "Name",
		tagline: "Tagline",
		description: "Description",
		release: "Release",
		runtime: "Runtime",
		genre: "Genre",
		score: "Score",
		money: "Money",
		img: "Afbeelding",
		min: " minutes",
	},
	"de-DE": {
		name: "Name",
		tagline: "Slogan",
		description: "Beschreibung",
		release: "freigeben",
		runtime: "Laufzeit",
		genre: "Genre",
		score: "Punktzahl",
		money: "Geld",
		img: "Afbeelding",
		min: " minuten",
	},
};

function movie(langSelect) {
	if (document.querySelector(".movie")) {
		document.querySelector(".movie").remove();
		// console.log("delete");
	}
	// console.log(langSelect);
	langSelect = sessionStorage.getItem("language");
	if (!langSelect) {
		langSelect = "nl-NL";
	}
	console.log(movieDetails);
	let name = movieDetails.title;
	console.log(name);
	let tagline = movieDetails.tagline;
	let description = movieDetails.overview;
	let release = movieDetails.release_date;
	let runtime = movieDetails.runtime;
	let genre = movieDetails.genres.map((genre) => genre.name).join(", ");
	let score = movieDetails.vote_average + " based on " + movieDetails.vote_count + " votes";
	let money = movieDetails.revenue.toLocaleString("nl-NL");
	let img = "https://image.tmdb.org/t/p/w500/" + movieDetails.poster_path;
	let movieTextName = "Name";
	let movieInfo = {
		[languageSet[langSelect].name]: name,
		[languageSet[langSelect].tagline]: tagline,
		[languageSet[langSelect].description]: description,
		[languageSet[langSelect].release]: release,
		[languageSet[langSelect].runtime]: runtime + [languageSet[langSelect].min],
		[languageSet[langSelect].genre]: genre,
		[languageSet[langSelect].score]: score,
		[languageSet[langSelect].money]: money,
		[languageSet[langSelect].img]: img,
	};
	//Select for Language change

	let selectElement = document.createElement("select");
	let dutch = document.createElement("option");
	dutch.value = "nl-NL";
	dutch.text = "Dutch";
	selectElement.appendChild(dutch);

	let english = document.createElement("option");
	english.value = "en-GB";
	english.text = "English";
	selectElement.appendChild(english);

	let german = document.createElement("option");
	german.value = "de-DE";
	german.text = "German";
	selectElement.appendChild(german);

	selectElement.value = langSelect;
	let movieId = movieDetails.id;
	selectElement.addEventListener("change", function () {
		sessionStorage.setItem("language", this.value);
		movieFetch(movieId, this.value);
	});
	selectElement.style.width = "100px";
	selectElement.style.height = "30px";

	let divMovie = document.createElement("div");
	divMovie.classList.add("movie");
	divMovie.appendChild(selectElement);

	let divMovieInfo = document.createElement("div");
	divMovieInfo.classList.add("movie-info", "flex-item");

	let divMovieImg = document.createElement("div");
	divMovieImg.classList.add("movie-poster", "flex-item");

	for (let key in movieInfo) {
		if (movieInfo[key] !== "") {
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
	}
	divMovie.appendChild(divMovieInfo);
	divMovie.appendChild(divMovieImg);
	document.body.appendChild(divMovie);

	fetch(`https://api.themoviedb.org/3/movie/${movieDetails.id}/credits?language=nl-NL`, options)
		.then((response) => response.json())
		.then((response) => {
			credits = response;
			console.log(response);
			movieCast();
		})
		.catch((err) => console.error(err));
}

function movieCast() {
	if (document.querySelector(".credits")) {
		document.querySelector(".credits").remove();
		console.log("delete");
	}
	console.log(credits);
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
