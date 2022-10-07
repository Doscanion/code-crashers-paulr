let producten = new Array(
    'Sleutelhanger',
    'Bandenpomp',
    'Ruitenwisservloeistof',
    'Reddingsvest',
    'Olie',
    'Skittles',
);

let winkelwagen = [
    producten.slice(1, 2),
    producten.slice(2, 3),
    producten.slice(-2, -1),
];
winkelwagen = winkelwagen.map(function (number) {
    return number.toString().substring(0, 3).toUpperCase();
});

let li = '';
winkelwagen.forEach(listLi);
document.getElementById('list').innerHTML = li;

function listLi(name) {
    li += '<li>' + name + '</li>';
}
