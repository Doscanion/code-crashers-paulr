let audi = {
    naam: 'Audi A5 2.0',
    bouwjaar: 2009,
    kmstand: 165000,
    energielabel: 'A',
    brandstof: 'benzine',
    prijs: 12750.0,
    garantie: false,
};

audi.opties = [
    'Cruise Control',
    'Boordcomputer',
    'Navigatiesysteem',
    'Airconditioning',
    'ABS',
];

audi.motor = {
    verbruik: '15,62 km/l',
    motorinhoud: '1.984 cc',
    topsnelheid: '250 km/h',
    vermogen: '211 pk',
};

audi.array = [
    function buy() {
        console.log(this);

        console.log(
            'Voor slechts ' +
                this.prijs +
                ' kan deze mooie ' +
                this.naam +
                ' uit ' +
                this.bouwjaar +
                ' al van u zijn',
        );
    }.bind(audi),
    function acceleren() {
        console.log(
            'Deze ' +
                this.naam +
                ' is binnen een paar seconden op de topsnelheid van ' +
                this.motor.topsnelheid +
                '.',
        );
    }.bind(audi),
    function tanken() {
        console.log(
            'Deze ' +
                this.naam +
                ' verbruikt gemiddeld ' +
                this.motor.verbruik +
                ' waardoor je niet heel vaak benzine hoeft te tanken.',
        );
    }.bind(audi),
];
audi.array[0]();
audi.array[1]();
audi.array[2]();
let table = document.querySelector('table');

const isObject = (val) => {
    console.log(val);
    if (val === null || Array.isArray(val) || val === undefined) {
        return false;
    }

    return typeof val === 'object';
};

const nestedObject = (obj) => {
    for (const key in obj) {
        if (isObject(obj[key])) {
            nestedObject(obj[key]);
        } else {
            if (key != 'array') {
                console.log(key);
                const row = document.createElement('tr');
                const cellKey = document.createElement('td');
                const cellName = document.createElement('td');
                keyCap = key[0].toUpperCase() + key.slice(1);
                const cellKeyText = document.createTextNode(keyCap);
                const cellNameText = document.createTextNode(obj[key]);
                cellKey.appendChild(cellKeyText);
                cellName.appendChild(cellNameText);
                row.appendChild(cellKey);
                row.appendChild(cellName);
                table.appendChild(row);
            }
        }
    }
};

nestedObject(audi);
