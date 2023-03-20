document.querySelector('button').addEventListener('click', function () {
    const telNumber = document.querySelector('#tel-number').value;
    console.log(telNumber);
    const pattern =
        /^06\s{1}\d{8}$|^06\-\d{8}$|^06\d{8}$|^\+31\s{1}6\s{1}\d{8}$/;
    console.log(pattern);
    if (pattern.test(telNumber) !== true) {
        const falseNumber = document.createElement('p');
        falseNumber.style.color = 'red';
        const falseNumberText = document.createTextNode(
            'Vul een correct tel. nummer in',
        );
        falseNumber.appendChild(falseNumberText);
        document.querySelector('#form').appendChild(falseNumber);
        console.warn('fout');
    } else {
        if (
            document
                .querySelector('#form')
                .contains(document.querySelector('p'))
        ) {
            document
                .querySelector('#form')
                .removeChild(document.querySelector('p'));
        }

        console.log('yup');
    }
});
// /[^a-z][^A-Z](^06\-[\d{10}]|^06[\s{1}][\d{10}][\s{1}]|06[\d{10}]|^\+31[\s{2}]6[\d{12}])/;
