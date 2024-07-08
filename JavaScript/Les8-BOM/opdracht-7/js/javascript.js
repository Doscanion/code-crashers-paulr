const userAgent = navigator.userAgent;
const webLang = navigator.language;
const os = navigator.userAgentData.platform;

function trueFalseCheck(params) {
	if (params) {
		return "Enabled";
	} else {
		return "Disabled";
	}
}

const cookies = trueFalseCheck(navigator.cookieEnabled);
const java = trueFalseCheck(navigator.javaEnabled()); //Deprecated
const online = trueFalseCheck(navigator.onLine);

const array = [userAgent, webLang, os, cookies, java, online];

const table = document.getElementById("table-pcinfo");
const tbody = table.querySelector("tbody");
tbody.innerHTML = "";

const row = document.createElement("tr");
array.forEach((element) => {
	const cell = document.createElement("td");
	cell.textContent = element;
	row.append(cell);
});

tbody.appendChild(row);
