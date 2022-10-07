let days = [
    'maandag',
    'dinsdag',
    'woensdag',
    'donderdag',
    'vrijdag',
    'zaterdag',
    'zondag',
];

var str = '';

for (let i = 6; i >= 0; i--) {
    if (i == 0 || i == 5 || i == 6) {
        continue;
    } else {
        alert(days);
        str += '<p>' + days[i] + '</p>';
    }
}

document.getElementById('days').innerHTML = str;
