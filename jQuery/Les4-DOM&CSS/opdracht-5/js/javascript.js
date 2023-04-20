$('div').on('click', function () {
    $(this).css('background-color', 'orange');
    $(this).prevAll().eq(2).css('box-shadow', '5px 5px red');
    $(this).nextAll().eq(3).css('transform', 'rotate(45deg)');
});
