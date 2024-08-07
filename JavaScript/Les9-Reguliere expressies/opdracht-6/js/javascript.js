document.querySelector('button').addEventListener('click', function () {
    const telNumber = document.querySelector('#tel-number').value;
    console.log(telNumber);
    const patterntel =
        /^06\s{1}\d{8}$|^06\-\d{8}$|^06\d{8}$|^\+31\s{1}6\s{1}\d{8}$/;
    console.log(patterntel);
    try {
        if (patterntel.test(telNumber) !== true) {
            const falseNumber = document.createElement('p');
            falseNumber.style.color = 'red';
            const falseNumberText = document.createTextNode(
                'Vul een correct tel. nummer in',
            );
            falseNumber.appendChild(falseNumberText);
            document.querySelector('#form').appendChild(falseNumber);
            throw 'Tel. is fout';
        }
    } catch (error) {
        console.error(error);
    }

    const dateValue = document.querySelector('#date').value;
    const patternDate = /\d\d\-\d\d$|\d\-[a-z]{4,}|\d\d\-[a-z]{4,}/;
    try {
        if (patternDate.test(dateValue) !== true) {
            const falseDate = document.createElement('p');
            falseDate.style.color = 'red';
            const falseDateText = document.createTextNode(
                'Vul een correct datum in',
            );
            falseDate.appendChild(falseDateText);
            document.querySelector('#form').appendChild(falseDate);
            throw 'Datum is fout';
        }
    } catch (error) {
        console.error(error);
    }

    const houseValue = document.querySelector('#street').value;
    const patternHouse =
        /[A-Z]{1}[a-z]+\s{1}\d$|[A-Z]{1}[a-z]+\s{1}\d[A-Z]$|[A-Z]{1}[a-z]+\s{1}\d\-[A-Z]$/;
    try {
        if (patternHouse.test(houseValue) !== true) {
            const falseHouse = document.createElement('p');
            falseHouse.style.color = 'red';
            const falseStreetText = document.createTextNode(
                'Vul een correct straat in',
            );
            falseHouse.appendChild(falseStreetText);
            document.querySelector('#form').appendChild(falseHouse);
            console.warn('fout street');
            throw 'Straat is fout';
        }
    } catch (error) {
        console.error(error);
    }

    const pageValue = document.querySelector('#page').value;
    const patternLink =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    try {
        if (patternLink.test(pageValue) !== true) {
            const falsePage = document.createElement('p');
            falsePage.style.color = 'red';
            const falsePageText = document.createTextNode(
                'Vul een correct webpage in',
            );
            falsePage.appendChild(falsePageText);
            document.querySelector('#form').appendChild(falsePage);
            console.warn('fout web');
            throw 'Web is fout';
        }
    } catch (error) {
        console.error(error);
    }

    const passwordValue = document.querySelector('#password').value;
    const patternPassword =
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(?:\!+|\@+|\#+\$+|\%+|\&+|\*+))/;
    try {
        if (patternPassword.test(passwordValue) !== true) {
            const falsePassword = document.createElement('p');
            falsePassword.style.color = 'red';
            const falsePasswordText = document.createTextNode(
                'Vul een correct password in',
            );
            falsePassword.appendChild(falsePasswordText);
            document.querySelector('#form').appendChild(falsePassword);
            console.warn('fout web');
            throw 'Password is fout';
        }
    } catch (error) {
        console.error(error);
    }
});
