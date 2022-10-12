let number = new Array();

let i = 0;

while (i < 8) {
    number[i] = Math.floor(Math.random() * 9999 + 1);

    if (number[i] == 666) {
        break;
    }

    if (number[i] >= 0 && number[i] <= 999) {
        i--;
        continue;
    }

    i++;
}

number.sort(function (a, b) {
    return a - b;
});
for (let i = 0; i < 8; i++) {
    document.getElementById('numbers').innerHTML += '<p>' + number[i] + '</p>';
}
