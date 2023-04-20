$('tr').on('click', 'td', function () {
    $(this).replaceWith('<th>' + $(this).text() + '</th>');
});

$('tr').on('click', 'th', function () {
    $(this).replaceWith('<td>' + $(this).text() + '</td>');
});
