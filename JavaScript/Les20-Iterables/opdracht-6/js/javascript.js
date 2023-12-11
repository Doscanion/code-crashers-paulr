// import { Heap } from "heap-js"; ---> werkt niet met watchify [Parse error]
const { Heap } = require("heap-js");

const minHeap = new Heap();

minHeap.init([48, 62, 23, 35, 18, 50, 64, 21]);

console.log(minHeap.peek());
console.log(minHeap.pop());
console.log(minHeap.peek());

for (const iterator of minHeap) {
	let pTag = document.createElement("p");
	pText = document.createTextNode(iterator);
	pTag.appendChild(pText);
	document.body.append(pTag);
}
