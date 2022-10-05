var output = prompt('What is your name?', 'Your name');
output += ' ' + prompt('What is your age', 'Your age');
output += ' ' + prompt('Where do you live', 'Your city');

var x = 3;
x *= 3;
x *= 3;
x *= 3;
x *= 3;
x *= 3;

alert(x);

document.getElementById('number').innerHTML = x;

document.getElementById('user').innerHTML = output;
