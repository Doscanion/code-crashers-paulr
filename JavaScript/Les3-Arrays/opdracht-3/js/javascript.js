let hondachtigen = ['Hond', 'Wolf', 'Vos', 'Jakhals', 'Olifant'];
let katachtigen = ['Kat', 'Leeuw', 'Tijger', 'Lynx', 'Poema'];

hondachtigen.pop();
hondachtigen.push('Coyote');
katachtigen.push('Luipaard', 'Jaguar');

let zoogdieren = hondachtigen.concat(katachtigen);
zoogdieren.sort();
zoogdieren.push(prompt('Voeg een dier toe', ''));
alert(zoogdieren.join('\n'));
