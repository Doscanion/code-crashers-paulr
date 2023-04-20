$('img').each(function () {
    let title = $(this).attr('alt');
    $(this).attr('title', title);
    $(this).after('<figcaption>' + title + '</figcaption>');
});

$('img').on('dblclick', function () {
    if ($(this).data('one') == undefined) {
        console.log($(this).data('sepia'));
        $(this).data('one', 'sepia(100%)');
        $(this).css('filter', $(this).data('one'));
    } else if ($(this).data('one') && $(this).data('two')) {
        $(this).removeAttr('style');
        $(this).removeData();
    } else if ($(this).data('one')) {
        $(this).data('two', 'grayscale(100%)');
        $(this).css('filter', $(this).data('one') + $(this).data('two'));
    }
});
