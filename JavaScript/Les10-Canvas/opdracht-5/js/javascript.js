const omzet = [
    ['Januari', 15000],
    ['Februari', 11500],
    ['Maart', 9500],
    ['April', 6000],
    ['Mei', 7000],
    ['Juni', 3000],
    ['Juli', -5000],
    ['Augustus', -2000],
    ['September', 4000],
    ['Oktober', 10000],
    ['November', 18000],
    ['December', 24000],
];

const omzetLength = omzet.length;
console.log(omzetLength);
const ctx = document.querySelector('canvas').getContext('2d');
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(0, 400);
ctx.lineTo(800, 400);
ctx.stroke();

let x = 50;
let y = 400;
let width = 50;
let height = 1;

function graphLineDraw(number) {
    heightMath = (number / 100) * height;
    ctx.fillStyle = 'green';
    if (number < 0) {
        ctx.fillStyle = 'red';
    }
    ctx.fillRect(x, y, width, -heightMath);
    x += 60;
}

let i = 0;
while (i < omzetLength) {
    let omzetNumber = omzet[i][1];
    console.log(omzetNumber);
    graphLineDraw(omzetNumber);
    i++;
    if (omzetNumber < 0) {
        console.log('rood');
    }
}

graphLineDraw();
