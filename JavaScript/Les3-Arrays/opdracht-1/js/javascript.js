let names = ['pokemon', 'beyblade', 'medabots', 'yugioh', 'digimon'];
names[4] = 'tmnt';
document.getElementById('name-1').innerHTML = names[0];
document.getElementById('name-2').innerHTML = names[1];
document.getElementById('name-3').innerHTML = names[2];
document.getElementById('name-4').innerHTML = names[3];
document.getElementById('name-5').innerHTML = names[4];

document.getElementById('length').innerHTML = names.length;
