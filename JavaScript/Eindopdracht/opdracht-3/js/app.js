import Sidebar from "./components/sidebar.js";
import Main from "./components/main.js";

class App {
	constructor() {
		this.sidebar = new Sidebar(this.clickSidebar.bind(this));
		this.main = new Main();
	}

	clickSidebar(pokemon) {
		this.main.render(pokemon);
	}

	async init() {
		try {
			const data = await this.sidebar.render();
			console.log(data);
		} catch (error) {
			console.error("Error initializing application:", error);
		}
	}
}

const app = new App();
app.init();
