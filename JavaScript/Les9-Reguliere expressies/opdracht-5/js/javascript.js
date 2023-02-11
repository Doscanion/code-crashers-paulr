const number = Math.floor(Math.random() * 6) + 1;
createElement(number);
console.log(number);
try {
    if (number == 1) {
        throw 'Helaas, je hebt de skill check niet gehaald!';
    }
} catch (err) {
    console.error(err);
}

const date = new Date();
const day = date.getDay();
try {
    if (day == 0 || day == 6) {
        throw 'STOP! Het is weekend!';
    }
} catch (err) {
    console.error(err);
}

createElement(day);
function createElement(text) {
    const element = document.createElement('p');
    const elementtext = document.createTextNode(text);
    element.appendChild(elementtext);
    document.body.appendChild(element);
}
