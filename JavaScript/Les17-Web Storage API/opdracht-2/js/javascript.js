if (!sessionStorage.getItem('startTime')) {
    let date = new Date()
    console.log(date.getTime())
    sessionStorage.setItem('startTime', date.getTime()) 
}

window.setInterval(function () {
    let dateNow = new Date();
    dateNow = dateNow.getTime();
    sessionStorage.setItem('currentTime', dateNow) 
    let dateStart = sessionStorage.getItem('startTime');
    let timeSinceStart =  dateNow - dateStart;
    console.log(timeSinceStart);

    let seconds = Math.floor(timeSinceStart / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    console.log(seconds)
    seconds = String(seconds).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    hours = String(hours).padStart(2, '0');

    document.querySelector('#container').innerHTML =  hours + ':' + minutes + ':' + seconds;
}, 1000)