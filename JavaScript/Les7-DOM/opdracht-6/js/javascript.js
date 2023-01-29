document
    .querySelector('.fa-angle-right')
    .addEventListener('click', function () {
        let dollar = document.querySelector('#euro').value * 1.09;
        document.querySelector('#dollar').value = dollar.toFixed(2);
    });

document.querySelector('.fa-angle-left').addEventListener('click', function () {
    let euro = document.querySelector('#dollar').value * 0.92;
    console.log;
    document.querySelector('#euro').value = euro.toFixed(2);
});
