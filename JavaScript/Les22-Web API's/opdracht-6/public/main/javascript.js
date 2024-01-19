const config = {
	method: "GET",
	mode: "cors",
	cache: "default",
};
console.log("hello");
let villagers;

//no working api - must get key
fetch("https://api.nookipedia.com/villagers", config)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		villagers = data;
		// createVillager(villagers)
	})
	.catch((error) => console.error("Error:", error));

let villagerContainer = document.createElement("div");
villagerContainer.classList.add("villagers-matrix");
document.querySelector(".container").appendChild(villagerContainer);

function createVillager(villagersData) {
	for (const key of villagersData) {
		let villager = document.createElement("div");
		let villagerName = document.createElement("p");
		villagerName.classList.add("villager-name");
		let villagerNameText = document.createTextNode(villagersData[key].name + "♂ ♀");
		villagerName.appendChild(villagerNameText);

		let villagerSex = document.createElement("span");
		villagerSex.classList.add("villager-sex");
		let villagerSexText = document.createTextNode("♂ ♀"); //villagersData[key].?????
		villagerSex.appendChild(villagerSexText);
		villagerName.appendChild(villagerSex);

		let villagerImg = document.createElement("img");
		villagerImg.src = "https://image.tmdb.org/t/p/w500/" + movies.results[key].poster_path;
		villagerImg.alt = villagersData[key].name;
		villagerImg.classList.add("villager-img");

		villager.appendChild(villagerName);
	}
}
