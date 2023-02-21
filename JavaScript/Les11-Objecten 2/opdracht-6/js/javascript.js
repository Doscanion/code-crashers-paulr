function Game(name, releaseDate, platform, developer) {
    Object.defineProperty(this, 'name', {
        get: function () {
            return '<strong>' + name + '</strong>';
        },
        set: function (newName) {
            if (typeof newName == 'string') {
                name = newName;
            } else {
                throw new TypeError('Must have a string');
            }
        },
        configurable: true,
        enumerable: true,
    });

    Object.defineProperty(this, 'releaseDate', {
        get: function () {
            return '<strong>' + releaseDate + '</strong>';
        },
        set: function (newReleaseDate) {
            if (typeof newReleaseDate == 'number') {
                releaseDate = newReleaseDate;
            } else {
                throw new TypeError('Must have a integer with 4 numbers');
            }
        },
        configurable: true,
        enumerable: true,
    });
    Object.defineProperty(this, 'platform', {
        get: function () {
            return '<em>' + platform + '</em>';
        },
        set: function (newPlatform) {
            if (typeof newPlatform == 'string') {
                platform = newPlatform;
            } else {
                throw new TypeError('Must have a string');
            }
        },
        configurable: true,
        enumerable: true,
    });
    Object.defineProperty(this, 'developer', {
        get: function () {
            return '<em>' + developer + '</em>';
        },
        set: function (newDeveloper) {
            if (typeof newDeveloper == 'string') {
                developer = newDeveloper;
            } else {
                throw new TypeError('Must have a string');
            }
        },
        configurable: true,
        enumerable: true,
    });
}

let skyrim = new Game(
    'The Elder Scrolls V: Skyrim',
    2011,
    'Microsoft Windows',
    'Bethesda',
);
let ra2 = new Game('Red Alert 2', 2000, 'Microsoft Windows', 'Westwood');
let silver = new Game('Pokémon Silver', 2001, 'Game Boy Color', 'Game Freak');
console.log(skyrim);
console.log(ra2);
// console.log(silver.name);

console.log(Object.values(ra2));
