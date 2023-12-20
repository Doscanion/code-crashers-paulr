import { User } from "./user.js";
export class Admin extends User {
	#auth;
	constructor(username, auth) {
		super(username);
		this.#auth = auth;
	}

	set auth(auth) {
		if (!(auth < 5 && auth > 0)) {
			console.error("Auth number can only be 1, 2, 3, 4");
			throw new Error("Auth number can only be 1, 2, 3, 4");
		}
	}
}
