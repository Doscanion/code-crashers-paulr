let artistMap = new Map();

document.querySelectorAll("figure").forEach((album) => {
	let song = {
		name: album.querySelector("figcaption").textContent,
		artist: album.dataset.artist,
		year: album.dataset.year,
	};
	artistMap.set(song, 0);
	console.log(artistMap);

	album.addEventListener("click", function () {
		let search = song;
		console.log(artistMap.get(song));
		if (artistMap.has(search)) {
			let currentValue = artistMap.get(song);
			let newValue = currentValue + 1;
			artistMap.set(song, newValue);

			console.log("bestaat");
			console.log(artistMap);
			album.querySelector("figcaption").innerHTML = song.name + " - " + newValue;
		} else {
			console.log("nope");
		}
	});
});

console.log(artistMap);
