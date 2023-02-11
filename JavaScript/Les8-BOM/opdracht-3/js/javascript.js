'use strict';
let venster;
document.querySelector('#plus').addEventListener('click', function () {
    venster = window.open(
        'https://www.google.com',
        '_blank',
        'width=400,height=300',
    );
});

document.querySelector('#red').addEventListener('click', function () {
    venster.close();
});

document.querySelector('#refresh').addEventListener('click', function () {
    location.reload();
});

document.querySelector('#arrow-left').addEventListener('click', function () {
    history.back();
});

document.querySelector('#arrow-right').addEventListener('click', function () {
    console.log('test');
    history.forward();
});

document.querySelector('#info').addEventListener('click', function () {
    console.log(screen.width + 'px', screen.height + 'px');
});
