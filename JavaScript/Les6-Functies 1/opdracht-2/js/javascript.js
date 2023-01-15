function makeBold(inputString) {
    const outputString = '<strong>' + inputString + '</strong>';
    return outputString;
}

function makeItalic(inputString) {
    const outputString = '<i>' + inputString + '</i>';
    return outputString;
}

const textBold = makeBold('Javascript');
const textCursive = makeItalic(textBold);

document.getElementById('container').innerHTML += `<p>${textCursive}</p>`;
