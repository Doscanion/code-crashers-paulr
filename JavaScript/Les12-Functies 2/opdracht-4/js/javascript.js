const numbers = [];
for (let i = 0; i < 30; i++) {
    numbers[i] = Math.floor(Math.random() * 100 + 1);
}

console.log(numbers);

const isEven = (number) => (number % 2 != 1 ? true : false);
const evenNumbers = numbers.filter((number) => isEven(number));
console.log(evenNumbers);

const sumEvenNumbers = evenNumbers.reduce(
    (value, arrayValue) => value + arrayValue,
    0,
);
console.log(sumEvenNumbers);
const sumNumbers = numbers.reduce((value, arrayValue) => value + arrayValue, 0);
console.log(sumNumbers);
