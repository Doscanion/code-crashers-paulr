const games = [
    {
        title: `Animal Crossing: New Horizons`,
        description: `Escape to a deserted island and create your own paradise as you explore, create, and customize in the Animal Crossing: New Horizons game. Your island getaway has a wealth of natural resources that can be used to craft everything from tools to creature comforts. You can hunt down insects at the crack of dawn, decorate your paradise throughout the day, or enjoy sunset on the beach while fishing in the ocean.`,
    },
    {
        title: `Hyrule Warriors: Age of Calamity`,
        description: `Join the struggle that brought Hyrule to its knees. Learn more about Zelda, the four Champions, the King of Hyrule and more through dramatic cutscenes as they try to save the kingdom from Calamity. The Hyrule Warriors: Age of Calamity game is the only way to see firsthand what happened 100 years ago.`,
    },
];

function getGames() {
    setTimeout(() => {
        let output = '<dl>';
        games.forEach((game, index) => {
            output += '<dt>' + game.title + '</dt>';
            output += '<dd>' + game.description + '</dd>';
        });
        output += '</dl>';
        document.querySelector('section').innerHTML = output;
    }, 1000);
}

function addGames(newGames) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(newGames)) {
                games.push(...newGames);
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}

// /* Test met valide input */
// addGames([
//     {
//         title: `Legend of Mana`,
//         description: `Set off on a journey to find the mystical Mana Tree seen in a dream, before discovering... the world map is empty! During your travels, you’ll acquire special artifacts; place these wherever you’d like on the map to bring towns and dungeons to life and advance the story. Meet a colorful cast of characters, square off against fearsome monsters, and complete quests in the vast world of Fa’Diel.`,
//     },
//     {
//         title: `Project Triangle Strategy`,
//         description: `Command a group of warriors as Serenoa, heir of House Wolffort, in a tangled plot where your decisions make all the difference. Key choices you make will bolster one of three convictions—Utility, Morality, Liberty—which together make up Serenoa’s world view and influence how the story will unfold. When faced with truly momentous decisions, multiple characters will weigh in by casting their votes on the Scales of Conviction.`,
//     },
// ]).then(
//     (result) => {
//         console.log(result);
//         getGames();
//     },
//     (error) => {
//         console.error(error);
//     },
// );

// /* Test met invalide input. */
// addGames('Dit is duidelijk geen array').then(
//     (result) => {
//         console.log(result);
//         getGames();
//     },
//     (error) => {
//         console.error(error);
//     },
// );

async function htmlGames(arraytext) {
    await addGames(arraytext);
    getGames();
}

htmlGames([
    {
        title: `Legend of Mana`,
        description: `Set off on a journey to find the mystical Mana Tree seen in a dream, before discovering... the world map is empty! During your travels, you’ll acquire special artifacts; place these wherever you’d like on the map to bring towns and dungeons to life and advance the story. Meet a colorful cast of characters, square off against fearsome monsters, and complete quests in the vast world of Fa’Diel.`,
    },
    {
        title: `Project Triangle Strategy`,
        description: `Command a group of warriors as Serenoa, heir of House Wolffort, in a tangled plot where your decisions make all the difference. Key choices you make will bolster one of three convictions—Utility, Morality, Liberty—which together make up Serenoa’s world view and influence how the story will unfold. When faced with truly momentous decisions, multiple characters will weigh in by casting their votes on the Scales of Conviction.`,
    },
]).then(
    () => {
        console.log('oke');
        getGames();
    },
    () => {
        console.error('Dit is geen geldige input.');
    },
);

htmlGames('Dit is duidelijk geen array').then(
    () => {
        console.log('oke');
        getGames();
    },
    () => {
        console.error('Dit is geen geldige input.');
    },
);
