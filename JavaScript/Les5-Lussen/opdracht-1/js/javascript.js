let number = new Array();

for (let i = 0; i < 8; i++) {
    number[i] = Math.floor(Math.random() * 9999 + 1);
    document.getElementById('numbers').innerHTML += '<p>' + number[i] + '</p>';
}
