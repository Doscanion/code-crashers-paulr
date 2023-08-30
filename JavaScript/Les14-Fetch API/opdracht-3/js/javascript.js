const config = {
    method: 'GET',
    mode: 'same-origin',
    cache: 'no-store',
};

let intervalTime = 10000;
let intervalcount = 0;

let intervalLoader = setTimeout(imageLoader, intervalTime);

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
    if (intervalTime <= 90000) {
        intervalTime += 10000;
        console.log('Next is '+intervalTime + ' miliseconden')
    }
    intervalLoader = setTimeout(imageLoader, intervalTime);
    if (intervalcount > 3) {
        const arrayData = data.match(/<[^>]*>/g);
        const arrayReverse = arrayData.reverse();
        document.body.innerHTML = arrayReverse;
        console.log(arrayReverse);
        
    } else {
        document.body.innerHTML = data;
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
