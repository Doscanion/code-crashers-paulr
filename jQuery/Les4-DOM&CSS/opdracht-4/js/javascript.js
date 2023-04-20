$(window).on('scroll', function () {
    scrollBar = $(window).scrollTop();
    $('span').html(scrollBar);
    if (scrollBar <= 995) {
        $('#container').css('background-color', 'red');
    } else {
        $('#container').css('background-color', 'blue');
    }
});

$('button').on('click', function () {
    let getal = 0;
    getal = prompt('Please enter an number between 0-1991', 0);
    if (getal >= 0 && getal <= 1991) {
        $('html').animate({ scrollTop: getal }, 500);
    }
    console.log(getal);
});
