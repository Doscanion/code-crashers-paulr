//gets the list needed for starting the code
let listTrello;
let cardsTrello;

Promise.all([
	fetch(
		"https://api.trello.com/1/boards/iAbFW66W/lists?key=4ca804874aefd1639f948d09a3e25bee&token=ATTA286faecf22aab46654b2ce9c1305e98eadbbf5a35349358ea43faa51d562148aFAFCFB73"
	).then((response) => response.json()),
	fetch(
		`https://api.trello.com/1/boards/iAbFW66W/cards?key=4ca804874aefd1639f948d09a3e25bee&token=ATTA286faecf22aab46654b2ce9c1305e98eadbbf5a35349358ea43faa51d562148aFAFCFB73`
	).then((response) => response.json()),
])
	.then(([lists, cards]) => {
		console.log(lists);
		console.log(cards);
		cardsTrello = cards;
		listCreate(lists, cards);
	})
	.catch((error) => console.error("Error fetching data:", error));

function listCreate(lists, cards) {
	for (let element of lists) {
		console.log(cards);
		listsCreateHtml(element, cards);
	}
}

function listsCreateHtml(list, cards) {
	console.log("list");
	let listName = list.name;
	console.log(list);
	let listdiv = document.createElement("div");
	listdiv.classList.add("list");
	let p = document.createElement("p");
	let ptext = document.createTextNode(listName);
	p.classList.add("list-title");
	p.appendChild(ptext);
	let span = document.createElement("span");
	let spantext = document.createTextNode("id:" + list.id);
	span.appendChild(spantext);
	listdiv.appendChild(p);
	listdiv.appendChild(span);
	document.querySelector(".container").appendChild(listdiv);
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
			cardCreateDom(list, cardData, listdiv);
		}
	});

	addCard.appendChild(input);
	addCard.appendChild(button);
	listdiv.appendChild(addCard);
	cardCreate(list, cards, listdiv);
}

function cardCreate(list, cards, listdiv) {
	console.log(cards);
	if (cards.length >= 0) {
		for (const card of cards) {
			cardCreateDom(list, card, listdiv);
		}
	} else {
		cardCreateDom(list, cards, listdiv);
	}
}

function cardCreateDom(list, card, listdiv) {
	if (card.idList === list.id) {
		console.log(card);
		let div = document.createElement("div");
		div.classList.add("card");
		console.log(card.labels);
		if (card.labels !== undefined) {
			if (card.labels.length >= 0 && !undefined) {
				let labelsContainer = document.createElement("div");
				labelsContainer.classList.add("labels-container");

				card.labels.forEach((label) => {
					console.log("Label!!!");

					let labelItem = document.createElement("div");
					labelItem.classList.add("label");
					labelItem.style.backgroundColor = label.color;
					labelsContainer.appendChild(labelItem);
				});

				div.appendChild(labelsContainer);
			}
		}

		let p = document.createElement("p");
		let ptext = document.createTextNode(card.name);
		p.appendChild(ptext);
		div.appendChild(p);

		// Delete button
		let deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.addEventListener("click", function () {
			const isConfirmed = confirm("Delete?");
			if (isConfirmed) {
				console.log("weg");
				console.log(card.id);
				deleteCardFromTrello(card.id);
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
				editCardOnTrello(card.id, newCardName);
				p.textContent = newCardName;
			}
		});
		div.appendChild(input);
		div.appendChild(editButton);
		div.appendChild(deleteButton);

		listdiv.appendChild(div);
	}
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
