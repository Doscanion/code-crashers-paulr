function Product(name, price) {
    this.name = name
    this.price = price
    Object.defineProperties(Product,{
        name: {
            enumerable: true,
            writable: false
        },
        price:{
            enumerable: true,
            writable: true
        }
    })
}

const cc = new Product("Chromecast", 39.99);
const atv = new Product("Apple TV", 159.99);

Product.prototype.inStock = true;

Product.prototype.addCart = function(){
    if (this.inStock) {
        alert('U heeft de '+ this.name + ' toegevoegd aan de winkelwagen')
    } else{
        alert('Helaas, de ' + this.name + ' is niet beschikbaar')
    }
};

console.log(cc);
console.log(atv);

atv.inStock = false;

console.log(cc.inStock);
console.log(atv.inStock);

cc.addCart();
atv.addCart();
// cc.name = 'Applecast'
// cc.price = 34.99

// atv.name = 'Chrome TV'
// atv.price = 168.99
// console.log(cc)
// console.log(atv)