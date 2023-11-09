let namesOld = new Array("Viktor", "Flik", "Humphrey", "Futch", "Gremio", "Cleo");

let namesNew = [...namesOld];

namesNew.pop();
namesNew.pop();
namesNew.push("Riou", "Nanami");

console.log(namesOld);
console.log(namesNew);

function ulHTML(param) {
	let ul = document.createElement("ul");

	for (const iterator of param) {
		let li = document.createElement("li");
		li.textContent = iterator;
		ul.appendChild(li);
		li.addEventListener("click", function name() {
			console.log(this.value);
			let index = param.indexOf(iterator);
			if (index !== -1) {
				param.splice(index, 1);
			}
			console.log(param);
			this.remove();
		});
	}

	document.body.appendChild(ul);
}

ulHTML(namesOld);
ulHTML(namesNew);
