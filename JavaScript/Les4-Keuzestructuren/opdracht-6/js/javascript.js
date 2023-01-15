const destinations = ['Belgium', 'Mordor', 'Kazachstan'];
let travelAdvice = destinations.includes('Mordor')
    ? 'One does not simply walk into Mordor.'
    : "If you like piña coladas, and gettin' caught in the rain.";

// if (destinations.includes("Mordor")){
// 	travelAdvice = "One does not simply walk into Mordor.";
// } else {
// 	travelAdvice = "If you like piña coladas, and gettin' caught in the rain.";
// }

console.log(travelAdvice);

let isAdmin = true;
let content = isAdmin
    ? 'In dit administratiepaneel kunt u alle instellingen aanpassen.'
    : null;

// if (isAdmin) {
//     content = 'In dit administratiepaneel kunt u alle instellingen aanpassen.';
// }

console.log(content);

let age = 17;
let message =
    age >= 18
        ? 'Je mag zelfstandig autorijden.'
        : age >= 16.5
        ? 'Je mag al beginnen met rijlessen'
        : 'Je bent nog te jong om te autorijden.';

// if (age >= 18) {
//     message = 'Je mag zelfstandig autorijden.';
// } else if (age >= 16.5) {
//     message = 'Je mag al beginnen met rijlessen';
// } else {
//     message = 'Je bent nog te jong om te autorijden.';
// }

console.log(message);
