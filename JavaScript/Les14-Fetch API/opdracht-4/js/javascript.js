const config = {
	method: "GET",
	mode: "same-origin",
	cache: "no-store",
};

let fetchLink;

document.querySelector("#pages").addEventListener("change", function () {
	console.log(this.value);
	switch (this.value) {
		case "apache":
			fetchLink = "./apache.html";
			break;
		case "dreadnought":
			fetchLink = "./dreadnought.html";
			break;
		case "leopard":
			fetchLink = "./leopard.html";
			break;
		case "northrop":
			fetchLink = "./northrop.html";
			break;
		case "panzer":
			fetchLink = "./panzer.html";
			break;
	}
	htmlLoader();
});

async function htmlLoader() {
	try {
		const response = await fetch(fetchLink, config);
		const data = await response.text();
		console.log(data);
		htmlInner(data);
	} catch {
		(error) => {
			console.error("Nope" + error);
		};
	}
}

function htmlInner(data) {
	document.querySelector("#html").innerHTML = data;
}
