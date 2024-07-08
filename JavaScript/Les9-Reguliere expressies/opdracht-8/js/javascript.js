fetch("text/oot-heart-pieces.txt")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.text();
	})
	.then((data) => {
		let pattern = /^LOCATION: ([^\n]*)\nOBTAINED BY: ([^\n]*)/gm;
		let table = document.querySelector(".table");
		let tbody = table.querySelector("tbody");
		let matchOutput;
		while ((matchOutput = pattern.exec(data)) !== null) {
			console.log("works");
			const row = document.createElement("tr");
			console.log(matchOutput);
			let tdLocation = document.createElement("td");
			tdLocation.textContent = matchOutput[1];
			row.appendChild(tdLocation);

			let tdObtained = document.createElement("td");
			tdObtained.textContent = matchOutput[2];
			row.appendChild(tdObtained);
			tbody.appendChild(row);
		}
		table.appendChild(tbody);
	})
	.catch((error) => {
		console.error("There was a problem with fetch operation:", error);
	});
