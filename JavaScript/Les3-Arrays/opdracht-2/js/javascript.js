let planes = [
    'Ixalan',
    'Tarkir',
    'Ravnica',
    'Dominaria',
    'Theros',
    'Amonkhet',
    'Mirrodin',
    'Innistrad',
];

planes.unshift('Kaladesh');
planes.splice(4, 1);
planes.splice(3, 0, 'Lorwyn');
planes.sort();
planes.reverse();

let place = '';
planes.forEach(placeLi);
document.getElementById('list').innerHTML = place;

function placeLi(name) {
    place += '<li>' + name + '</li>';
}
