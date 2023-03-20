$('button:contains("Knop 1.1")').on('click', function () {
    $('.row-1:contains("Div 1")').hide('slow');
});
$('button:contains("Knop 1.2")').on('click', function () {
    $('.row-1:contains("Div 1")').show('fast');
});

$('button:contains("Knop 2")').on('click', function () {
    $('.row-2:contains("Div 2")').toggle(5580);
});

//slide
$('button:contains("Knop 3.1")').on('click', function () {
    $('.row-3:contains("Div 3")').slideUp(500);
});
$('button:contains("Knop 3.2")').on('click', function () {
    $('.row-3:contains("Div 3")').slideDown(700);
});

//slidetoggle
$('button:contains("Knop 4")').on('click', function () {
    $('.row-4:contains("Div 4")').slideToggle(1200);
});

//fade
$('button:contains("Knop 5.1")').on('click', function () {
    $('.row-5:contains("Div 5")').fadeOut(1100);
});
$('button:contains("Knop 5.2")').on('click', function () {
    $('.row-5:contains("Div 5")').fadeIn(1300);
});

//fadetoggle
$('button:contains("Knop 6")').on('click', function () {
    $('.row-6:contains("Div 6")').fadeToggle(1400);
});

//fadeto
$('button:contains("Knop 7.1")').on('click', function () {
    $('.row-7:contains("Div 7")').fadeTo(1500, 0.5);
});
$('button:contains("Knop 7.2")').on('click', function () {
    $('.row-7:contains("Div 7")').fadeTo(1700, 1);
});
