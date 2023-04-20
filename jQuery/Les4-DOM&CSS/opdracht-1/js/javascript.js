$('li').on('mouseover', function () {
    $(this).css('color', 'blue');
});

$('li').on('click', function () {
    $(this).css('text-shadow', 'red 2px 2px 5px');
});

$('button').on('click', function () {
    $('li').removeAttr('style');
});
