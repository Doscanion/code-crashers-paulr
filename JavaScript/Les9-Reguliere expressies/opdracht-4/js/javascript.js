document.querySelector('button').addEventListener('click', function () {
    const telNumber = document.querySelector('#tel-number').value;
    console.log(telNumber);
    const patterntel =
        /^06\s{1}\d{8}$|^06\-\d{8}$|^06\d{8}$|^\+31\s{1}6\s{1}\d{8}$/;
    console.log(patterntel);
    if (patterntel.test(telNumber) !== true) {
        if (
            !document
                .querySelector('#form')
                .contains(document.querySelector('#number-warn'))
        ) {
            const falseNumber = document.createElement('p');
            falseNumber.setAttribute('id', 'number-warn');
            falseNumber.style.color = 'red';
            const falseNumberText = document.createTextNode(
                'Vul een correct tel. nummer in',
            );
            falseNumber.appendChild(falseNumberText);
            document.querySelector('#form').appendChild(falseNumber);
        }
        console.warn('fout');
    } else {
        if (
            document
                .querySelector('#form')
                .contains(document.querySelector('#number-warn'))
        ) {
            document
                .querySelector('#form')
                .removeChild(document.querySelector('#number-warn'));
        }
        console.log('yup');
    }

    const dateValue = document.querySelector('#date').value;
    const patternDate = /\d{2}\-\d{2}$|\d{1,2}\s[a-z]{3,}/; 
    if (patternDate.test(dateValue) !== true) {
        if (
            !document
                .querySelector('#form')
                .contains(document.querySelector('#date-warn'))
        ) {
            const falseDate = document.createElement('p');
            falseDate.setAttribute('id', 'date-warn');
            falseDate.style.color = 'red';
            const falseDateText = document.createTextNode(
                'Vul een correct datum in',
            );
            falseDate.appendChild(falseDateText);
            document.querySelector('#form').appendChild(falseDate);
        }
        console.warn('fout date');
    } else {
        if (
            document
                .querySelector('#form')
                .contains(document.querySelector('#date-warn'))
        ) {
            document
                .querySelector('#form')
                .removeChild(document.querySelector('#date-warn'));
        }
    }
    //|[A-Z]?[a-z]+\s{1}\d[A-Z]?[a-z]$|[A-Z]?[a-z]+\s{1}\d\-[A-Z]?[a-z]$
    const houseValue = document.querySelector('#street').value;
    const patternHouse =
        /[A-Z]?[a-z]+\s{1}\d{1,2}\-?[A-Z]?[a-z]?$/;
    if (patternHouse.test(houseValue) !== true) {
        if (
            !document
                .querySelector('#form')
                .contains(document.querySelector('#house-warn'))
        ) {
            const falseHouse = document.createElement('p');
            falseHouse.setAttribute('id', 'house-warn');
            falseHouse.style.color = 'red';
            const falseStreetText = document.createTextNode(
                'Vul een correct straat in',
            );
            falseHouse.appendChild(falseStreetText);
            document.querySelector('#form').appendChild(falseHouse);
        }
        console.warn('fout street');
    } else {
        if (
            document
                .querySelector('#form')
                .contains(document.querySelector('#house-warn'))
        ) {
            document
                .querySelector('#form')
                .removeChild(document.querySelector('#house-warn'));
        }
    }
    const pageValue = document.querySelector('#page').value;
    const patternLink =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    if (patternLink.test(pageValue) !== true) {
        if (
            !document
                .querySelector('#form')
                .contains(document.querySelector('#page-warn'))
        ) {
            const falsePage = document.createElement('p');
            falsePage.setAttribute('id', 'page-warn');
            falsePage.style.color = 'red';
            const falsePageText = document.createTextNode(
                'Vul een correct webpage in',
            );
            falsePage.appendChild(falsePageText);
            document.querySelector('#form').appendChild(falsePage);
        }
        console.warn('fout web');
    } else {
        if (
            document
                .querySelector('#form')
                .contains(document.querySelector('#page-warn'))
        ) {
            document
                .querySelector('#form')
                .removeChild(document.querySelector('#page-warn'));
        }
    }
    const passwordValue = document.querySelector('#password').value;
    const patternPassword =
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(?:\!+|\@+|\#+\$+|\%+|\&+|\*+))/;
    if (patternPassword.test(passwordValue) !== true) {
        if (
            !document
                .querySelector('#form')
                .contains(document.querySelector('#pass-warn'))
        ) {
            const falsePassword = document.createElement('p');
            falsePassword.setAttribute('id', 'pass-warn');
            falsePassword.style.color = 'red';
            const falsePasswordText = document.createTextNode(
                'Vul een correct password in',
            );
            falsePassword.appendChild(falsePasswordText);
            document.querySelector('#form').appendChild(falsePassword);
        }
        console.warn('fout password');
    } else {
        if (
            document
                .querySelector('#form')
                .contains(document.querySelector('#pass-warn'))
        ) {
            document
                .querySelector('#form')
                .removeChild(document.querySelector('#pass-warn'));
        }
    }
});
// /[^a-z][^A-Z](^06\-[\d{10}]|^06[\s{1}][\d{10}][\s{1}]|06[\d{10}]|^\+31[\s{2}]6[\d{12}])/;
