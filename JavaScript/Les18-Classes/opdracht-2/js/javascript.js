// function Movie(name, releaseDate, genre, directors, writers, actors) {
//     if (typeof name == 'string') {
//         this.name = name;
//     } else {
//         throw new TypeError('Must have a string');
//     }

//     if (typeof releaseDate == 'number' && /\d{4}/.test(releaseDate)) {
//         this.releaseDate = releaseDate;
//     } else {
//         throw new TypeError('Must have a integer with 4 numbers');
//     }

//     if (typeof genre == 'string') {
//         this.genre = genre;
//     } else {
//         throw new TypeError('Must have a string');
//     }

//     if (Array.isArray(directors) && directors.length > 0) {
//         this.drectors = directors;
//     } else {
//         throw new TypeError('Must be array with at least one string');
//     }

//     if (Array.isArray(writers) && writers.length > 0) {
//         this.writers = writers;
//     } else {
//         throw new TypeError('Must be array with at least one string');
//     }

//     if (Array.isArray(actors) && actors.length > 0) {
//         this.actors = actors;
//     } else {
//         throw new TypeError('Must be array with at least one string');
//     }
// }

class Movie {
	#name;
	#releaseDate;
	#genre;
	#directors;
	#writers;
	#actors;

	constructor(name, releaseDate, genre, directors, writers, actors) {
		this.#name = name;
		this.#releaseDate = releaseDate;
		this.#genre = genre;
		this.#directors = directors;
		this.#writers = writers;
		this.#actors = actors;
	}

	set name(name) {
		if (typeof name == "string") {
			this.#name = name;
		} else {
			throw new TypeError("Must have a string");
		}
	}
	get name() {}

	set releaseDate(releaseDate) {
		if (typeof releaseDate == "number" && /\d{4}/.test(releaseDate)) {
			this.#releaseDate = releaseDate;
		} else {
			throw new TypeError("Must have a integer with 4 numbers");
		}
	}
	get releaseDate() {}

	set genre(genre) {
		if (typeof genre == "string") {
			this.#genre = genre;
		} else {
			throw new TypeError("Must have a string");
		}
	}
	get genre() {}

	set directors(directors) {
		if (Array.isArray(directors) && directors.length > 0) {
			this.#directors = directors;
		} else {
			throw new TypeError("Must be array with at least one string");
		}
	}
	get directors() {}

	set writers(writers) {
		if (Array.isArray(writers) && writers.length > 0) {
			this.#writers = writers;
		} else {
			throw new TypeError("Must be array with at least one string");
		}
	}
	get writers() {}

	set actors(actors) {
		if (Array.isArray(actors) && actors.length > 0) {
			this.#actors = actors;
		} else {
			throw new TypeError("Must be array with at least one string");
		}
	}
	get actors() {}
}

let vampire = new Movie(
	"Vampire’s Kiss",
	1988,
	"Comedy, Crime, Fantasy, Horror",
	["Robert Bierman"],
	["Joseph Minion"],
	["Nicolas Cage", "Maria Conchita Alonso", "Jennifer Beals"]
);
let singham = new Movie(
	"Singham",
	2011,
	"Action, Crime, Drama",
	["Rohit Shetty"],
	["Hari", "Yunus Sajawal", "Sajid", "Farhad Samji"],
	["Ajay Devgn", "Prakash Raj", "Sudhanshu Pandey"]
);

let bulk = new Movie(
	"The Amazing Bulk",
	2012,
	"Animation, Action, Comedy",
	["Lewis Schoenbrun"],
	["Keith Schaffner", "Jeremiah Campbell"],
	["Terence Lording", "Shevaun Kastl", "Randal Malone"]
);

let wars = new Movie(
	"Geen actie",
	1900,
	"Action, Comedy",
	["Rev Gew"],
	["Neeg Etirw"],
	["Taw Epon", "Epon Taw"]
);

console.log(wars);

let movies = new Array(vampire, singham, bulk);
console.log(movies);
