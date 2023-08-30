$(window).on('scroll', function () {
    scrollBar = $(window).scrollTop();
    $('span').html(scrollBar);
    if (scrollBar <= $('#container').height() / 2) {
        $('#container').css('background-color', 'red');
    } else {
        $('#container').css('background-color', 'blue');
    }
});

$('button').on('click', function () {
    let getal = 0;
    getal = prompt('Please enter an number between 0-3000', 0);
    if (getal >= 0 && getal <= 3000) {
        $('html').animate({ scrollTop: getal }, 500);
    } else{
        alert('Please enter an number between 0-3000');
    }
    console.log(getal);
});
