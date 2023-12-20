import { Admin } from "./module/admin.js";
import { Customer } from "./module/customer.js";
import { createPopper } from "@popperjs/core";

let box = document.querySelector("#select-box");

const button = document.querySelector("#button");
const tooltip = document.querySelector("#tooltip");

const popperInstance = createPopper(button, tooltip, {
	modifiers: [
		{
			name: "offset",
			options: {
				offset: [0, 3],
			},
		},
	],
});

function show() {
	tooltip.setAttribute("data-show", "");

	popperInstance.update();
}

function hide() {
	tooltip.removeAttribute("data-show");
}

const showEvents = ["mouseenter", "focus"];
const hideEvents = ["mouseleave", "blur"];

showEvents.forEach((event) => {
	button.addEventListener(event, show);
});

hideEvents.forEach((event) => {
	button.addEventListener(event, hide);
});

box.addEventListener("change", function () {
	console.log("start");
	let auth = "auth";
	let firstName = "first-name";
	let lastName = "last-name";
	let location = "location";
	if (this.value == "admin") {
		createFormInput(auth, "Authenticatieniveau", "Authenticatieniveau", "number", "authenticatieniveau", "authenticatieniveau");

		deleteInput(firstName);
		deleteInput(lastName);
		deleteInput(location);
		console.log("admin");
	} else {
		createFormInput(firstName, "Voornaam", "Voornaam", "text", "voornaam", "voornaam");
		createFormInput(lastName, "Achternaam", "Achternaam", "text", "achternaam", "achternaam");
		createFormInput(location, "Locatie", "Locatie", "text", "locatie", "locatie");

		deleteInput(auth);
		console.log("user");
	}
});

function createFormInput(id, labelFor, labelText, inputType, inputId, inputName) {
	let div = document.createElement("div");
	let label = document.createElement("LABEL");
	let input = document.createElement("INPUT");

	div.setAttribute("class", "form-row");
	div.setAttribute("id", id);

	label.setAttribute("for", labelFor);
	label.appendChild(document.createTextNode(labelText));

	input.setAttribute("type", inputType);
	input.setAttribute("id", inputId);
	input.setAttribute("type", inputName);

	div.appendChild(label);
	div.appendChild(input);

	document.querySelector("#form").appendChild(div);
}

function deleteInput(id) {
	document.getElementById(id).parentNode.removeChild(document.getElementById(id));
}

document.querySelector("#button").addEventListener("click", function () {
	let user = document.querySelector("#gebruikersnaam").value;
	if (document.getElementById(user)) {
		alert("De naam moet unique zijn");
	} else {
		if (box.value == "admin") {
			let auth = document.querySelector("#authenticatieniveau").value;
			if (!(auth < 5 && auth > 0)) {
				alert("Auth number can only be 1, 2, 3, 4");
				throw new Error("Auth number can only be 1, 2, 3, 4");
			}
			console.log(user + auth);
			let newAdmin = new Admin(user, auth);
			newAdmin.auth = auth;
			let newRow = document.querySelector("#admin-table").insertRow(-1);
			let userCell = newRow.insertCell(0);
			let authCell = newRow.insertCell(1);
			let userText = document.createTextNode(user);
			let authText = document.createTextNode(auth);

			userCell.setAttribute("id", user);
			userCell.appendChild(userText);
			authCell.appendChild(authText);
			console.log(newAdmin);
		} else {
			let firstName = document.querySelector("#voornaam").value;
			let lastName = document.querySelector("#achternaam").value;
			let location = document.querySelector("#locatie").value;
			let newCustomer = new Customer(user, firstName, lastName, location);
			console.log(newCustomer.customer);

			let newRow = document.querySelector("#user-table").insertRow(-1);
			let userCell = newRow.insertCell(0);
			let firstNameCell = newRow.insertCell(1);
			let lastNameCell = newRow.insertCell(2);
			let locationCell = newRow.insertCell(3);
			let userText = document.createTextNode(user);
			let firstNameText = document.createTextNode(firstName);
			let lastNameText = document.createTextNode(lastName);
			let locationText = document.createTextNode(location);

			userCell.setAttribute("id", user);
			userCell.appendChild(userText);
			firstNameCell.appendChild(firstNameText);
			lastNameCell.appendChild(lastNameText);
			locationCell.appendChild(locationText);
		}
	}
});
