$(document).ready(function () {
    let i = 0;
    $('button').on('click', function () {
        $('.block').each(function () {
            $(this).delay(i).slideToggle(2000);
            i += 500;
        });
        i = 0;
    });
});
