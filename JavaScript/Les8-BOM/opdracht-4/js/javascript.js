let leaveTime;
let changeTime;
let addTime;

function addLeave() {
    venster = window.open('https://youtu.be/kTp2tYKmftE?t=31');
}

document.querySelector('#leave').addEventListener('click', function () {
    leaveTime = setTimeout(addLeave, 4500);
});

function addChange() {
    document.body.style.backgroundColor = 'lightblue';
}

document.querySelector('#change').addEventListener('click', function () {
    changeTime = setTimeout(addChange, 3000);
});

function addContent() {
    console.log('test');
    let parag = document.createElement('p');
    let paragText = document.createTextNode('De tekst voor de parag');
    parag.appendChild(paragText);
    document.querySelector('#par-js').appendChild(parag);
}

document.querySelector('#add').addEventListener('click', function () {
    addTime = setTimeout(addContent, 6000);
});

document.querySelector('#stop').addEventListener('click', function () {
    clearTimeout(addTime);
    clearTimeout(changeTime);
    clearTimeout(leaveTime);
});
