$('#button1').on('click', function () {
    $('#width').empty();
    $('#height').empty();
    let width = $('#block').width();
    let height = $('#block').height();
    console.log(width);
    $('#width').append(width);
    $('#height').append(height);
});
$('#button2').on('click', function () {
    $('#width').empty();
    $('#height').empty();
    let width = $('#block').innerWidth();
    let height = $('#block').innerHeight();
    console.log(width);
    $('#width').append(width);
    $('#height').append(height);
});
$('#button3').on('click', function () {
    $('#width').empty();
    $('#height').empty();
    let width = $('#block').outerWidth();
    let height = $('#block').outerHeight();
    console.log(width);
    $('#width').append(width);
    $('#height').append(height);
});
$('#button4').on('click', function () {
    $('#width').empty();
    $('#height').empty();
    let width = $('#block').outerWidth(true);
    let height = $('#block').outerHeight(true);
    console.log(width);
    $('#width').append(width);
    $('#height').append(height);
});
