var x = 1;
var total = 1;

// while (total < 2000) {
//     x *= 2;
//     total += x;
// }

do {
    x *= 2;
    total += x;
} while (total < 2000);
{
}

document.getElementById('total').innerHTML = total;
