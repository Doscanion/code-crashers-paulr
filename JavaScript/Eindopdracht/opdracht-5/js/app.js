import Sidebar from "./components/sidebar.js";
import Main from "./components/main.js";

class App {
	constructor() {
		this.sidebar = new Sidebar(this.clickSidebar.bind(this));
		this.main = new Main();
	}

	clickSidebar(pokemon) {
		this.main.pokemonInformation(pokemon);
	}

	async init() {
		try {
			await this.sidebar.render();
			await this.main.render();
		} catch (error) {
			console.error("Error initializing application:", error);
		}
	}
}

const app = new App();
app.init();
