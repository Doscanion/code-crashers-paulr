let userName = prompt('What is your name', 'Name');
const regUserName = /[A-Z]/.test(userName[0]);
if (regUserName === true) {
    console.log('Deze string begint met een gekapitaliseerde medeklinker');
} else {
    console.log('Deze string begint NIET met een gekapitaliseerde medeklinker');
}
