$('#go').on('click', function () {
    $('#block')
        .animate(
            {
                width: '+=300',
                left: '',
            },
            600,
        )
        .animate(
            {
                width: '-=300',
                left: '+=300',
                borderRadius: '75',
                borderWidth: '+=30',
            },
            600,
        )
        .animate(
            {
                height: '+=300',
                borderRadius: '0',
                borderWidth: '-=30',
            },
            600,
        )
        .animate(
            {
                height: '-=300',
                top: '+=300',
            },
            600,
        )
        .animate(
            {
                left: '-=300',
                width: '+=300',
            },
            600,
        )
        .animate(
            {
                width: '-=300',
                borderRadius: '75',
                borderWidth: '+=30',
            },
            600,
        )
        .animate(
            {
                top: '-=300',
                height: '+=300',
                borderRadius: '0',
                borderWidth: '-=30',
            },
            600,
        )
        .animate(
            {
                height: '-=300',
            },
            600,
        );
});

$('#stop').on('click', function () {
    $('#block').stop(true);
});

$('#reset').on('click', function () {
    $('#block').animate({
        top: 0,
        left: 0,
        borderRadius: 0,
        borderWidth: 5,
        width: 100,
        height: 100,
    });
});
