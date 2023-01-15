const imgClock = document.getElementById('clock');
const imgDice = document.getElementById('dice');
const imgMovie = document.getElementById('movie');
const imgMirror = document.getElementById('mirror');

function clockTime() {
    const time = new Date();
    document.getElementById('text-img').innerHTML += `${time.toTimeString()} `;
}

function randomNumber() {
    let number = Math.floor(Math.random() * 21);
    document.getElementById('text-img').innerHTML += number + ' ';
}

function movieNames() {
    const movies = ['Star Wars', 'Shrek', 'Ice Age', 'Pokemon', 'Dragon Ball'];
    document.getElementById('text-img').innerHTML += movies.join('-') + ' ';
}

function giveName() {
    const name = prompt('Je naam');
    if (name != null) {
        document.getElementById('text-img').innerHTML += name + ' ';
    }
}

imgClock.addEventListener('click', clockTime);
imgDice.addEventListener('click', randomNumber);
imgMovie.addEventListener('click', movieNames);
imgMirror.addEventListener('click', giveName);
