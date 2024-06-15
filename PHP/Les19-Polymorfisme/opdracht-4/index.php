<?php
require_once './classes/Cell.php';
require_once './classes/Row.php';
require_once './classes/Table.php';
require_once './classes/StrongCell.php';
require_once './classes/CursiveCell.php';
require_once './classes/DeleteCell.php';
require_once './classes/InsertCell.php';

// 5.3
$nw = new StrongCell('Noord-West');
$n = new Cell('Noord-West');
$no = new StrongCell('Noord-Oost');
$w = new Cell('West');
$c = new Cell('Centrum');
$o = new Cell('Oost');
$zw = new StrongCell('Zuid-West');
$z = new Cell('Zuid');
$zo = new StrongCell('Zuid-Oost');

$kompasrown = new Row();
$kompasrown->append($nw);
$kompasrown->append($n);
$kompasrown->append($no);

$kompasrowc = new Row();
$kompasrowc->append($w);
$kompasrowc->append($c);
$kompasrowc->append($o);

$kompasrowz = new Row();
$kompasrowz->append($zw);
$kompasrowz->append($z);
$kompasrowz->append($zw);

$kompas = new Table();
$kompas->append($kompasrown);
$kompas->append($kompasrowc);
$kompas->append($kompasrowz);

//5.4
$mario = new InsertCell('Mario');
$luigi = new Cell('Luigi');
$peach = new Cell('Peach');
$bowser = new CursiveCell('Bowser');

$donkey = new DeleteCell('Donkey');
$diddy = new Cell('Diddy');
$dixie = new InsertCell('Dixie');
$cranky = new Cell('Cranky');

$link = new Cell('Link');
$zelda = new DeleteCell('Zelda');
$midna = new StrongCell('Midna');
$ganondorf = new Cell('Ganondorf');

$marioRow = new Row();
$marioRow->append($mario);
$marioRow->append($luigi);
$marioRow->append($peach);
$marioRow->append($bowser);

$donkeyRow = new Row();
$donkeyRow->append($donkey);
$donkeyRow->append($diddy);
$donkeyRow->append($dixie);
$donkeyRow->append($cranky);

$linkRow = new Row();
$linkRow->append($link);
$linkRow->append($zelda);
$linkRow->append($midna);
$linkRow->append($ganondorf);

$nintendo =  new Table();
$nintendo->append($marioRow);
$nintendo->append($donkeyRow);
$nintendo->append($linkRow);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Overerving 5</title>
</head>

<body>
    <?php
    $kompas->draw();
    $nintendo->draw();
    ?>
</body>

</html>