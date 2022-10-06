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
planes.splice(3, 1);
planes.splice(2, 0, 'Lorwyn');
planes.sort;
planes.reverse;

let place = '';
planes.forEach(placeLi);
document.getElementById('list').innerHTML = place;

function placeLi(name) {
    place += '<li>' + name + '</li>';
    alert(place);
}
