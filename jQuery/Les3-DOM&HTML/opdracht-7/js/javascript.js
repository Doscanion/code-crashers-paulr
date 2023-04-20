let final = null;

$('img').wrap('<figure></figure>');
$('figure').each(function () {
    $(this).append(
        '<figcaption>' + $(this).find('img').attr('alt') + '</figcaption>',
    );
});

$('section').on('click', 'figure', function () {
    if (final == null) {
        final = $(this).detach();
    }
});

$('div').on('click', 'section', function () {
    if (final) {
        final.appendTo($(this));
        final = null;
    }
});
