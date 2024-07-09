const config = {
	method: "GET",
	mode: "cors",
	cache: "no-store",
};

class Sidebar {
	constructor() {
		this.pokemons = null;
	}

	async fetch() {
		try {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=897`, config);
			if (!response.ok) {
				throw new Error("Response not ok");
			}
			const data = await response.json();
			console.log(data);
			this.pokemons = data.results;
		} catch (error) {
			console.error("There was a problem with the fetch operation:", error);
		}
	}

	async imgName(pokemon) {
		let imgSrc;
		let idPokemon;

		try {
			const response = await fetch(`${pokemon.url}`, config);
			if (!response.ok) {
				throw new Error("Response not ok");
			}
			const pokemonInfo = await response.json();
			console.log(pokemonInfo);
			imgSrc = pokemonInfo.sprites.front_default;
			idPokemon = pokemonInfo.id;
		} catch (error) {
			console.error("There was a problem with the fetch operation:", error);
		}
		const formatIndex = idPokemon.toLocaleString("en-US", {
			minimumIntegerDigits: 3,
			useGrouping: false,
		});

		let sidebar = document.querySelector(".sidebar");

		const fig = document.createElement("figure");
		fig.classList.add("fig-container");

		const img = document.createElement("img");
		img.src = imgSrc;
		img.alt = idPokemon;
		img.loading = "lazy";

		const figcaption = document.createElement("figcaption");
		figcaption.textContent = `#${formatIndex} - ${pokemon.name}`;
		figcaption.classList.add("fig-text");

		fig.appendChild(img);
		fig.appendChild(figcaption);

		sidebar.appendChild(fig);
		return `#${formatIndex} - ${pokemon.name}`;
	}

	async render() {
		if (!this.pokemons) {
			await this.fetch();
		}
		let outputImgNames = [];
		for (let index = 0; index < this.pokemons.length; index++) {
			let pokemon = this.pokemons[index];
			let outputImgName = await this.imgName(pokemon);
			outputImgNames.push(outputImgName);
		}

		return outputImgNames;
	}
}

export default Sidebar;
