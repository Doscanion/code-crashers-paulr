let output = '';
listNumbers: for (let i = 1; i <= 5; i++) {
    numbers: for (let j = 1; j <= 5; j++) {
        let rand = Math.floor(Math.random() * 100) + 1;
        output += rand + '<br>';
        if (rand == 13) {
            console.warn(rand + ' bring bad luck');
            break listNumbers;
        }
    }
    output += '<hr>';
}
document.getElementById('container').innerHTML = output;
