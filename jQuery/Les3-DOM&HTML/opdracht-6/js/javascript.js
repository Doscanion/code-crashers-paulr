$('#euro-container').on('input', '#euro', function () {
    let money = $(this).val() * 1.09;
    console.log(money);
    $('#dollar').val(money.toFixed(2));
});

$('#dollar-container').on('input', '#dollar', function () {
    let money = $(this).val() * 0.92;
    console.log(money);
    $('#euro').val(money.toFixed(2));
});
