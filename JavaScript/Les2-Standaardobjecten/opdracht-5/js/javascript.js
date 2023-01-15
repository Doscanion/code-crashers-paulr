var wordChose = prompt('Kies een woord uit.', 'Sushi');
var letterChose = prompt('Kies een letter uit.', 'a');

document.getElementById('title').innerHTML = wordChose;
document.getElementById('length').innerHTML = wordChose.length;
document.getElementById('lowercase').innerHTML = wordChose.toLowerCase();
document.getElementById('uppercase').innerHTML = wordChose.toUpperCase();
document.getElementById('index').innerHTML = wordChose.indexOf(letterChose);
