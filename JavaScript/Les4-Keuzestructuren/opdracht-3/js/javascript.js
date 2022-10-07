let date = new Date();
var dagVanWeek = date.getDay();
var dagVanMaand = date.getDate();
var maand = date.getMonth();
alert(date);
if (dagVanWeek == 5 && dagVanMaand == 13) {
    alert('Het is vrijdag de 13e!');
} else {
    alert('Het is geen vrijdag de 13e...');
}

if (dagVanWeek == 6 || dagVanWeek == 0) {
    alert('het is weekend!');
} else {
    alert('Het is geen weekend...');
}

if (dagVanMaand == 19 && maand == 4) {
    ('Vandaag is mijn verjaardag!');
} else {
    ('Ik ben nog lang niet jarig...');
}

if (
    dagVanWeek !== 3 &&
    dagVanWeek !== 6 &&
    dagVanWeek !== 1 &&
    dagVanWeek !== 0
) {
    alert('Ik moet vandaag werken.');
} else {
    alert('Ik ben vandaag vrij!');
}
