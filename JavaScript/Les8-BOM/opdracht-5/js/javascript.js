function timeClock() {
    date = new Date();
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    document.querySelector(
        '#time',
    ).innerHTML = `${hours}:${minutes}:${seconds}`;
}
timeClock();
let intervalClock = setInterval(timeClock, 1000);

let clock = true;

document.querySelector('#clock').addEventListener('click', function () {
    if (clock == true) {
        clearInterval(intervalClock);
        this.innerHTML = 'Play';
        clock = false;
    } else {
        intervalClock = setInterval(timeClock, 1000);
        this.innerHTML = 'Pause';
        clock = true;
    }
});
