import Sidebar from "./components/sidebar.js";

class App {
	constructor() {
		this.sidebar = new Sidebar();
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
