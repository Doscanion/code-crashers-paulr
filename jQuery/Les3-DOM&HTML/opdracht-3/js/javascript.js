function caption() {
    let cel = $('td').length + $('th').length;
    $('caption').text(cel);
}
caption();

$('button').on('click', function () {
    let name = prompt('Enter your name', '');
    let age = prompt('Your age', '');
    let city = prompt('Your city', '');

    if (name == '' || age == '' || city == '') {
        alert('Fill in all the prompts');
    } else {
        $('table').append(
            '<tr> <td>' +
                name +
                '</td> <td>' +
                age +
                '</td> <td>' +
                city +
                '</td> </tr>',
        );
        caption();
    }
});
