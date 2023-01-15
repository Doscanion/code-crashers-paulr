const biggestCitiesBenelux = [
    'Brussel',
    'Amsterdam',
    'Rotterdam',
    'Den Haag',
    'Antwerpen',
    'Utrecht',
    'Gent',
    'Eindhoven',
    'Groningen',
    'Tilburg',
];

let a, b, rest;

[a, b, ...rest] = biggestCitiesBenelux;

document.getElementById(
    'city',
).innerHTML = `<p>De grootste steden in de Benelux zijn ${a} en ${b}.</p>`;

const myPets = [
    'Hond',
    'Kat',
    'Konijn',
    ['Gladhaar cavia', 'Borstel cavia', 'Rex cavia', 'Coronet cavia'],
];

let hond, kat, konijn, caviaGlad, caviaBorstel, caviaRex, caviaCoronet;

[hond, kat, konijn, caviaGlad, caviaBorstel, caviaRex, caviaCoronet] =
    myPets.flat(Infinity);

document.getElementById(
    'pet',
).innerHTML = `<p>Mijn favoriete huisdieren zijn de ${hond.toLowerCase()}, ${kat.toLowerCase()}, ${konijn.toLowerCase()}, ${caviaGlad.toLowerCase()}, ${caviaBorstel.toLowerCase()}, ${caviaRex.toLowerCase()} en ${caviaCoronet.toLowerCase()}.</p>`;
