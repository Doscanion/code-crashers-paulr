// let productMilk = ['Melk', 0.89, 1];
// let productEgg = ['Eieren', 1.29, 0];
// let productCheese = ['Kaas', 1.69, 1];
// let productSugar = ['Suiker', 1.0, 0];

let products = [
    ['Melk', 'Eieren', 'Kaas', 'Suiker'],
    [0.89, 1.29, 1.69, 1.0],
    [1, 0, 1, 0],
];

products[1].splice(0, 1, 1.29);
products[1].splice(1, 2, 1.49);
products[1].splice(2, 3, 2.79);
products[1].splice(3, 4, 29.99);

console.log(products);

let i = 0;

products[0].forEach((element) => {
    document.getElementById(
        'products',
    ).innerHTML += `<tr> <td>${products[0][i]}</td> <td>${products[1][i]}</td> <td>${products[2][i]}</td> </tr>`;
    i++;
});
