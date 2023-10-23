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
	constructor(name, releaseDate, genre, directors, writers, actors) {
		if (typeof name == "string") {
			this.name = name;
		} else {
			throw new TypeError("Must have a string");
		}

		if (typeof releaseDate == "number" && /\d{4}/.test(releaseDate)) {
			this.releaseDate = releaseDate;
		} else {
			throw new TypeError("Must have a integer with 4 numbers");
		}

		if (typeof genre == "string") {
			this.genre = genre;
		} else {
			throw new TypeError("Must have a string");
		}

		if (Array.isArray(directors) && directors.length > 0) {
			this.drectors = directors;
		} else {
			throw new TypeError("Must be array with at least one string");
		}

		if (Array.isArray(writers) && writers.length > 0) {
			this.writers = writers;
		} else {
			throw new TypeError("Must be array with at least one string");
		}

		if (Array.isArray(actors) && actors.length > 0) {
			this.actors = actors;
		} else {
			throw new TypeError("Must be array with at least one string");
		}
	}
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

let movies = new Array(vampire, singham, bulk);
console.log(movies);
