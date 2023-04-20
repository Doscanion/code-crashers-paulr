$(document).ready(function () {
    $('button').on('click', function () {
        $('img')
            .hide(1000)
            .delay(200)
            .show(1000)
            .delay(200)
            .slideUp(1000)
            .delay(200)
            .slideDown(1000)
            .delay(200)
            .fadeOut(1000)
            .delay(200)
            .fadeIn(1000, function () {
                $('button').fadeOut(1000, function () {});
            })
            .delay(2000);

        $('img')
            .promise()
            .done(function () {
                alert('Wow!');
            });
    });
});
