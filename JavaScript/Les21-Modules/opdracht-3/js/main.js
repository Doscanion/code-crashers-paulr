import { greet as consoleGreet } from "./modules/greeting-console.js";
import { greet as windowGreet } from "./modules/greeting-alert.js";

let markClick = 0;

document.querySelector(".mark-console").addEventListener("click", function () {
	consoleGreet();
	markClick++;
	if (markClick === 10) {
		window.open("https://www.youtube.com/watch?v=aekfPU0SwNw", "_blank");
		markClick = 0;
	}
});

document.querySelector(".mark-alert").addEventListener("click", function () {
	windowGreet();
	markClick++;
	if (markClick === 10) {
		window.open("https://www.youtube.com/watch?v=aekfPU0SwNw", "_blank");
		markClick = 0;
	}
});
