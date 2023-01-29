let title = document.title;
let form = document.forms[0].action;
let style = document.styleSheets[0].href;
let passw;

let button1 = document.getElementsByTagName('button')[0];
button1.addEventListener('click', function () {
    let passw = document.getElementsByTagName('input')[1].value;
    alert(title + ' ' + form + ' ' + style + ' ' + passw);
});

let button2 = document
    .getElementsByTagName('button')[1]
    .addEventListener('click', function () {
        document.querySelector('a').innerHTML = 'Ga naar Bing';
        document.querySelector('a').href = 'http://www.bing.com';
        document.querySelector('img').src = './images/singham-2.jpg';
    });

let button3 = document
    .getElementsByTagName('button')[2]
    .addEventListener('click', function () {
        document.body.style.backgroundColor = 'orange';
        document.body.style.fontFamily = 'Calibri';
        document.querySelector('img').width =
            document.querySelector('img').getAttribute('width') * 2;
        document.body.style.display = 'block';
    });
