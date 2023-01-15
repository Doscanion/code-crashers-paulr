const dkc = 'Donkey Kong Country';

newDkc = dkc.padEnd(30, '.');

console.log(newDkc);

const anthem = 'God Save the Queen';
newAnthem = anthem.replace('Queen', 'King');
console.log(newAnthem);

const lyrics1 = "I'm blue,";
const lyrics2 = 'Da ba dee da ba di';

let lyrics3 = ' '.concat(lyrics2);
let lyrics = lyrics1.concat(lyrics3.repeat(7));
console.log(lyrics);

//patience you must have my young Padawan

const yoda = 'you must have patience my young Padawan';

let piece = yoda.slice(14, 23);
let cut = yoda.replace('patience ', '');

let newYoda = piece.concat(cut);
console.log(newYoda);

document.body.innerHTML = `<p>${newDkc}</p> <p>${newAnthem}</p> <p>${lyrics}</p> <p>${newYoda}</p> `;
