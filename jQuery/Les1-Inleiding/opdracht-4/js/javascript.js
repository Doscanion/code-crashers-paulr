$('img').on('dblclick', function () {
    $(this).fadeTo(2000, 0.3);
    $(this).next().fadeTo(2000, 0.3);
});
