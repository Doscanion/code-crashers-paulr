class ThanosArray extends Array {
	snap() {
		let removeNumber = Math.floor(this.length / 2);
		if (this.length % 2 !== 0) {
			removeNumber++;
		}
		for (let index = 0; index < removeNumber; index++) {
			let number = Math.floor(Math.random() * this.length);
			this.splice(number, 1);
		}
	}
}

let crystal = new ThanosArray("gelukt");
crystal.push(1, "waarschijnlijk", 2, "???", 3, "nope", 0, 9, 10, 11);
console.log(crystal);
crystal.snap();
console.log(crystal);

if (crystal.length > 0) {
	let ulTag = document.createElement("ul");
	crystal.forEach((text) => {
		let liTag = document.createElement("li");
		liTag.textContent = text;
		ulTag.appendChild(liTag);
	});
	document.querySelector("#container").appendChild(ulTag);
}
