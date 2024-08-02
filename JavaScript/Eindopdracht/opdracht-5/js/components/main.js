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

		let isShiny;
		if (Math.floor(Math.random() * 10 + 1) === 1) {
			isShiny = true;
			setTimeout(() => {
				console.log("A shiny Pokémon has appeared!");
			}, 2000);
		} else {
			isShiny = false;
		}
		const pokemonImg = document.createElement("img");
		let imgsrc;
		if (!isShiny) {
			imgsrc = pokemon.sprites.front_default;
		} else {
			imgsrc = pokemon.sprites.front_shiny;
		}
		pokemonImg.src = imgsrc;
		pokemonImg.alt = pokemon.name;
		pokemonImg.loading = "early";
		pokemonTopContainer.appendChild(pokemonImg);
		pokemonSelector.appendChild(pokemonTopContainer);

		const pokemonInfo = document.createElement("div");
		pokemonInfo.classList.add("pokemon-info-main");
		pokemonInfo.classList.add("pokemon-info-childs");

		const pokemonInfoText = document.createElement("div");
		pokemonInfoText.classList.add("pokemon-info-text");
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

		const pokemonAddMember = document.createElement("button");
		pokemonAddMember.classList.add("pokemon-add-button");
		pokemonAddMember.textContent = "Add to team";
		pokemonAddMember.addEventListener("click", () => {
			const nickname = prompt("Nickname: ", pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1));
			this.pokemonTeam(pokemon, imgsrc, nickname);
		});
		pokemonInfoText.appendChild(pokemonAddMember);

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
		const atk = pokemon.stats[1].base_stat;
		const def = pokemon.stats[2].base_stat;
		const spatk = pokemon.stats[3].base_stat;
		const spdef = pokemon.stats[4].base_stat;
		const spd = pokemon.stats[5].base_stat;

		const stats = {
			hp: {
				stat: hp,
				color: "#FF5959",
			},
			atk: {
				stat: atk,
				color: "#F5AC78",
			},
			def: {
				stat: def,
				color: "#FAE078",
			},
			spatk: {
				stat: spatk,
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

	pokemonTeam(pokemon, imgsrc, nickname) {
		let newTeam = [];
		if (localStorage.getItem("pokemonTeam") !== null) {
			newTeam = JSON.parse(localStorage.getItem("pokemonTeam"));
		}
		if (Object.keys(newTeam).length < 6) {
			const hp = pokemon.stats[0].base_stat;
			const atk = pokemon.stats[1].base_stat;
			const def = pokemon.stats[2].base_stat;
			const spatk = pokemon.stats[3].base_stat;
			const spdef = pokemon.stats[4].base_stat;
			const spd = pokemon.stats[5].base_stat;
			const types = pokemon.types;

			//id nodig? - moet
			const pokemonToAdd = {
				id: Date.now() + Math.floor(Math.random() * 100),
				nickname: nickname,
				name: pokemon.name,
				img: imgsrc,
				hp: hp,
				atk: atk,
				def: def,
				spatk: spatk,
				spdef: spdef,
				spd: spd,
				types: types,
			};

			newTeam.push(pokemonToAdd);

			localStorage.setItem("pokemonTeam", JSON.stringify(newTeam));

			this.pokemonShowTeam(newTeam);
		} else {
			alert("The team already has 6 Pokémons.");
		}
	}

	pokemonShowTeam(pokemonTeam) {
		const teamSelector = document.querySelector(".pokemon-team");
		teamSelector.innerHTML = "";
		for (const pokemon of pokemonTeam) {
			const pokemonFigure = document.createElement("figure");
			const pokemonImg = document.createElement("img");
			pokemonImg.src = pokemon.img;
			pokemonImg.alt = pokemon.name;
			pokemonImg.loading = "early";

			const pokemonDeleteMember = document.createElement("button");
			pokemonDeleteMember.classList.add("pokemon-add-button");
			pokemonDeleteMember.innerHTML = "&#10006;";
			pokemonDeleteMember.addEventListener("click", () => {
				const userDeletePokemon = window.confirm("Are you certain you want to delete " + pokemon.name + " from your team");
				if (userDeletePokemon) {
					this.pokemonDelete(pokemonTeam, pokemon);
				}
			});

			pokemonFigure.style.borderColor = pokemonTypeColor[pokemon.types[0].type.name];

			const pokemonCaption = document.createElement("figcaption");
			pokemonCaption.textContent = pokemon.nickname;

			pokemonFigure.appendChild(pokemonImg);
			pokemonFigure.appendChild(pokemonDeleteMember);
			pokemonFigure.appendChild(pokemonCaption);
			teamSelector.appendChild(pokemonFigure);
		}
	}

	pokemonDelete(pokemonTeam, clickedPokemon) {
		const pokemonIndex = pokemonTeam.findIndex((pokemon) => pokemon.id === clickedPokemon.id);
		if (pokemonIndex !== -1) {
			pokemonTeam.splice(pokemonIndex, 1);
			const newTeam = pokemonTeam.sort();
			localStorage.setItem("pokemonTeam", JSON.stringify(newTeam));
			this.pokemonShowTeam(newTeam);
		}
	}

	render() {
		if (localStorage.getItem("pokemonTeam") !== null) {
			console.log("pokemonteam");

			const pokemonTeam = JSON.parse(localStorage.getItem("pokemonTeam"));
			this.pokemonShowTeam(pokemonTeam);
		}
	}
}

export default Main;
