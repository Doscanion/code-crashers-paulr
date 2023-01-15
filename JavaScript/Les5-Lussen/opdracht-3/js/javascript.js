let number = new Array();

let i = 0;

while (i < 8) {
    number[i] = Math.floor(Math.random() * 9999 + 1);

    if (number[i] == 666) {
        break;
    }

    if (number[i] >= 0 && number[i] <= 999) {
        number.splice(i);
        i--;
        continue;
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
