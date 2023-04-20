const config = {
    method: 'GET',
    mode: 'same-origin',
    cache: 'no-store',
};

const intervalLoader = setInterval(imageLoader, 30000);

function imageLoader() {
    fetch('./imagecrawler.php', config)
        .then((response) => response.text())
        .then((data) => {
            document.body.innerHTML = data;
        })
        .catch((error) => {
            console.error('Niet gelukt.');
        });
}
