var language = prompt(
    'Maken keuzen uit de talen: nl, en, de of es',
    'nl, en, de of es',
);

switch (language) {
    case 'nl':
        document.getElementById('title').innerHTML = 'Welkom';
        break;
    case 'en':
        document.getElementById('title').innerHTML = 'Welcome';
        break;
    case 'de':
        document.getElementById('title').innerHTML = 'Willkommen';
        break;
    case 'es':
        document.getElementById('title').innerHTML = 'Bienvenida';
        break;
    default:
        document.getElementById('title').innerHTML = 'Geen taal gekozen...';
        break;
}
