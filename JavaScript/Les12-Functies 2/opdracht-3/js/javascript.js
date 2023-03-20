const persons = [
    { name: 'Paul', age: 30, loc: 'Dinteloord' },
    { name: 'Sidney', age: 28, loc: 'Dinteloord' },
    { name: 'Sjoerd', age: 27, loc: 'Dinteloord' },
    { name: 'Natasja', age: 33, loc: 'Ridderkerk' },
    { name: 'Mila', age: 7, loc: 'Ridderkerk' },
];
const formatPerson = function (a) {
    let objName = a.name[0] + '.';
    let objAge = a.age + 1;
    let objLoc = a.loc.toUpperCase();
    console.log(objName + ' ' + objAge + ' ' + objLoc);
    let obj = {
        name: objName,
        age: objAge,
        loc: objLoc,
    };
    return obj;
};

formatPerson(persons[0]);

const formattedPersons = persons.map((a) => formatPerson(a));
console.log(formattedPersons);

formattedPersons.map(
    (a) =>
        (document.body.innerHTML += `<section><h1>${a.name}</h1> <p>${a.age}</p> <p>${a.loc}</p></section>`),
);

const names = ['Jeremiah', 'Brienne', 'Gaspar', 'Yoeri'];

// Namen inkorten en opslaan in nieuwe array.
const results = names.map((name) => name.substring(0, 3));
console.log(results);
