let blokken = document.querySelectorAll('div');

blokken.forEach(function (blok) {
    console.log('test');
    blok.addEventListener('click', function () {
        this.style.backgroundColor = 'green';
    });
});

// for (let i = 0; i < blokken.length; i++) {
//     let blok = blokken[i];
//     console.log('test');
//     blok.addEventListener('click', function () {
//         this.style.backgroundColor = 'green';
//     });
// }
