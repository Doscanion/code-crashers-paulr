function titelName() {
    document.getElementById('first-name').innerHTML =
        document.getElementById('name').value;
}

const firstName = document.getElementById('name');

firstName.addEventListener('keyup', titelName);

function agree() {
    alert('Deze pagina voldoet aan de eisen van de nieuwe privacy wet');
}

const agreeCheck = document.getElementById('agree');
agreeCheck.addEventListener('click', agree);

function submitForm(event) {
    event.preventDefault();
    if (confirm('Wilt u doorgaan?')) {
        alert('yup');
        window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    } else {
        alert('nope');
        window.location.assign('https://www.google.nl');
    }
}

const formSubmit = document.getElementById('myForm');
formSubmit.addEventListener('submit', submitForm);
