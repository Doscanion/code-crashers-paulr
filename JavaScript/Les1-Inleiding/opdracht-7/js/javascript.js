let inkoopprijs = 3.0;
let winstmarge = 2.5;
let totaalbedrag;
{
    let btw = 1.21;
    let hoeveelheid = 5;

    totaalbedrag = (inkoopprijs + winstmarge) * btw * hoeveelheid;
}

alert('€' + totaalbedrag);
