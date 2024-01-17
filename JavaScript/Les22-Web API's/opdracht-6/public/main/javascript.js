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

function createVillager(villagersData) {
	for (const key of villagersData) {
		let villagerName = document.createElement("p");
		let villagerNameText = document.createTextNode(villagersData[key].name);
	}
}
