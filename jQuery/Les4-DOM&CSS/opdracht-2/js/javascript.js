$('#button1').on('click', function () {
    let width = $('#block').width();
    let height = $('#block').height();
    buttonClick(width, height);
});
$('#button2').on('click', function () {  
    let width = $('#block').innerWidth();
    let height = $('#block').innerHeight();
    buttonClick(width, height);
});
$('#button3').on('click', function () {
    let width = $('#block').outerWidth();
    let height = $('#block').outerHeight();
    buttonClick(width, height);

});
$('#button4').on('click', function () {
    let width = $('#block').outerWidth(true);
    let height = $('#block').outerHeight(true);
    buttonClick(width, height);
});

function buttonClick(width, height) {
    $('#width').empty();
    $('#height').empty();
    console.log(width);
    $('#width').append(width);
    $('#height').append(height);
};