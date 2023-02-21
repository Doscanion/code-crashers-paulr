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

let table = document.querySelector('table');

const isObject = (val) => {
    if (val === null || Array.isArray(val)) {
        return false;
    }

    return typeof val === 'object';
};

const nestedObject = (obj) => {
    for (const key in obj) {
        if (isObject(obj[key])) {
            nestedObject(obj[key]);
        } else {
            console.log(`${key} => ${obj[key]}`);
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
};

nestedObject(audi);
