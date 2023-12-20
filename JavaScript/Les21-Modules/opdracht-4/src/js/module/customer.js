import { User } from "./user.js";

export class Customer extends User {
	#username;
	#firstName;
	#lastName;
	#location;
	constructor(username, firstName, lastName, location) {
		super(username);
		this.#username = username;
		this.#firstName = firstName;
		this.#lastName = lastName;
		this.#location = location;
	}
	get customer() {
		return this.#username + " " + this.#firstName + " " + this.#lastName + " " + this.#location;
	}
}
