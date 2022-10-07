var confirm = confirm(
    'Deze website maakt gebruik van cookies. Klik op OK om hiermee akkoord te gaan.',
);

if (confirm == true) {
    document.getElementById('cookies-yes').innerHTML =
        'U gaat akoord met cookies.';
} else {
    document.getElementById('cookies-no').innerHTML =
        'U gaat niet akoord met cookies.';
}
