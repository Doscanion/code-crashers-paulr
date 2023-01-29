const fruits = ['🍎', '🍐', '🍓', '🍌', '🍒', '🍋', '🍉', '🍍', '🍑', '🍇'];

delete fruits[6];
delete fruits[4];
delete fruits[2];

console.log(fruits);

let filterFruits = fruits.filter((n) => n);

console.log(filterFruits);

let joinFruits = filterFruits.join('<br>');
console.log(joinFruits);

document.body.innerHTML = `${joinFruits}`;
