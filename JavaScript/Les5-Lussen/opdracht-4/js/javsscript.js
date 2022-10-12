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

for (let i = 4; i >= 1; i--) {
    str += '<p>' + days[i] + '</p>';
}

document.getElementById('days').innerHTML = str;
