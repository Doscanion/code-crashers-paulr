let pText = document.querySelector('p').innerHTML;
console.log(pText);
const pattern = /[A-Z]{2}\s*\d{5}/;

ol = document.createElement('ul');
document.querySelector('body').appendChild(ol);

while (pattern.test(pText) == true) {
    console.log('test');
    let pTemp = pText.match(pattern);
    pText = pText.replace(pTemp, '');
    pTemp = pTemp[0].replace(/\s{2,}/, ' ');
    console.log(pTemp);
    let li = document.createElement('li');
    let liText = document.createTextNode(pTemp);
    li.appendChild(liText);
    document.querySelector('ul').appendChild(li);
    console.log(pText);
}
