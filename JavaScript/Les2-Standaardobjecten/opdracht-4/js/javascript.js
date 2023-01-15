var dateInfo = new Date();

document.getElementById('footer-text').innerHTML =
    '© CodeCrashers – ' + dateInfo.getFullYear();

document.getElementById('section-text').innerHTML =
    'Het is nu ' +
    String(dateInfo.getHours()).padStart(2, '0') +
    ':' +
    String(dateInfo.getMinutes()).padStart(2, '0') +
    ':' +
    String(dateInfo.getSeconds()).padStart(2, '0');

document.getElementById('header-text').innerHTML =
    'Deze pagina is opgevraagd op ' +
    dateInfo.getDate() +
    '-' +
    (dateInfo.getMonth() + 1) +
    '-' +
    dateInfo.getFullYear();
