$('button').on('click', function () {
    $('#div-am')
        .animate(
            {
                left: '+=400',
                backgroundColor: 'red',
            },
            400,
            'linear',
            function () {
                console.log('yup');
            },
        )
        .delay(100)
        .animate(
            {
                top: '+=400',
                backgroundColor: 'blue',
            },
            400,
            'linear',
            function () {
                console.log('yup 2');
            },
        )
        .delay(100)
        .animate(
            {
                left: '0',
                backgroundColor: 'green',
            },
            400,
            'linear',
            function () {
                console.log('yup 3');
            },
        )
        .delay(100)
        .animate(
            {
                top: '0',
                backgroundColor: 'black',
            },
            400,
            'linear',
            function () {
                console.log('yup 4');
            },
        );
});
