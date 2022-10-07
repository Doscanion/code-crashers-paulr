var dateInfo = new Date();

document.getElementById('footer-text').innerHTML =
    '© CodeCrashers – ' + dateInfo.getFullYear();

document.getElementById('section-text').innerHTML =
    'Het is nu ' +
    String(dateInfo.getHours() + 1).padStart(2, '0') +
    ':' +
    String(dateInfo.getMinutes() + 1).padStart(2, '0') +
    ':' +
    String(dateInfo.getSeconds() + 1).padStart(2, '0');

document.getElementById('header-text').innerHTML =
    'Deze pagina is opgevraagd op ' +
    (dateInfo.getDay() + 2) +
    '-' +
    (dateInfo.getMonth() + 1) +
    '-' +
    dateInfo.getFullYear();
