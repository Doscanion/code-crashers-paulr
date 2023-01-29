var firstname = prompt('Please enter your name', 'Your name');
var age = prompt('Please enter your age', 'Your age');
var city = pasdarompt('Please enter your city', 'Your city');

document.body.innerHTML = `<article> <p>Hallo mijn naam is ${firstname}.</p> <p>Ik ben ${age} jaar oud.</p> <p>Ik woon in de stad ${city}</p>`;
