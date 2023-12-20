import { greet as cgreet } from "./modules/greeting-console.js";
import { greet as wgreet } from "./modules/greeting-alert.js";

let int = 0;

document.querySelector(".mark-console").addEventListener("click", function () {
	cgreet();
	int++;
	if (int === 10) {
		window.open("https://www.youtube.com/watch?v=aBbXFsSkB90", "_blank");
	}
});

document.querySelector(".mark-alert").addEventListener("click", function () {
	wgreet();
	if (int === 10) {
		window.open("https://www.youtube.com/watch?v=aBbXFsSkB90", "_blank");
	}
});
