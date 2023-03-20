$('.header-block').on('click', function () {
    if ($(this).children('ul').is(':visible')) {
        $(this).children('ul').slideUp(500);
    } else {
        $('header').find('ul').slideUp(500);
        $(this).children('ul').slideDown(500);
    }
});
