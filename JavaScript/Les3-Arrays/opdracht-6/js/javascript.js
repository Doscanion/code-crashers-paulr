// let producten = new Array(
//     'Sleutelhanger',
//     'Bandenpomp',
//     'Ruitenwisservloeistof',
//     'Reddingsvest',
//     'Olie',
//     'Skittles',
// );

// let winkelwagen = [
//     producten.slice(1, 2),
//     producten.slice(2, 3),
//     producten.slice(-1),
// ];
// winkelwagen = winkelwagen.map(function (number) {
//     return number.toString().substring(0, 3).toUpperCase();
// });

// let li = '';
// winkelwagen.forEach(listLi);
// document.getElementById('list').innerHTML = li;

// function listLi(name) {
//     li += '<li>' + name + '</li>';
// }

const products = [
    ['Sleutelhanger', 'Reddingsvest'],
    ['Bandenpomp', ['Ruitenwisservloeistof', 'Olie']],
    ['Skittles'],
];

products[1][1].splice(1, 0, 'Koelvloeistof');

console.log(products);

let flat = products.flat(2);

console.log(flat);

flat = flat.map((element) => {
    return element.toUpperCase();
});

console.log(flat);

let shoppingProductOne = flat.slice(2, 3);
let shoppingProductTwo = flat.slice(4, 5);
let shoppingProductThree = flat.slice(6, 7);

let shoppingCart = shoppingProductOne.concat(
    shoppingProductThree,
    shoppingProductTwo,
);

shoppingCart = shoppingCart.map((product) => {
    return product.slice(0, 3);
});

console.log(shoppingCart);

document.body.innerHTML = `${shoppingCart[0]}, ${shoppingCart[1]}, ${shoppingCart[2]}`;
