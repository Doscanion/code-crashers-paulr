var dog = {
    name: 'Witje',
    age: 6,
    breed: 'labrador',
    hairColor: 'white',
    family: {
        mother: 'Koekie',
        father: 'Boefie',
    },
    sleep: function sleep() {
        alert('the dog is a sleep.');
    },
    eat: function () {
        alert('The dog hates chocolate.');
    },
    bark: function () {
        alert('The dog is barking.');
    },
    givePaw: function () {
        alert("The dog doesn't know what you want.");
    },
};

dog.age += 1;
dog.houseTrained = true;

if (dog.houseTrained == true) {
    dog.sleep();
    document.body.innerHTML = `<p>The dogs name is ${dog.name}. ${dog.name} is ${dog.age} old, is a ${dog.breed}, has the coat color ${dog.hairColor} and is trained.</p> 
    <p>The mother is ${dog.family.mother} and the father is ${dog.family.father}</p>`;
    dog.eat();
} else {
    dog.bark();
    document.body.innerHTML = `<p>The dogs name is ${dog.name}. ${dog.name} is ${dog.age} old, is a ${dog.breed} and  has the coat color ${dog.hairColor}.</p>
    <p>The mother is ${dog.family.mother} and the father is ${dog.family.father}</p>`;
    dog.givePaw();
}
