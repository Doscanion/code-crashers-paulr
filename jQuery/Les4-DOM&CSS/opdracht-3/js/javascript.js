$(window).on('load', function () {
    let offX = $('video').offset().left;
    let offY = $('video').offset().top;

    let posX = $('video').position().left;
    let posY = $('video').position().top;

    console.log(posY);

    $('#offsetx').append(offX);
    $('#offsety').append(offY);

    $('#positionx').append(posX);
    $('#positiony').append(posY);
});
