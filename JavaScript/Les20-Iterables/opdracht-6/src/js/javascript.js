import { Heap } from "heap-js"; // ---> werkt niet met watchify [Parse error]
// const { Heap } = require("heap-js");

const minHeap = new Heap();

minHeap.init([48, 62, 23, 35, 18, 50, 64, 26, 420]);

console.log(minHeap.peek());
console.log(minHeap.pop());
console.log(minHeap.peek());

for (const iterator of minHeap) {
	let pTag = document.createElement("p");
	let pText = document.createTextNode("Eerst volgende waarde is " + iterator);
	pTag.appendChild(pText);
	document.body.append(pTag);
}

console.log("wow");
