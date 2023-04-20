$('.fa-magnifying-glass-plus').on('click', function () {
    $('body').animate(
        {
            fontSize: '+=3',
        },
        600,
        function () {
            alert(
                'De tekstgrootte is ' +
                    $('body').css('font-size') +
                    ' hoger geworden',
            );
        },
    );
});

$('.fa-magnifying-glass-minus').on('click', function () {
    $('body').animate(
        {
            fontSize: '-=3',
        },
        600,
        function () {
            alert(
                'De tekstgrootte is ' +
                    $('body').css('font-size') +
                    ' lager geworden',
            );
        },
    );
});
