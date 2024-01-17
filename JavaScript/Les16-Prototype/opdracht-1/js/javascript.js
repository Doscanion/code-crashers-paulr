function Product(name, price) {
	Object.defineProperty(this, "name", {
		value: name,
		enumerable: true,
		writable: false,
	});

	Object.defineProperty(this, "price", {
		value: price,
		enumerable: true,
		writable: true,
	});
}

const cc = new Product("Chromecast", 39.99);
const atv = new Product("Apple TV", 159.99);
console.log(cc);
console.log(atv);

cc.name = "Applecast";
cc.price = 34.99;

atv.name = "Chrome TV";
atv.price = 168.99;
console.log(cc);
console.log(atv);
