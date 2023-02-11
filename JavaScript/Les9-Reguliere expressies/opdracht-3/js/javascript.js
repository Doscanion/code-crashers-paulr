// let names = 'Branford, Terra\nCole, Locke\nGaramonde, Cyan';
// console.log(names);
// let order = names.replace(/(\w+), (\w+)/g, '$2 $1');
// console.log(order);
let names = 'Branford, Terra\nCole, Locke\nGaramonde, Cyan\nChère, Celes';
console.log(names);
let order = names.replace(
    /([A-Za-zÀ-ÖØ-öø-ÿ]+), ([A-Za-zÀ-ÖØ-öø-ÿ]+)/g,
    function (match, p1, p2) {
        return p2 + ' ' + p1.toUpperCase();
    },
);
console.log(order);
