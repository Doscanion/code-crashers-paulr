let number = new Array();

let i = 0;

while (i < 8) {
    randomNumber = Math.floor(Math.random() * 9999 + 1);
    if (randomNumber >= 0 && randomNumber <= 999) {
        continue;
    }

    number[i] = randomNumber;

    if (number[i] == 666) {
        break;
    }

    i++;
}

number.sort(function (a, b) {
    return a - b;
});

let count = 0;
console.log(number);
while (count < i) {
    if (number[i] == 666) {
        document.getElementById('numbers').innerHTML +=
            '<p>' + number[i] + '</p>';
        break;
    }
    document.getElementById('numbers').innerHTML +=
        '<p>' + number[count] + '</p>';
    count++;
}
