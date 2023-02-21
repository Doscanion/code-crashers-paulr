let audi = {
    _naam: 'Audi A5 2.0',
    get naam() {
        return this._naam;
    },
    _bouwjaar: 2009,
    get bouwjaar() {
        return this._bouwjaar;
    },
    _kmstand: 165000,
    get kmstand() {
        return this._kmstand;
    },
    _energielabel: 'A',
    get energielabel() {
        return this._bouwjaar;
    },
    _brandstof: 'benzine',
    get brandstof() {
        return this._brandstof;
    },
    _prijs: 12750.0,
    get prijs() {
        return '€' + this._prijs.toFixed(2);
    },
    _garantie: false,
    get garantie() {
        return this._garantie ? 'Ja' : 'Nee';
    },
    get opties() {
        return this._opties.join(', ');
    },
};

audi._opties = [
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
                this.motor +
                '.',
        );
    }.bind(audi),
    function tanken() {
        console.log(
            'Deze ' +
                this.naam +
                ' verbruikt gemiddeld ' +
                this.motor +
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
            console.log(key[0]);
            if (key != 'array' && key[0] != '_') {
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
