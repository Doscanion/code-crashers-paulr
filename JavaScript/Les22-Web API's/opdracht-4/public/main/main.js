//Kon geen board ophalen moest op raar manier het oplossen
//gets the cards needed for starting the code
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

//gets the list needed for placing the card(s)
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
		throw err;
	}
}

async function cards(params) {
	try {
		for (const key in params) {
			let existList = false;
			let listItem;
			console.log("card");
			let idList = params[key].idList;
			let list = await fetchList(idList);

			for (const element of document.querySelectorAll(".list")) {
				if (element.textContent.includes(list.name)) {
					existList = true;
					listItem = element;
				}
			}
			if (existList) {
				console.log("list");
				cardCreate(params[key].name, listItem, params[key].id, params[key].labels);
			} else {
				let newList = await lists(idList);
				cardCreate(params[key].name, newList, params[key].id, params[key].labels);
				console.log("no list");
			}
		}
	} catch (err) {
		console.error(err);
	}
}

function cardCreate(name, list, cardId, labels) {
	let div = document.createElement("div");
	div.classList.add("card");

	if (labels && labels.length > 0) {
		let labelsContainer = document.createElement("div");
		labelsContainer.classList.add("labels-container");

		labels.forEach((label) => {
			console.log("Label!!!");

			let labelItem = document.createElement("div");
			labelItem.classList.add("label");
			labelItem.style.backgroundColor = label.color;
			labelsContainer.appendChild(labelItem);
		});

		div.appendChild(labelsContainer);
	}

	let p = document.createElement("p");
	let ptext = document.createTextNode(name);
	p.appendChild(ptext);
	div.appendChild(p);

	// Delete button
	let deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", function () {
		const isConfirmed = confirm("Delete?");
		if (isConfirmed) {
			console.log("weg");
			console.log(cardId);
			deleteCardFromTrello(cardId);
			div.remove();
		}
	});

	//Edit button
	let editButton = document.createElement("button");
	editButton.textContent = "Edit Card";

	let input = document.createElement("input");
	input.type = "text";
	input.placeholder = "Enter the new card name";
	input.value = "opdracht";

	editButton.addEventListener("click", function () {
		const newCardName = input.value.trim();
		if (newCardName !== "") {
			editCardOnTrello(cardId, newCardName);
			p.textContent = newCardName;
		}
	});
	div.appendChild(input);
	div.appendChild(editButton);
	div.appendChild(deleteButton);

	list.appendChild(div);
}

async function editCardOnTrello(cardId, newName) {
	try {
		const response = await fetch(
			`https://api.trello.com/1/cards/${cardId}?key=4ca804874aefd1639f948d09a3e25bee&token=ATTA286faecf22aab46654b2ce9c1305e98eadbbf5a35349358ea43faa51d562148aFAFCFB73`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: newName,
				}),
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		console.log("Card edited on Trello");
	} catch (error) {
		console.error("Error editing card on Trello:", error);
	}
}

async function deleteCardFromTrello(cardId) {
	try {
		const response = await fetch(
			`https://api.trello.com/1/cards/${cardId}?key=4ca804874aefd1639f948d09a3e25bee&token=ATTA286faecf22aab46654b2ce9c1305e98eadbbf5a35349358ea43faa51d562148aFAFCFB73`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		console.log("Card deleted from Trello");
	} catch (error) {
		console.error("Error deleting card from Trello:", error);
	}
}

async function lists(idList) {
	console.log("list");
	try {
		let list = await fetchList(idList);
		let listName = list.name;
		console.log(list);
		let div = document.createElement("div");
		div.classList.add("list");
		let p = document.createElement("p");
		let ptext = document.createTextNode(listName);
		p.classList.add("list-title");
		p.appendChild(ptext);
		let span = document.createElement("span");
		let spantext = document.createTextNode("id:" + idList);
		span.appendChild(spantext);
		div.appendChild(p);
		div.appendChild(span);
		document.querySelector(".container").appendChild(div);
		console.log("list");

		let addCard = document.createElement("div");
		addCard.classList.add("add-card");
		let input = document.createElement("input");
		input.setAttribute("type", "text");
		input.setAttribute("placeholder", "Enter card name");
		let button = document.createElement("button");
		button.textContent = "Add Card";

		button.addEventListener("click", async function () {
			let cardName = input.value.trim();
			if (cardName !== "") {
				// cardCreate(cardName, div);
				// addCardToTrelloList(cardName, list.id);
				const cardData = await addCardToTrelloList(cardName, list.id);
				cardCreate(cardName, div, cardData.id);
			}
		});

		addCard.appendChild(input);
		addCard.appendChild(button);
		div.appendChild(addCard);

		return div;
	} catch (err) {
		console.error(err);
	}
}

async function addCardToTrelloList(cardName, listId) {
	try {
		const response = await fetch(
			"https://api.trello.com/1/cards?key=4ca804874aefd1639f948d09a3e25bee&token=ATTA286faecf22aab46654b2ce9c1305e98eadbbf5a35349358ea43faa51d562148aFAFCFB73",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: cardName,
					idList: listId,
				}),
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const cardData = await response.json();
		console.log("Card added to Trello:", cardData);
		return cardData;
	} catch (error) {
		console.error("Error adding card to Trello:", error);
	}
}
