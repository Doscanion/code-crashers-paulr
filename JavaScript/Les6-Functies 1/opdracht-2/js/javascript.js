function makeBold(inputString) {
    const outputString = '<strong>' + inputString + '</strong>';
    return outputString;
}

function makeItalic(inputString) {
    const outputString = '<i>' + inputString + '</i>';
    return outputString;
}

const textCursive = makeItalic(makeBold('Javascript'));

document.getElementById('container').innerHTML += `<p>${textCursive}</p>`;
