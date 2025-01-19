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

	async pokemonInformation(pokemon, evopokemon = false) {
		console.log(pokemon.name);
		const pokemonSpecies = await this.fetchPokemonInfo(pokemon.species.url);
		const pokemonGeneration = await this.fetchPokemonInfo(pokemonSpecies.generation.url);
		const pokemonRegion = await this.fetchPokemonInfo(pokemonGeneration.main_region.url);

		console.log(pokemonRegion);

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

		const pokemonRegionContainer = document.createElement("p");
		const regionName = pokemonRegion.name.charAt(0).toUpperCase() + pokemonRegion.name.slice(1);
		pokemonRegionContainer.textContent = `Introduced in ${regionName}`;
		pokemonInfoText.appendChild(pokemonRegionContainer);

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

		if (!evopokemon) {
			this.pokemonEvolution(pokemonSpecies.evolution_chain);
		}
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
			this.pokemonTeamTotal(newTeam);
		} else {
			alert("The team already has 6 Pokémons.");
		}
	}

	pokemonShowTeam(pokemonTeam) {
		console.log(pokemonTeam);
		if (pokemonTeam.length > 0) {
			const teamSelector = document.querySelector(".pokemon-team");
			teamSelector.innerHTML = "";

			for (let index = 0; index < pokemonTeam.length; index++) {
				const pokemon = pokemonTeam[index];
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
					if (localStorage.getItem("pokemonTeam") !== null) {
						let newTeam = JSON.parse(localStorage.getItem("pokemonTeam"));
						this.pokemonTeamTotal(newTeam);
					}
				});

				pokemonFigure.style.borderColor = pokemonTypeColor[pokemon.types[0].type.name];

				const pokemonCaption = document.createElement("figcaption");
				pokemonCaption.textContent = pokemon.nickname + "✏️";

				pokemonCaption.addEventListener("click", () => {
					const nickname = prompt("Nickname: ", pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1));
					if (nickname === null) {
						return;
					}
					const pokemonIndex = index;
					console.log(nickname + pokemonIndex);
					pokemonTeam[pokemonIndex].nickname = nickname;
					localStorage.setItem("pokemonTeam", JSON.stringify(pokemonTeam));
					this.pokemonShowTeam(pokemonTeam);
				});

				pokemonFigure.appendChild(pokemonImg);
				pokemonFigure.appendChild(pokemonDeleteMember);
				pokemonFigure.appendChild(pokemonCaption);
				teamSelector.appendChild(pokemonFigure);
			}
		} else {
			const teamSelector = document.querySelector(".pokemon-team");
			teamSelector.innerHTML = "";
		}
	}

	pokemonTeamTotal(pokemonTeam) {
		console.log(pokemonTeam);
		if (pokemonTeam.length > 0) {
			const pokemonTeamTotal = document.querySelector(".pokemon-team-total");
			pokemonTeamTotal.innerHTML = "";
			const pokemonTeamCanvasElement = document.createElement("canvas");
			pokemonTeamCanvasElement.width = "620";
			pokemonTeamCanvasElement.height = "180";

			let hp = 0;
			let atk = 0;
			let def = 0;
			let spatk = 0;
			let spdef = 0;
			let spd = 0;

			const teamTypes = new Set();

			for (const pokemon of pokemonTeam) {
				hp += pokemon.hp;
				atk += pokemon.atk;
				def += pokemon.def;
				spatk += pokemon.spatk;
				spdef += pokemon.spdef;
				spd += pokemon.spd;
				pokemon.types.forEach((element) => {
					teamTypes.add(element.type.name);
				});
			}

			console.log(teamTypes);

			const teamStats = {
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

			let x = 50;
			let y = 0;
			let width = 1;
			let height = 20;

			const pokemonTeamContext = pokemonTeamCanvasElement.getContext("2d");
			pokemonTeamContext.font = "bold 15px Arial";

			for (const stat in teamStats) {
				pokemonTeamContext.fillStyle = "black";
				pokemonTeamContext.fillText(stat, x - 50, y + height / 1.5);

				pokemonTeamContext.fillStyle = teamStats[stat].color;
				pokemonTeamContext.fillRect(x, y, (width * teamStats[stat].stat) / 2, height);

				y += height + 10;
			}

			const pokemonTeamDiv = document.createElement("div");
			const pokemonTeamText = document.createElement("p");
			pokemonTeamText.textContent = "Team Info";
			pokemonTeamDiv.classList.add("pokemon-team-canavas");
			pokemonTeamDiv.appendChild(pokemonTeamText);
			pokemonTeamDiv.appendChild(pokemonTeamCanvasElement);
			pokemonTeamTotal.appendChild(pokemonTeamDiv);

			const pokemonTeamTypeContainer = document.createElement("div");
			pokemonTeamTypeContainer.classList.add("pokemon-types");
			pokemonTeamTypeContainer.classList.add("pokemon-types-team");

			teamTypes.forEach((element) => {
				const pokemonType = element;
				const pokemonTypeText = document.createElement("p");
				pokemonTypeText.textContent = pokemonType;
				pokemonTypeText.style.backgroundColor = pokemonTypeColor[pokemonType];
				pokemonTeamTypeContainer.appendChild(pokemonTypeText);
			});

			pokemonTeamTotal.appendChild(pokemonTeamTypeContainer);
		} else {
			const pokemonTeamTotal = document.querySelector(".pokemon-team-total");
			pokemonTeamTotal.innerHTML = "";
		}
	}

	// Pokemon Evolution
	async pokemonEvolution(evoUrl) {
		const evoChain = await this.fetchPokemonInfo(evoUrl.url);
		const pokemonEvolution = document.querySelector(".pokemon-evolution");
		pokemonEvolution.innerHTML = "";
		const pokemonEvolutionContainer = document.createElement("p");
		pokemonEvolutionContainer.textContent = "Evolution Chain";
		pokemonEvolution.appendChild(pokemonEvolutionContainer);
		console.log(evoChain);
		const results = await this.fetchEvolutionData([evoChain.chain]);
		const resultByName = new Map(results.map((result) => [result.name, result]));
		pokemonEvolution.appendChild(this.renderEvolutionHtml([evoChain.chain], resultByName));

		console.log({ results, resultByName });
		// this.pokemonCheckEvolutions(evoChain.chain);
	}

	async fetchEvolutionData(evolutions) {
		const result = await Promise.all(
			evolutions.map(async (evolution) => {
				return Promise.all([
					this.fetchPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${evolution.species.name}/`),
					...(await this.fetchEvolutionData(evolution.evolves_to)),
				]);
			})
		);
		// console.log(result);
		return result.flat();
		// const pokemonUrlInfo = await this.fetchPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${pokemonInfo.species.name}/`);
	}

	renderEvolutionHtml(evolutions, resultByName) {
		const mainContainer = document.createElement("div");
		mainContainer.classList.add("evolutions-vertical");

		evolutions.forEach((evolution) => {
			const data = resultByName.get(evolution.species.name);
			console.log(evolution);
			console.log({ data });
			const evolutionContainer = document.createElement("div");
			evolutionContainer.classList.add("evolutions-horizontal");
			const evolutionPokemonContainer = document.createElement("div");
			evolutionPokemonContainer.classList.add("evolution-pokemon");

			const pokemonNameCap = data.name.charAt(0).toUpperCase() + data.name.slice(1);

			const pokemonImg = document.createElement("img");
			pokemonImg.src = data.sprites.front_default;
			pokemonImg.alt = pokemonNameCap;

			const nameContainer = document.createElement("span");
			nameContainer.textContent = pokemonNameCap;

			const spanElement = document.createElement("span");
			spanElement.innerHTML = "&rarr;";

			evolutionPokemonContainer.appendChild(pokemonImg);
			evolutionPokemonContainer.appendChild(nameContainer);
			evolutionContainer.appendChild(evolutionPokemonContainer);

			if (evolution.evolves_to.length > 0) {
				evolutionContainer.appendChild(spanElement);
			}

			mainContainer.appendChild(evolutionContainer);
			if (evolution.evolves_to.length > 0) {
				const html = this.renderEvolutionHtml(evolution.evolves_to, resultByName);
				evolutionContainer.appendChild(html);
			}
		});
		return mainContainer;
	}

	// async pokemonCheckEvolutions(evoChain, multiContainer = false, multiLineContainer = false) {
	// 	const pokemonUrlInfo = await this.fetchPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${evoChain.species.name}/`);
	// 	console.log(pokemonUrlInfo);
	// 	console.log(evoChain);
	// 	if (evoChain.evolves_to.length === 1) {
	// 		console.log(evoChain.species.name);

	// 		this.pokemonCheckEvolutions(evoChain.evolves_to[0]);
	// 		this.pokemonEvolutionHtml(pokemonUrlInfo, false, multiContainer, multiLineContainer);
	// 	} else if (evoChain.evolves_to.length > 1) {
	// 		console.log(evoChain.species.name);

	// 		const mEvo = evoChain.evolves_to;
	// 		this.pokemonEvolutionHtml(pokemonUrlInfo);
	// 		const multiContainer = document.createElement("div");
	// 		multiContainer.classList.add("pokemon-evolution-multi");
	// 		mEvo.forEach((element) => {
	// 			const multiLineContainer = document.createElement("div");
	// 			multiLineContainer.classList.add("pokemon-evolution-multi");
	// 			this.pokemonCheckEvolutions(element, multiContainer, multiLineContainer);
	// 		});
	// 	} else {
	// 		console.log(evoChain.species.name);
	// 		console.log("done");
	// 		this.pokemonEvolutionHtml(pokemonUrlInfo, true, multiContainer, multiLineContainer);
	// 	}
	// }

	// pokemonEvolutionHtml(pokemon, end = false, multiContainer = false, multiLineContainer = false) {
	// 	const pokemonEvolution = document.querySelector(".pokemon-evolution");
	// 	const oneEvolutionContainer = document.createElement("div");
	// 	oneEvolutionContainer.classList.add("pokemon-evolution-info");

	// 	const pokemonNameCap = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

	// 	const pokemonImg = document.createElement("img");
	// 	pokemonImg.src = pokemon.sprites.front_default;
	// 	pokemonImg.alt = pokemonNameCap;

	// 	const pokemonNameElement = document.createElement("p");
	// 	pokemonNameElement.textContent = pokemonNameCap;

	// 	if (multiContainer && multiLineContainer) {
	// 		console.log("multi nodig");
	// 	}
	// 	oneEvolutionContainer.appendChild(pokemonImg);
	// 	oneEvolutionContainer.appendChild(pokemonNameElement);

	// 	pokemonEvolution.appendChild(oneEvolutionContainer);
	// 	if (!end) {
	// 		const spanElement = document.createElement("span");
	// 		spanElement.innerHTML = "&rarr;";
	// 		pokemonEvolution.appendChild(spanElement);
	// 	}
	// }
	// Pokemon Evolution END

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
			this.pokemonTeamTotal(pokemonTeam);
		}
	}
}

export default Main;
