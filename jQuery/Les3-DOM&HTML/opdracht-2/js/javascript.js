$('#goku').on('dblclick', function () {
    $('#goku').attr('src', './vegeta.gif');
    $('#goku').attr('width', '500');
    $('#goku').attr('height', '393');
    $('#goku').attr('alt', 'Vegeta');
    $('#goku').attr('title', 'Vegeta powering up');
    $('#goku').attr('id', 'vegeta');
});

$('button').on('click', function () {
    $('#vegeta').attr('src', './goku.gif');
    $('#vegeta').attr('width', '540');
    $('#vegeta').attr('height', '291');
    $('#vegeta').attr('alt', 'Goku');
    $('#vegeta').attr('title', 'Goku powering up');
    $('#vegeta').attr('id', 'goku');
});
