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
        return this._energielabel;
    },
    _brandstof: 'benzine',
    get brandstof() {
        return this._brandstof;
    },
    _prijs: '12750.00',
    get prijs() {
        if (typeof this._prijs == 'integer') {
            console.log('€' + this._prijs.toFixed(2));
            return '€' + this._prijs.toFixed(2);
        } else {
            return '€' + this._prijs;
        }
    },
    _garantie: false,
    get garantie() {
        return this._garantie ? 'Ja' : 'Nee';
    },
    get opties() {
        return this._opties.join(', ');
    },

    set naamSet(naam) {
        if (typeof naam === 'string') {
            this._naam = naam;
        } else {
            throw new TypeError('Waarde is geen string!');
        }
    },
    set bouwjaarSet(bouwjaar) {
        if (bouwjaar >= 2007 && bouwjaar <= 2016) {
            this._bouwjaar = bouwjaar;
        } else {
            throw new TypeError('Moet 2007 tot en met 2016 zijn');
        }
    },
    set kmstandSet(kmstand) {
        if (kmstand % 1 === 0) {
            this._kmstand = kmstand;
        } else {
            throw new TypeError('Moet een geheel getal zijn');
        }
    },
    set energielabelSet(energielabel) {
        if (/[A-G]/.test(energielabel)) {
            this._energielabel = energielabel;
        } else {
            throw new TypeError('Waarde is geen string!');
        }
    },
    set brandstofSet(brandstof) {
        if (brandstof == 'diesel' || brandstof == 'benzine') {
            this._brandstof = brandstof;
        } else {
            throw new TypeError('Moet benzine of diesel zijn');
        }
    },
    set prijsSet(prijs) {
        console.log(prijs);
        if (/\d+(\.\d{2})$/.test(prijs)) {
            this._prijs = prijs;
        } else {
            throw new TypeError('Moet twee getallen achter de komma hebben');
        }
    },
    set garantieSet(garantie) {
        if (garantie == true || garantie == false) {
            this._garantie = garantie;
        } else {
            throw new TypeError('Moet true of false zijn');
        }
    },
    set optiesSet(opties) {},
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

audi.naamSet = audi._naam;
audi.bouwjaarSet = audi._bouwjaar;
audi.kmstandSet = audi._kmstand;
audi.energielabelSet = audi._energielabel;
audi.brandstofSet = audi._brandstof;
audi.prijsSet = audi._prijs;
audi.garantieSet = audi._garantie;
audi.optiesSet = audi._opties;

let table = document.querySelector('table');

const isObject = (val) => {
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
            if (key != 'array' && key[0] != '_' && !/Set/.test(key)) {
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
