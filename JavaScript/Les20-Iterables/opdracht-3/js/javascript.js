const config = {
	method: "GET",
	mode: "cors",
	cache: "no-store",
};

const house = new Set();

fetch("https://codecrashersnl.github.io/json/characters.json", config)
	.then((response) => response.json())
	.then((data) => {
		console.log(data.characters);
		houseOrganise(data.characters);
	});

function houseOrganise(characters) {
	// console.log(characters);
	characters.forEach((character) => {
		// console.log(character);
		if (!house.has(character.houseName) & (character.houseName !== undefined)) {
			if (Array.isArray(character.houseName)) {
				console.log(character.houseName);
				character.houseName.forEach((element) => {
					if (!house.has(element) & (element !== undefined)) {
						house.add(element);
					}
				});
			} else {
				house.add(character.houseName);
			}
		}
	});
	houseHTML();
}

function houseHTML() {
	let ul = document.createElement("ul");
	house.forEach((element) => {
		let li = document.createElement("li");
		li.textContent = element;
		ul.appendChild(li);
	});
	document.body.appendChild(ul);
}
console.log(house);
