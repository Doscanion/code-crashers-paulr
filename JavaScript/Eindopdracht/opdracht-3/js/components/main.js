const config = {
	method: "GET",
	mode: "cors",
	cache: "no-store",
};

const pokemonTypeColor = {
	normal: "#A8A878",
	fighting: "#C03028",
	flying: "#A890F0",
	poison: "#A040A0",
	ground: "#E0C068",
	rock: "#B8A038",
	bug: "#A8B820",
	ghost: "#705898",
	steel: "#B8B8D0",
	fire: "#F08030",
	water: "#6890F0",
	grass: "#78C850",
	electric: "#F8D030",
	psychic: "#F85888",
	ice: "#98D8D8",
	dragon: "#7038F8",
	dark: "#705848",
	fairy: "#EE99AC",
};

class Main {
	constructor() {}

	async fetchPokemonInfo(url) {
		try {
			const response = await fetch(`${url}`, config);
			if (!response.ok) {
				throw new Error("Response not ok");
			}
			const data = await response.json();
			return data;
		} catch (error) {
			console.error("There was a problem with the fetch operation:", error);
		}
	}

	async pokemonInformation(pokemon) {
		console.log(pokemon.name);
		const pokemonSpecies = await this.fetchPokemonInfo(pokemon.species.url);

		console.log(pokemonSpecies);
		const pokemonSelector = document.querySelector(".pokemon-info");
		pokemonSelector.innerHTML = "";
		const pokemonTopContainer = document.createElement("div");
		pokemonTopContainer.classList.add("pokemon-info-top");
		pokemonTopContainer.classList.add("pokemon-info-childs");
		pokemonTopContainer.style.backgroundColor = pokemonTypeColor[pokemon.types[0].type.name];

		let titleText = "";
		if (!pokemonSpecies.is_legendary && !pokemonSpecies.is_mythical) {
			titleText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
		} else {
			titleText = "\u2605" + (pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1));
		}
		const pokemonTitle = document.createElement("h1");
		pokemonTitle.textContent = titleText;
		pokemonTopContainer.appendChild(pokemonTitle);

		const pokemonImg = document.createElement("img");
		pokemonImg.src = pokemon.sprites.front_default;
		pokemonImg.alt = pokemon.name;
		pokemonImg.loading = "early";
		pokemonTopContainer.appendChild(pokemonImg);
		pokemonSelector.appendChild(pokemonTopContainer);

		const pokemonInfo = document.createElement("div");
		pokemonInfo.classList.add("pokemon-info-main");

		const pokemonInfoText = document.createElement("div");
		pokemonInfoText.classList.add("pokemon-info-text");
		pokemonInfoText.classList.add("pokemon-info-childs");
		const pokemonTypeContainer = document.createElement("div");
		pokemonTypeContainer.classList.add("pokemon-types");

		pokemon.types.forEach((element) => {
			const pokemonType = element.type.name;
			const pokemonTypeText = document.createElement("p");
			pokemonTypeText.textContent = pokemonType;
			pokemonTypeText.style.backgroundColor = pokemonTypeColor[pokemonType];
			pokemonTypeContainer.appendChild(pokemonTypeText);
		});
		pokemonInfoText.appendChild(pokemonTypeContainer);

		const pokemonTextWH = document.createElement("p");
		pokemonTextWH.textContent = "Height: " + pokemon.height / 10 + "m - Weight: " + pokemon.weight / 10 + " kg";
		pokemonInfoText.appendChild(pokemonTextWH);

		const FlavorTextEn = pokemonSpecies.flavor_text_entries.find((entry) => entry.language.name === "en");
		const pokemonFlavorText = document.createElement("p");
		pokemonFlavorText.textContent = FlavorTextEn.flavor_text;
		pokemonInfoText.appendChild(pokemonFlavorText);

		const pokemonCanvas = document.createElement("div");
		pokemonCanvas.classList.add("pokemon-canvas");
		const canvas = this.pokemonCanvas(pokemon);
		pokemonCanvas.appendChild(canvas);

		pokemonInfo.appendChild(pokemonInfoText);
		pokemonInfo.appendChild(pokemonCanvas);
		pokemonSelector.appendChild(pokemonInfo);
	}

	pokemonCanvas(pokemon) {
		const pokemonCanvasElement = document.createElement("canvas");
		pokemonCanvasElement.width = "310";
		pokemonCanvasElement.height = "180";

		const hp = pokemon.stats[0].base_stat;
		const at = pokemon.stats[1].base_stat;
		const def = pokemon.stats[2].base_stat;
		const spat = pokemon.stats[3].base_stat;
		const spdef = pokemon.stats[4].base_stat;
		const spd = pokemon.stats[5].base_stat;

		const stats = {
			hp: {
				stat: hp,
				color: "#FF5959",
			},
			atk: {
				stat: at,
				color: "#F5AC78",
			},
			def: {
				stat: def,
				color: "#FAE078",
			},
			spatk: {
				stat: spat,
				color: "#9DB7F5",
			},
			spdef: {
				stat: spdef,
				color: "#A7DB8D",
			},
			spd: {
				stat: spd,
				color: "#FA92B2",
			},
		};

		const pokemonContext = pokemonCanvasElement.getContext("2d");
		let x = 50;
		let y = 0;
		let width = 1;
		let height = 20;
		pokemonContext.font = "bold 15px Arial";
		for (const key in stats) {
			pokemonContext.fillStyle = "black";
			pokemonContext.fillText(key, x - 50, y + height / 1.5);

			pokemonContext.fillStyle = stats[key].color;
			pokemonContext.fillRect(x, y, width * stats[key].stat, height);

			y += height + 10;
		}

		return pokemonCanvasElement;
	}

	render(pokemon) {
		if (pokemon !== undefined && pokemon !== null) {
			this.pokemonInformation(pokemon);
		}
	}
}

export default Main;
