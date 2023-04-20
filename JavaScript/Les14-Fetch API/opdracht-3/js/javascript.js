const config = {
    method: 'GET',
    mode: 'same-origin',
    cache: 'no-store',
};

let intervalTime = 30000;
let intervalcount = 0;

const intervalLoader = setInterval(imageLoader, 1000);

async function imageLoader() {
    try {
        intervalcount += 1;
        const response = await fetch('./imagecrawler.php', config);
        const data = await response.text();
        console.log(data);
        imageHtml(data);
    } catch {
        (error) => {
            console.error('Nope' + error);
        };
    }
}

function imageHtml(data) {
    if (intervalcount > 3) {
        const arrayData = data.match(/<[^>]*>/g);
        const arrayReverse = arrayData.reverse();
        document.body.innerHTML = arrayReverse;
        console.log(arrayReverse);
    } else {
        document.body.innerHTML = data;
    }

    if (intervalTime <= 90000) {
        intervalTime += 10000;
    }
}

// function imageLoader() {
//     fetch('./imagecrawler.php', config)
//         .then((response) => response.text())
//         .then((data) => {
//             document.body.innerHTML = data;
//         })
//         .catch((error) => {
//             console.error('Niet gelukt.');
//         });
// }
