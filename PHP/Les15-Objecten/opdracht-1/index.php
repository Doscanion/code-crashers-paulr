<?php
require_once 'classes/Person.php';

$person1 = new Person();
$person2 = new Person();

$person1->name = 'Paul Rijsdijk';
$person1->age = 31;

$person2->name = 'Jan Steden';
$person2->age = 25;
$person2->school = 'Vergelt';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Objecten 1</title>
</head>

<body>
    <?= $person1->name . ' is ' . $person1->age . ' oud en volgt en opleiding bij ' . $person1->school ?>
    <?= $person2->name . ' is ' . $person2->age . ' oud en volgt en opleiding bij ' . $person2->school ?>
</body>

</html>