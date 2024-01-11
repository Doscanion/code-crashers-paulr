fetch(
	"https://api.trello.com/1/boards/iAbFW66W/cards?key=4ca804874aefd1639f948d09a3e25bee&token=ATTA286faecf22aab46654b2ce9c1305e98eadbbf5a35349358ea43faa51d562148aFAFCFB73",
	{
		method: "GET",
	}
)
	.then((response) => {
		console.log(`Response: ${response.status} ${response.statusText}`);
		return response.json();
	})
	.then((text) => {
		console.log(text), cards(text);
	})
	.catch((err) => console.error(err));

async function fetchList(idList) {
	try {
		let response = await fetch(
			`https://api.trello.com/1/lists/${idList}/?key=4ca804874aefd1639f948d09a3e25bee&token=ATTA286faecf22aab46654b2ce9c1305e98eadbbf5a35349358ea43faa51d562148aFAFCFB73`,
			{
				method: "GET",
			}
		);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return await response.json();
	} catch (err) {
		console.error(err);
		throw err; // Re-throw the error to be caught by the caller
	}
}

async function cards(params) {
	try {
		for (const key in params) {
			let idList = params[key].idList;
			let list = await fetchList(idList);
			if (!list) {
				lists(idList);
			}
			for (const element of document.querySelectorAll(".list")) {
				if (element.textContent.includes()) {
				}
			}
			let div = document.createElement("div");
			div.classList.add("card");
			let p = document.createElement("p");
			let ptext = document.createTextNode(key.name);
			p.appendChild(ptext);
			div.appendChild(p);
		}
	} catch (err) {
		console.error(err);
	}
}

async function lists(idList) {
	try {
		let list = fetchList(idList);
		let listName = list.name;

		let div = document.createElement("div");
		div.classList.add("list");
		let p = document.createElement("p");
		let ptext = document.createTextNode(listName);
		p.appendChild(ptext);
		div.appendChild(p);
	} catch (err) {
		console.error(err);
	}
}
