ol = document.createElement('ol');
document.querySelector('body').appendChild(ol);

cities = [
    'Dinteloord',
    'Barendrecht',
    'Ridderkerk',
    'Rotterdam',
    'Eindhoven',
    'Veluwe',
    'Spijkenisse',
];
cities.sort;

for (let i = 0; i < cities.length; i++) {
    let li = document.createElement('li');
    let liText = document.createTextNode(cities[i]);
    li.appendChild(liText);
    document.querySelector('ol').appendChild(li);
}
