$('#replace').on('click', function () {
    $('p:nth-child(5)').html($('p:nth-child(3)').html());
});

$('#switch').click(function () {
    const firstp = $('p:nth-child(3)').html();
    const secondp = $('p:nth-child(5)').html();
    $('p:nth-child(5)').html(firstp);
    $('p:nth-child(3)').html(secondp);
});
