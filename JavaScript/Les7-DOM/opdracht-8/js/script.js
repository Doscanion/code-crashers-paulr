const colors = [
    'rgb(153,51,51)',
    'rgb(153,128,51)',
    'rgb(102,153,51)',
    'rgb(51,153,77)',
    'rgb(51,153,153)',
    'rgb(51,77,153)',
    'rgb(102,51,153)',
    'rgb(153,51,128)',
    'hsl(270, 50%, 15%)',
];

document.querySelector('button').addEventListener('click', function () {
    let kop = document.querySelectorAll('.color-me');
    console.log(kop);
    for (let i = 0; i < kop.length; i++) {
        let htag = kop[i];
        htag.style.color = colors[i];
    }
    document.body.style.backgroundColor = colors[colors.length - 1];
});
