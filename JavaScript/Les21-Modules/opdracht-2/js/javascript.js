import songs from "./modules/songPlayer.js";

const songPlayer = songs();

async function songLoop(songPlayer) {
	console.log("Start");

	for (const iterator of songPlayer) {
		await songTime(iterator);
	}

	console.log("Done!!");
}

function songTime(params) {
	return new Promise((resolve) => {
		setTimeout(() => {
			let pTag = document.createElement("p");
			let pText = document.createTextNode(params);
			pTag.appendChild(pText);
			document.body.append(pTag);
			resolve();
		}, 500);
	});
}

songLoop(songPlayer);
