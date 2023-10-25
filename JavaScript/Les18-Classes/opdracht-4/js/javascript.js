class Flower {
	species;
	color;
	static count = 0;

	constructor(species, color) {
		this.count = ++Flower.count;
		this.species = species;
		this.color = color;
	}

	set species(species) {}
	get species() {}

	set color(color) {}
	get color() {}
}

let flowerOne = new Flower("paardenbloem", "geel");
let flowerTwo = new Flower("roos", "rood");
let flowerThree = new Flower("zonnebloem", "geel");

console.log(flowerOne.count);
console.log(flowerTwo.count);
console.log(flowerThree.count);
