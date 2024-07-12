const config = {
	method: "GET",
	mode: "cors",
	cache: "no-store",
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

		let titleText = "";
		if (!pokemonSpecies.is_legendary && !pokemonSpecies.is_mythical) {
			titleText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
		} else {
			titleText = "\u2605" + (pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1));
		}
		const pokemonTitle = document.createElement("h1");
		pokemonTitle.textContent = titleText;
		pokemonSelector.appendChild(pokemonTitle);

		const pokemonImg = document.createElement("img");
		pokemonImg.src = pokemon.sprites.front_default;
		pokemonImg.alt = pokemon.name;
		pokemonImg.loading = "early";
		pokemonSelector.appendChild(pokemonImg);

		const pokemonTextWH = document.createElement("p");
		pokemonTextWH.textContent = "Height: " + pokemon.height / 10 + "m - Weight: " + pokemon.weight + " kg";
		pokemonSelector.appendChild(pokemonTextWH);

		const FlavorTextEn = pokemonSpecies.flavor_text_entries.find((entry) => entry.language.name === "en");
		const pokemonFlavorText = document.createElement("p");
		pokemonFlavorText.textContent = FlavorTextEn.flavor_text;
		pokemonSelector.appendChild(pokemonFlavorText);
	}

	render(pokemon) {
		if (pokemon !== undefined && pokemon !== null) {
			this.pokemonInformation(pokemon);
		}
	}
}

export default Main;
