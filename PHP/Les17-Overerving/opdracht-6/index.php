<?php
require_once './classes/Pokemon.php';
require_once './classes/Mareep.php';
require_once './classes/Electrike.php';
require_once './classes/Pikachu.php';

$mareep5 = new Mareep('./mareep.png', 5, 'Mareep');
$mareep15 = new Mareep('./mareep.png', 15, 'Mareep');
$mareep30 = new Mareep('./mareep.png', 30, 'Mareep');

$electrike30 = new Electrike('./electrike.png', 30, 'Electrike');
$electrike12 = new Electrike('./electrike.png', 12, 'Electrike');

$pikachu12 = new Pikachu('./pikachu.png', 12, 'Pikachu');
$pikachu30 = new Pikachu('./pikachu.png', 30, 'Pikachu');
$pikachu42 = new Pikachu('./pikachu.png', 42, 'Pikachu');

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Objecten 4</title>
</head>

<body>
    <?php
    $mareep5->mareepImage();
    $mareep5->tackle();

    $mareep15->mareepImage();
    $mareep15->tackle();

    $mareep30->mareepImage();
    $mareep30->tackle();
    $mareep30->groupAttack();

    $electrike30->image();
    $electrike30->tackle();

    $electrike12->image();
    $electrike12->tackle();
    $electrike12->groupAttack();

    $pikachu12->image();
    $pikachu12->tackle();

    $pikachu30->image();
    $pikachu30->tackle();

    $pikachu42->image();
    $pikachu42->tackle();
    $pikachu42->groupAttack();

    ?>
</body>

</html>