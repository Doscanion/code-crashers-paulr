let nodeInterval = setInterval(() => {
	let numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50 + 1));
	numbers.forEach((number) => {
		if (number == 50) {
			console.log("Je willekeurig getal is 50, interval wordt gestopt");
			clearInterval(nodeInterval);
		} else {
			console.log("Getal is " + number);
		}
	});
}, 5000);
