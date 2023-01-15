var dog = {
    name: 'Witje',
    age: 6,
    breed: 'labrador',
    hairColor: 'white',
};

dog.age += 1;
dog.houseTrained = false;

console.log(dog);

if (dog.houseTrained == true) {
    document.body.innerHTML = `<p>The dogs name is ${dog.name}. ${dog.name} is ${dog.age} old, is a ${dog.breed}, has the coat color ${dog.hairColor} and is trained.</p>`;
} else {
    document.body.innerHTML = `<p>The dogs name is ${dog.name}. ${dog.name} is ${dog.age} old, is a ${dog.breed} and  has the coat color ${dog.hairColor}.</p>`;
}
