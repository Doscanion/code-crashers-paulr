function calculateStringLengths(minStringLength, ...strings) {
	strings = strings.filter((string) => string.length >= minStringLength);
	console.log(strings);
	const stringLengths = strings.map((string) => string.length);
	const stringLengthsSum = strings.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);
	const stringLengthsAverage = Math.ceil(stringLengthsSum / strings.length);
	console.log(stringLengths, stringLengthsSum, stringLengthsAverage);
	return { stringLengthsSum, stringLengthsAverage };
}

const { stringLengthsSum, stringLengthsAverage } = calculateStringLengths(5, "Test", "Train", "Dog", "Airplane", "Cat");

document.querySelector("body").innerHTML = "Som van de woordlengtes: " + stringLengthsSum + "<br>";
document.querySelector("body").innerHTML += "Gemiddelde van de woordlengtes: " + stringLengthsAverage;
