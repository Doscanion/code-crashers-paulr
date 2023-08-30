// $('.fa-angle-left').on('click', function () {
//     let length = $('#inch').val() * 2.54;
//     console.log(length);
//     $('#cent').val(length.toFixed(1));
// })

// $('.fa-angle-right').on('click', function () {
//     let length = $('#cent').val() / 2.54;
//     console.log(length);
//     $('#inch').val(length.toFixed(1));
// })


$('#cent-container').on('input', '#cent', function () {
    let length = $(this).val() / 2.54;
    console.log(length);
    $('#inch').val(length.toFixed(1));
});

$('#inch-container').on('input', '#inch', function () {
    let length = $(this).val() * 2.54;
    console.log(length);
    $('#cent').val(length.toFixed(1));
});
