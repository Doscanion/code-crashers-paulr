function Game(name, releaseDate, platform, developer) {
    let buyName = name
    console.log(name)
    Object.defineProperty(this, 'name', {
        get: function () {
            var strong = document.createElement('STRONG'); 
            strong.innerHTML = name;
            return name = strong;
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
            var strong = document.createElement('STRONG');
            strong.innerHTML = releaseDate;
            return releaseDate = strong;
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
            var em = document.createElement('em'); 
            em.innerHTML = platform;
            return platform = em;
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
            var em = document.createElement('em'); 
            em.innerHTML = developer;
            return  developer = em;
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

    Object.defineProperty(this, 'buy', {
        value: function buy() {
            document.body.innerHTML += `You have bought ${buyName}.`
            console.log(this);
        },
        configurable: true,
        enumerable: true,
    });

    this.name = name;
    this.releaseDate = releaseDate;
    this.platform = platform;
    this.developer = developer;
}

// let skyrim = new Game(
//     'The Elder Scrolls V: Skyrim',
//     2011,
//     'Microsoft Windows',
//     'Bethesda',
// );
let ra2 = new Game('Red Alert 2', 2000, 'Microsoft Windows', 'Westwood');
let silver = new Game('Pokémon Silver', 2001, 'Game Boy Color', 'Game Freak');
console.log(silver);
console.log(ra2);
// console.log(silver.name);
let ra2Array = Object.values(ra2)
let silverArray = Object.values(silver)
console.log(silverArray);
console.log(ra2Array);

silver.buy()



function gameList(game) {
    let ul = document.createElement('ul');

    for (let i = 0; i < game.length - 1; i++) {
        let li = document.createElement('li');
        li.appendChild(game[i]);
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

gameList(ra2Array)
gameList(silverArray)




// ------>test zooi
// function CustomObject(value) {
//     /**
//      * CustomObject constructor function.
//      * 
//      * @param {any} value - The initial value for the object.
//      */
//     this.value = value;

//     // Define a property with Object.defineProperty()
//     Object.defineProperty(this, 'property', {
//         get: function() {
//             return this.value;
//         },
//         set: function(newValue) {
//             // Add an if statement to validate the new value
//             if (typeof newValue === 'number') {
//                 this.value = newValue;
//             } else {
//                 console.log('Invalid value. Please provide a number.');
//             }
//         }
//     });
// }