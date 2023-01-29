let venster;

document.querySelector('#open').addEventListener('click', function () {
    venster = window.open('', '_blank', 'width=300,height=200');
    date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    venster.document.body.innerHTML = day + '-' + month + '-' + year;
    venster.document.title = 'Datum van vandaag';
    venster.document.body.style.backgroundColor = 'lightblue';
    venster.document.body.style.color = 'darkblue';
    venster.document.body.style.fontFamily = 'Comic Sans MS';
});

document.querySelector('#close').addEventListener('click', function () {
    let confirmText = 'Weet je het zeker';
    if (confirm(confirmText) == true) {
        venster.close();
    }
});
