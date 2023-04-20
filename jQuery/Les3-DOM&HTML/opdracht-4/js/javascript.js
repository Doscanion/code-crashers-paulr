$('#container section:first-child p span').on('click', function () {
    if ($('#container > section:last-child > p >span').length != 50) {
        $('#container section:last-child p').append($(this).clone());
    }
});

$('button').on('click', function () {
    $('#container > section:last-child > p').empty();
});

$('#container > section:last-child > p').on('click', 'span', function () {
    $(this).remove();
});
