var randomNumber = Math.random();
document.getElementById('span-1').innerHTML = randomNumber;

var numberTen = randomNumber * 10;
document.getElementById('span-2').innerHTML = numberTen;

var numberRound = Math.round(randomNumber * 255 + 1);
document.getElementById('span-3').innerHTML = numberRound;

var numberdecimal = Math.round((Math.random() * 51 + 50) * 2) / 2;
document.getElementById('span-4').innerHTML = numberdecimal;
