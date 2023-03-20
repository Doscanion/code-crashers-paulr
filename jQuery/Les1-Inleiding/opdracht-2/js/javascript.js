$(document).ready(function () {
    $('#block-1').on('click', function () {
        $('#block-1').hide();
    });
    $('#block-2').on('dblclick', function () {
        alert('test');
        $('#block-2').hide();
    });

    $('#block-3').on('mouseover', function () {
        alert('Hallo');
    });
    $('#block-3').on('mouseout', function () {
        alert('Dag');
        $('#block-3').hide();
    });
    $('#block-4').on('click', function () {
        $('#block-5').hide();
    });
    $('#block-5').on('click', function () {
        $('#block-4').hide();
    });
});
