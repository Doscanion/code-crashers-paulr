document.querySelector('button').addEventListener('click', function () {
    liItems = document.querySelectorAll('li');
    console.log(liItems);
    for (let i = 0; i < liItems.length; i++) {
        number = 1 + i;
        if (number == 6) {
            continue;
        }

        liItems[i].innerHTML = 'Dit is item' + ' ' + number;
    }
});
