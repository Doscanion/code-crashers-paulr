const fruits = ['🍎', '', '🍓', '', '🍒', '🍋', '', '🍍', '🍑', '🍇'];

console.log(fruits);

let filterFruits = fruits.filter((n) => n);

console.log(filterFruits);

let joinFruits = filterFruits.join('<br>');
console.log(joinFruits);

document.body.innerHTML = `${joinFruits}`;
