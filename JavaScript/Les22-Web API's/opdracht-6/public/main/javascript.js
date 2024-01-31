const config = {
	method: "GET",
	mode: "cors",
	cache: "default",
};

let villagers;

//no working api
fetch("https://codecrashersnl.github.io/json/villagers.json", {
	method: "HEAD",
	mode: "cors",
}).then((response) => {
	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	} else {
		//no working api
		fetch("https://codecrashersnl.github.io/json/villagers.json", config)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				villagers = data;
				villagerSpecies(villagers);
			})
			.catch((error) => console.error("Error:", error));
	}
	console.log(response.ok);
});

function villagerSpecies(villagersData) {
	let Setspecies = new Set();
	for (const villager of villagersData) {
		Setspecies.add(villager.species);
	}
	console.log(Setspecies);

	const villagersBySpecies = {};
	Setspecies.forEach((species) => {
		villagersBySpecies[species] = villagersData.filter((villager) => villager.species === species);
	});
	filtersVillager(Setspecies, villagersBySpecies);
	console.log(villagersBySpecies);
	createVillager(villagersBySpecies.Anteater);
}

function filtersVillager(villagerSpecies, villagersBySpecies) {
	let villagerFilters = document.createElement("div");
	villagerFilters.classList.add("villagers-filters");
	let activeButton = null;
	for (const species of villagerSpecies) {
		let filter = document.createElement("div");
		filter.classList.add("filter-container");
		let buttonFilter = document.createElement("button");
		buttonFilter.classList.add("filter-button");
		let buttonFilterText = document.createTextNode(species);
		buttonFilter.appendChild(buttonFilterText);
		buttonFilter.addEventListener("click", function () {
			if (activeButton) {
				activeButton.style.backgroundColor = "";
			}
			buttonFilter.style.backgroundColor = "red";
			activeButton = buttonFilter;

			console.log(villagersBySpecies[species]);
			createVillager(villagersBySpecies[species]);
		});
		filter.appendChild(buttonFilter);
		villagerFilters.appendChild(filter);
	}
	document.querySelector(".container").appendChild(villagerFilters);
}

let villagerContainer = document.createElement("div");
villagerContainer.classList.add("villagers-matrix");
document.querySelector(".container").appendChild(villagerContainer);

function createVillager(villagersData) {
	villagerContainer.innerHTML = "";
	for (const villagerData of villagersData) {
		console.log(villagerData["file-name"]);
		let villager = document.createElement("div");
		villager.classList.add("villager-container");
		let villagerName = document.createElement("p");
		villagerName.classList.add("villager-name");
		let villagerNameText = document.createTextNode(villagerData.name["name-EUnl"]);
		villagerName.appendChild(villagerNameText);
		let villagerSexSymbol;
		if (villagerData.gender == "Male") {
			villagerSexSymbol = "♂";
		} else {
			villagerSexSymbol = "♀";
		}
		let villagerSex = document.createElement("span");
		villagerSex.classList.add("villager-sex");
		let villagerSexText = document.createTextNode(" " + villagerSexSymbol); //
		villagerSex.appendChild(villagerSexText);
		villagerName.appendChild(villagerSex);

		let villagerImg = document.createElement("img");
		villagerImg.src = "https://codecrashersnl.github.io/json/villagers/" + villagerData["file-name"] + ".png";
		villagerImg.alt = villagerData.name;
		villagerImg.classList.add("villager-img");

		villager.appendChild(villagerImg);
		villager.appendChild(villagerName);
		villagerContainer.appendChild(villager);
	}
	document.querySelector(".container").appendChild(villagerContainer);
}
