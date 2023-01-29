let createdContent = document.querySelector('#created-content');

document.querySelector('#add').addEventListener('click', function () {
    let selectStart = '<' + document.querySelector('#tag').value + '>';
    let selectClose = '</' + document.querySelector('#tag').value + '>';
    let text = document.querySelector('#text').value;
    console.log(text);

    createdContent.innerHTML = `${selectStart}${text}${selectClose}`;
});

document.querySelector('#remove').addEventListener('click', function () {
    createdContent.removeAttribute('style');
    createdContent.innerHTML = '';
});

document.querySelector('#font-size').addEventListener('change', function () {
    console.log(document.getElementById('created-content'));
    console.log(document.querySelector('#font-size').value);
    createdContent.style.fontSize =
        document.querySelector('#font-size').value + 'px';
});

document.querySelector('#family').addEventListener('change', function () {
    createdContent.style.fontFamily = this.value;
});

document.querySelector('#colorletter').addEventListener('change', function () {
    createdContent.style.color = this.value;
});

document.querySelector('#colorpicker').addEventListener('change', function () {
    console.log(this.value);
    createdContent.style.backgroundColor = this.value;
});
