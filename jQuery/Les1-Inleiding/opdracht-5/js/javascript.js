$('.block').on('click', function () {
    $(this).toggleClass('active');
});

$('button:contains("Delete active divs")').on('click', function () {
    $('.block').each(function () {
        if ($(this).hasClass('active')) {
            $(this).fadeOut(1000, function () {
                $(this).removeClass('active');
            });
        }
    });
});

$('button:contains("Restore all divs")').on('click', function () {
    $('.block').each(function () {
        $(this).fadeIn(1000);
    });
});
