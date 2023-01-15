function start() {
    alert(Math.floor(Math.random() * 101));
}

const button1 = document.getElementById('button-1');
const button3 = document.getElementById('button-3');
const button2 = document.getElementById('button-2');

button1.addEventListener('click', start);
button3.addEventListener('mouseover', start);
button2.addEventListener('dblclick', start);
