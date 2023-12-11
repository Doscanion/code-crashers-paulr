function* mmSongs() {
	yield "Sonata of Awakening";
	yield "Goron Lullaby";
	yield "New Wave Bossa Nova";
	yield "Elegy of Emptiness";
}

function* songs() {
	yield "Minuet of Forest";
	yield "Bolero of Fire";
	yield "Serenade of Water";
	yield "Requiem of Spirit";
	yield "Nocturne of Shadow";
	yield "Prelude of Light";
	yield* mmSongs();
}

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
