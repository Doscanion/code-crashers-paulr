let artistMap = new Map();

let table = document.querySelector("table");

document.querySelectorAll("figure").forEach((album) => {
	let song = {
		name: album.querySelector("figcaption").textContent,
		artist: album.dataset.artist,
		year: album.dataset.year,
	};
	let valueClick = 0;
	artistMap.set(song, 0);
	console.log(artistMap);

	if (localStorage.getItem(song.name) === null) {
		localStorage.setItem(song.name, 0);
		console.log("geen storage");
	} else {
		let value = JSON.parse(localStorage.getItem(song.name));
		artistMap.set(song, value);
		valueClick = value;
		album.querySelector("figcaption").innerHTML = song.name + " - " + valueClick;
	}

	let newRow = table.insertRow(-1);
	let nameCell = newRow.insertCell(0);
	let artistCell = newRow.insertCell(1);
	let yearCell = newRow.insertCell(2);
	let valueCell = newRow.insertCell(3);
	let buttonCell = newRow.insertCell(4);

	let buttonDOM = document.createElement("button");
	let nameText = document.createTextNode(song.name);
	let artistText = document.createTextNode(song.artist);
	let yearText = document.createTextNode(song.year);
	let valueText = document.createTextNode(valueClick);
	let buttonText = document.createTextNode("zero");

	buttonDOM.appendChild(buttonText);
	nameCell.appendChild(nameText);
	artistCell.appendChild(artistText);
	yearCell.appendChild(yearText);
	valueCell.appendChild(valueText);
	buttonCell.appendChild(buttonDOM);

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
			valueText.nodeValue = newValue;
			localStorage.setItem(song.name, newValue);
		} else {
			console.log("nope");
		}
	});

	buttonDOM.addEventListener("click", function () {
		artistMap.set(song, 0);
		valueText.nodeValue = 0;
		localStorage.setItem(song.name, 0);
		album.querySelector("figcaption").innerHTML = song.name;
	});
});

console.log(artistMap);
