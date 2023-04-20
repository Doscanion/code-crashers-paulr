const config = {
    method: 'GET',
    mode: 'same-origin',
    cache: 'no-store',
};

document.querySelector('#fantasy').addEventListener('change', function () {
    console.log(this.value);
    switch (this.value) {
        case 'fantasyiv':
            fetch('files/ff4.txt', config)
                .then((response) => response.text())
                .then((data) => {
                    document.getElementById('output').innerHTML = data;
                });
            break;

        case 'fantasyv':
            fetch('files/ff5.txt', config)
                .then((response) => response.text())
                .then((data) => {
                    document.getElementById('output').innerHTML = data;
                });
            break;

        case 'fantasyvi':
            fetch('files/ff6.txt', config)
                .then((response) => response.text())
                .then((data) => {
                    document.getElementById('output').innerHTML = data;
                });
            break;
    }
});
