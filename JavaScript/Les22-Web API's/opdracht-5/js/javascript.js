const config = {
	method: "GET",
	mode: "cors",
	cache: "default",
};

let eurValue;
let usdValue;

fetch("https://v6.exchangerate-api.com/v6/d5406e785ae764d82827d915/latest/USD", config)
	.then((response) => response.json())
	.then((data) => {
		console.log(data.conversion_rates.EUR);
		usdValue = data.conversion_rates.EUR;
	});

fetch("https://v6.exchangerate-api.com/v6/d5406e785ae764d82827d915/latest/EUR", config)
	.then((response) => response.json())
	.then((data) => {
		console.log(data.conversion_rates.USD);
		eurValue = data.conversion_rates.USD;
	});

document.querySelector(".fa-angle-right").addEventListener("click", function () {
	let dollar = document.querySelector("#euro").value * eurValue;
	document.querySelector("#dollar").value = dollar.toFixed(2);
});

document.querySelector(".fa-angle-left").addEventListener("click", function () {
	let euro = document.querySelector("#dollar").value * usdValue;
	console.log;
	document.querySelector("#euro").value = euro.toFixed(2);
});
