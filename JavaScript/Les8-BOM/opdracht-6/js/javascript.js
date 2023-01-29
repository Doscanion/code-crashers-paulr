let countInterval = setInterval(countDown, 1000);

document.querySelector('p').innerHTML;
function countDown() {
    console.log(document.querySelector('p').innerHTML);
    let pText = document.querySelector('p');
    let currentNumber = parseInt(pText.innerHTML);
    if (currentNumber != 0) {
        pText.innerHTML = currentNumber - 1;
    } else {
        clearInterval(countInterval);
        alert('Thanks for waiting!');
        setTimeout(endCount, 2000);
    }
}

function endCount() {
    document.querySelector('#img-container').style.display = 'block';
}
