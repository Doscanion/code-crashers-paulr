// let productMilk = ['Melk', 0.89, 1];
// let productEgg = ['Eieren', 1.29, 0];
// let productCheese = ['Kaas', 1.69, 1];
// let productSugar = ['Suiker', 1.0, 0];

// let products = {
//     product: ['Melk', 'Eieren', 'Kaas', 'Suiker'],
//     price: [0.89, 1.29, 1.69, 1.0],
//     amount: [1, 0, 1, 0],
// };

// console.log(products.product);

// products.price.splice(0, 1, 1.29);
// products.price.splice(1, 2, 1.49);
// products.price.splice(2, 3, 2.79);
// products.price.splice(3, 4, 29.99);

// console.log(products);

// let i = 0;

// products.product.forEach((element) => {
//     document.getElementById(
//         'products',
//     ).innerHTML += `<tr> <td>${products.product[i]}</td> <td>${products.price[i]}</td> <td>${products.amount[i]}</td> </tr>`;
//     i++;
// });


let products = {
    products:
    [{
        name: 'Melk',
        price: 0.89,
        amount: 1
    },
    {
        name: 'Eieren',
        price: 1.29,
        amount: 1
    },
    {
        name: 'Kaas',
        price: 1.69,
        amount: 1
    },
    {
        name: 'Suiker',
        price: 1.0,
        amount: 1
    }]
};

products.products[0].price = 1.29
products.products[1].price = 1.49
products.products[2].price = 2.79
products.products[3].price = 29.29

console.log(products.products);

let i = 0;

products.products.forEach((element) => {
    console.log(products.products[i].name)
    document.getElementById(
        'products',
    ).innerHTML += `<tr> <td>${products.products[i].name}</td> <td>${products.products[i].price}</td> <td>${products.products[i].amount}</td> </tr>`;
    i++;
});

