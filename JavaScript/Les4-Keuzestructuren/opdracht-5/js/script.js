document.getElementById('leeftijd').onchange = function () {
    var age = document.getElementById('leeftijd').value;
    alert(age);
    if (age < 13) {
        alert('Je bent te jong voor deze website.');
    } else if (age == 13 || age == 14 || age == 15 || age == 16 || age == 17) {
        alert('Je mag deze website alleen bekijken met een voogd');
    } else if (age > 17) {
        alert('Welkom op deze website!');
    }
};
