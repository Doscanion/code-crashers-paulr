const config = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-store',
};

let dataProducts;

document.querySelector('select').addEventListener('change', function(){
    sort = this.value;
    console.log(sort)
    document.querySelector('#container').innerHTML = '';
    if (sort === 'alpha') {
        console.log('alpha')
        sortProductsAlpha();
    }else if(sort === 'price'){
        console.log('if price')
        sortProductsPrice();
    }else {
        sortProductsStock();
    }
})

fetch("./products.json", config)
    .then(response => response.json())
    .then(data => {
        dataProducts = data;
    console.log(data);
    sortProductsAlpha();
    }).catch(error => {
    console.log('Error:', error);
});

function productLoad(sortProducts) {
    console.log(sortProducts);
    let container = document.querySelector('#container')
    sortProducts.forEach(element => { console.log(element);
        if (element.quantity > 0) {
            console.log(element.product_name);
            let productPicture = document.createElement('img');
            productPicture.src = `./img/${element.pic}` 
            productPicture.width = '300'
            productPicture.style.margin = 'auto'

            let productName = document.createElement('span');
            let productText = document.createTextNode(element.product_name)
            productName.appendChild(productText);


            let productBrand = document.createElement('span');
            let productBrandText = document.createTextNode(element.supplier)
            productBrand.appendChild(productBrandText);

            let productStock = document.createElement('span');
            let productStockText = document.createTextNode('Available: ' + element.quantity)
            productStock.appendChild(productStockText);


            let productPrice = document.createElement('span');
            let productPriceText = document.createTextNode('€' + element.unit_cost)
            productPrice.appendChild(productPriceText);


            let product = document.createElement('div');
            product.style.display = 'grid';
            product.style.marginBottom = '10px';
            product.append(productPicture, productName, productBrand, productStock, productPrice);
            
            container.appendChild(product);
        }
        
    });
    
}

function sortProductsAlpha(){
    sortProducts = dataProducts.sort(function (a, b) {
        if (a.product_name < b.product_name) {
          return -1;
        }
        if (a.product_name > b.product_name) {
          return 1;
        }
        return 0;
      });
    productLoad(sortProducts)
}

function sortProductsPrice(){
    let sortProducts;
    sortProducts = dataProducts.sort((a, b) => parseFloat(a.unit_cost).toFixed(2) - parseFloat(b.unit_cost).toFixed(2));
    console.log(sortProducts)
    productLoad(sortProducts)
}

function sortProductsStock(){
    let sortProducts;
    sortProducts = dataProducts.sort((a, b) => +b.quantity - +a.quantity);
    productLoad(sortProducts)
}