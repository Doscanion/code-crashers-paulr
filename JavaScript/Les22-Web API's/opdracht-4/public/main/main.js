//gets the list needed for starting the code
let listTrello;
let cardsTrello;
let labelsTrello;

const colors = {
	red: "rgb(255, 0, 0)",
	green: "rgb(0, 255, 0)",
	blue: "rgb(0, 0, 255)",
};

Promise.all([
	fetch(
		"https://api.trello.com/1/boards/iAbFW66W/lists?key=4ca804874aefd1639f948d09a3e25bee&token=ATTA286faecf22aab46654b2ce9c1305e98eadbbf5a35349358ea43faa51d562148aFAFCFB73"
	).then((response) => response.json()),
	fetch(
		`https://api.trello.com/1/boards/iAbFW66W/cards?key=4ca804874aefd1639f948d09a3e25bee&token=ATTA286faecf22aab46654b2ce9c1305e98eadbbf5a35349358ea43faa51d562148aFAFCFB73`
	).then((response) => response.json()),
	fetch(
		`https://api.trello.com/1/boards/iAbFW66W/labels?key=4ca804874aefd1639f948d09a3e25bee&token=ATTA286faecf22aab46654b2ce9c1305e98eadbbf5a35349358ea43faa51d562148aFAFCFB73`
	).then((response) => response.json()),
])
	.then(([lists, cards, labels]) => {
		console.log(lists);
		console.log(cards);
		console.log(labels);
		cardsTrello = cards;
		labelsTrello = labels;
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
		let labelsContainer;
		let div = document.createElement("div");
		div.classList.add("card");
		console.log(card.labels);
		if (card.labels !== undefined) {
			if (card.labels.length >= 0 && !undefined) {
				labelsContainer = document.createElement("div");
				labelsContainer.classList.add("labels-container");

				card.labels.forEach((label, index) => {
					console.log("Label!!!");

					let labelItem = document.createElement("div");
					labelItem.classList.add("label");
					labelItem.style.backgroundColor = label.color;
					labelItem.addEventListener("click", function () {
						console.log(card.labels[index]);
						deleteLabel(card.id, card.labels[index].id);
						labelItem.remove();
					});
					labelsContainer.appendChild(labelItem);
				});

				div.appendChild(labelsContainer);
			}
		}

		let p = document.createElement("p");
		let ptext = document.createTextNode(card.name);
		p.appendChild(ptext);
		div.appendChild(p);

		let selectLabel = document.createElement("select");
		let optionRed = document.createElement("option");
		optionRed.value = "red";
		optionRed.text = "Red";

		let optionGreen = document.createElement("option");
		optionGreen.value = "green";
		optionGreen.text = "Green";

		let optionBlue = document.createElement("option");
		optionBlue.value = "blue";
		optionBlue.text = "Blue";

		selectLabel.appendChild(optionRed);
		selectLabel.appendChild(optionGreen);
		selectLabel.appendChild(optionBlue);

		selectLabel.value = "";

		//Select event for Create and Delete Label
		selectLabel.addEventListener("change", async function () {
			const thisColor = this.value;
			try {
				let labels = await getLabelsFromCards(card.id);
				console.log(labels);

				const labelWithSameColor = labels.find((label) => label.color === thisColor);

				if (labelWithSameColor) {
					console.log(`Label with color ${thisColor} already exists on the card.`);
				} else {
					let labelItem = document.createElement("div");
					labelItem.classList.add("label");
					labelItem.style.backgroundColor = thisColor;
					labelItem.addEventListener("click", function () {
						for (const label of labelsTrello) {
							if (label.color === thisColor) {
								deleteLabel(card.id, label.id);
								labelItem.remove();
								return;
							}
						}
					});
					for (const label of labelsTrello) {
						console.log(label);
						console.log(thisColor);
						if (label.color === thisColor) {
							addLabelToCard(card.id, label.id);
						}
					}

					document.querySelector(".container").appendChild(labelItem);
					labelsContainer.appendChild(labelItem);
					console.log(`No label with color ${thisColor} exists on the card.`);
				}

				selectLabel.value = "";
			} catch (error) {
				console.error("Error fetching labels:", error);
			}
		});
		div.appendChild(selectLabel);

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

async function deleteLabel(cardId, labeId) {
	fetch(
		`https://api.trello.com/1/cards/${cardId}/idlabels/${labeId}?key=4ca804874aefd1639f948d09a3e25bee&token=ATTA286faecf22aab46654b2ce9c1305e98eadbbf5a35349358ea43faa51d562148aFAFCFB73`,
		{
			method: "DELETE",
		}
	)
		.then((response) => {
			console.log(`Response: ${response.status} ${response.statusText}`);
			return response.text();
		})
		.then((text) => console.log(text))
		.catch((err) => console.error(err));
}

async function addLabelToCard(cardId, labeId) {
	fetch(
		`https://api.trello.com/1/cards/${cardId}/idlabels/?value=${labeId}&key=4ca804874aefd1639f948d09a3e25bee&token=ATTA286faecf22aab46654b2ce9c1305e98eadbbf5a35349358ea43faa51d562148aFAFCFB73`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		}
	)
		.then((response) => {
			console.log(`Response: ${response.status} ${response.statusText}`);
			return response.text();
		})
		.then((text) => console.log(text))
		.catch((err) => console.error(err));
}

async function getLabelsFromCards(cardId) {
	try {
		const response = await fetch(
			`https://api.trello.com/1/cards/${cardId}/labels?key=4ca804874aefd1639f948d09a3e25bee&token=ATTA286faecf22aab46654b2ce9c1305e98eadbbf5a35349358ea43faa51d562148aFAFCFB73`
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const labels = await response.json();
		console.log("Labels on the card:", labels);
		return labels;
	} catch (error) {
		console.error("Error fetching labels:", error);
		throw error;
	}
}
