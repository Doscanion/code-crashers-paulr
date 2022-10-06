var numberChose = prompt(
    'Kies een cijfer met 4 getallen voor en na de komma.',
    '0.0',
);

number = Number(numberChose);

document.getElementById('title').innerText = number;
document.getElementById('fixed-1').innerText = number.toFixed(1);
document.getElementById('fixed-3').innerText = number.toFixed(3);
document.getElementById('random-multiplied').innerText = (
    number * Math.random()
).toFixed(2);
document.getElementById('random-divide').innerText = (
    number / Math.random()
).toFixed(2);
