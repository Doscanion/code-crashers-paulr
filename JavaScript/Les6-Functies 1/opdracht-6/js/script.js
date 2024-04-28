function changeText(x) {
	document.getElementById("output").innerHTML = "Het is nu " + x + "!";
	console.log("dag");
}
function welkom() {
	document.getElementById("output").innerHTML = "Welkom!";
	console.log("welkom");
}

document.getElementById("dinsdag").addEventListener(
	"click",
	function () {
		changeText("dinsdag");
	},
	true
);
document.getElementById("woensdag").addEventListener(
	"click",
	function () {
		changeText("woensdag");
	},
	true
);
document.getElementById("donderdag").addEventListener(
	"click",
	function () {
		changeText("donderdag");
	},
	true
);
document.getElementById("vrijdag").addEventListener(
	"click",
	function () {
		changeText("vrijdag");
	},
	true
);
document.getElementById("zaterdag").addEventListener(
	"click",
	function () {
		changeText("zaterdag");
	},
	true
);
document.getElementById("zondag").addEventListener(
	"click",
	function () {
		changeText("zondag");
	},
	true
);

document.getElementById("maandag").addEventListener(
	"click",
	function () {
		changeText("maandag");
	},
	true
);

document.getElementById("container").addEventListener("click", welkom, true);
