document.getElementById('leeftijd').onchange = function () {
    var age = document.getElementById('leeftijd').value;
    if (age < 13) {
        alert('Je bent te jong voor deze website.');
    } else if (age <= 17) {
        alert('Je mag deze website alleen bekijken met een voogd');
    } else {
        alert('Welkom op deze website!');
    }
};
