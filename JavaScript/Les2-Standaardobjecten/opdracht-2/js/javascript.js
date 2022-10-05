var dateInfo = new Date();

document.getElementById('footer-text').innerHTML =
    '© CodeCrashers – ' + dateInfo.getFullYear();

document.getElementById('section-text').innerHTML =
    'Het is nu ' +
    dateInfo.getHours() +
    ':' +
    dateInfo.getMinutes() +
    ':' +
    dateInfo.getSeconds();

document.getElementById('header-text').innerHTML =
    'Deze pagina is opgevraagd op ' +
    (dateInfo.getDay() + 2) +
    '-' +
    (dateInfo.getMonth() + 1) +
    '-' +
    dateInfo.getFullYear();
