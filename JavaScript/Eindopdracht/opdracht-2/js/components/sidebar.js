const config = {
	method: "GET",
	mode: "cors",
	cache: "no-store",
};

class Sidebar {
	constructor(pokemonImageClick) {
		this.pokemonImageClick = pokemonImageClick;
		this.pokemons = null;
		this.currentIndex = 0;
		this.batchSize = 50;
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
		let pokemonInfo;

		try {
			const response = await fetch(`${pokemon.url}`, config);
			if (!response.ok) {
				throw new Error("Response not ok");
			}
			const pokemonData = await response.json();
			console.log(pokemonData);
			imgSrc = pokemonData.sprites.front_default;
			idPokemon = pokemonData.id;
			pokemonInfo = pokemonData;
		} catch (error) {
			console.error("There was a problem with the fetch operation:", error);
		}
		const formatIndex = idPokemon.toLocaleString("en-US", {
			minimumIntegerDigits: 3,
			useGrouping: false,
		});

		const fig = document.createElement("figure");
		fig.classList.add("fig-container");

		const img = document.createElement("img");
		img.src = imgSrc;
		img.alt = pokemon.name;
		img.loading = "lazy";

		img.addEventListener("click", () => this.pokemonImageClick(pokemonInfo));

		const figcaption = document.createElement("figcaption");
		figcaption.textContent = `#${formatIndex}`;
		figcaption.classList.add("fig-text");

		fig.appendChild(img);
		fig.appendChild(figcaption);

		// return `#${formatIndex} - ${pokemon.name}`;
		return { fig, formatIndex, name: pokemon.name };
	}

	async loadBatch() {
		const fragment = document.createDocumentFragment();
		const endIndex = Math.min(this.currentIndex + this.batchSize, this.pokemons.length);

		let outputImgNames = [];
		const sidebar = document.querySelector(".sidebar");

		for (let index = this.currentIndex; index < endIndex; index++) {
			let pokemon = this.pokemons[index];
			let { fig, formatIndex, name } = await this.imgName(pokemon);
			fragment.appendChild(fig);
			outputImgNames.push({ formatIndex, name });
		}
		sidebar.appendChild(fragment);
		this.currentIndex = endIndex;

		if (this.currentIndex < this.pokemons.length) {
			this.observeLastElement();
		}

		return outputImgNames;
	}

	observeLastElement() {
		const sidebar = document.querySelector(".sidebar");
		const sidebarElements = sidebar.children;
		const sidebarIndexLoad = sidebarElements.length - Math.ceil(this.batchSize / 2);

		if (sidebarIndexLoad >= 0) {
			const targetElement = sidebarElements[sidebarIndexLoad];
			this.observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						this.observer.unobserve(targetElement);
						this.loadBatch();
					}
				});
			});
			this.observer.observe(targetElement);
		}
	}

	async render() {
		if (!this.pokemons) {
			await this.fetch();
		}
		return this.loadBatch();
	}
}

export default Sidebar;
