const numbers = [];
for (let i = 0; i < 30; i++) {
    numbers[i] = Math.floor(Math.random() * 100 + 1);
}

console.log(numbers);

const isEven = (number) => (number % 2 == 0 ? true : false);
const evenNumbers = numbers.filter((number) => isEven(number));
console.log(evenNumbers);

const sumEvenNumbers = evenNumbers.reduce(
    (value, arrayValue) => value + arrayValue,
    0,
);
console.log(sumEvenNumbers);
const sumNumbers = numbers.reduce((value, arrayValue) => value + arrayValue, 0);
console.log(sumNumbers);

const isDivisibleby = (number1) =>
    function (number2) {
        return number2 % number1 == 0 ? true : false;
    };

const isDivisiblebyThree = isDivisibleby(3);
const isDivisiblebyFour = isDivisibleby(4);
const isDivisiblebyFive = isDivisibleby(5);

const canDividedByThree = numbers.filter(isDivisiblebyThree);
console.log(canDividedByThree);

const canDividedByFour = numbers.filter(isDivisiblebyFour);
console.log(canDividedByFour);

const canDividedByFive = numbers.filter(isDivisiblebyFive);
console.log(canDividedByFive);

const divideByThree = canDividedByThree.map((number) => number / 3);
console.log(divideByThree);

const divideByFour = canDividedByFour.map((number) => number / 4);
console.log(divideByFour);

const divideByFive = canDividedByFive.map((number) => number / 5);
console.log(divideByFive);

const highestOfThree = divideByThree.reduce(
    (value, arrayvalue) => (arrayvalue > value ? (value = arrayvalue) : value),
    0,
);
document.body.innerHTML += highestOfThree + ' ';

const highestOfFour = divideByFour.reduce(
    (value, arrayvalue) => (arrayvalue > value ? (value = arrayvalue) : value),
    0,
);
document.body.innerHTML += highestOfFour + ' ';

const highestOfFive = divideByFive.reduce(
    (value, arrayvalue) => (arrayvalue > value ? (value = arrayvalue) : value),
    0,
);
document.body.innerHTML += highestOfFive + ' ';
