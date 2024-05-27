<?php
require_once 'classes/Dice.php';

$dice6 = new Dice();
$dice20 = new Dice(20);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Objecten 3</title>
</head>

<body>
    <?= 'Dice 6 rolls ' . $dice6->roll(); ?>
    <?= 'Dice 20 rolls ' . $dice20->roll(); ?>
</body>

</html>