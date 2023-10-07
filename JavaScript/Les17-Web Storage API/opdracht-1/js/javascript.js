if(!localStorage.getItem("language")){
    localStorage.setItem("language", 'nl');
    console.log('bestaat niet')
    
}

langSelect(localStorage.getItem("language"));

document.querySelector('#select-lang').addEventListener('change', function () {
    localStorage.setItem("language", this.value);
    let lang = localStorage.getItem("language");
    console.log(lang);
    langSelect()
})

function langSelect() {
    let text = '';
    switch (localStorage.getItem('language')) {
        case 'nl':
            text = "Welkom op deze mooie site. U heeft gekozen voor nederlands.";
            break;
        case 'en':
            text = "Welcome to this beautiful site. You have chosen English.";
            break;
        case 'fr':
            text = "Bienvenue sur ce beau site. Vous avez choisi le français.";
            break;
        case 'de':
            text = "Willkommen auf dieser wunderschönen Seite. Sie haben Deutsch gewählt.";
            break;
        case 'es':
            text =  "Bienvenidos a este hermoso sitio. Has elegido español.";
            break;
    }
    langHtml(text);
}

function langHtml(text) {
    document.querySelector('#text-lang').innerHTML = text;
}
// localStorage.setItem("backgroundColor", bgColor);
// let myColor = localStorage.getItem("backgroundColor");
// localStorage.removeItem("backgroundColor");