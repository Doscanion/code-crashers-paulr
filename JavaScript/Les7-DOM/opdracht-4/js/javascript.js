let bHtml = document.querySelectorAll('b');

console.log('test');

for (let i = 0; i < bHtml.length; i++) {
    let bText = document.createTextNode(bHtml[i].innerHTML);
    let strong = document.createElement('strong');
    strong.appendChild(bText);
    bHtml[i].parentNode.replaceChild(strong, bHtml[i]);
    console.log(bText);
}

document.querySelector('button').addEventListener('click', function () {
    document.querySelector('p:nth-of-type(2)').style.backgroundColor = 'red';
});
