<?php
require_once 'classes/Product.php';

$product1 = new Product();

$product1->setName('Golden Power');
$product1->setPrice(0.39);

$quantity = 12;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Objecten 2</title>
</head>

<body>
    <?= 'Het product ' . $product1->getName() . ' kost ' . $product1->getPrice() . ' per stuk' ?>
    <?= 'Het product is ' . $quantity . ' keer gekocht en de totale kost voor ' . $product1->getName() . ' is ' . $product1->calculateCosts($quantity) ?>
</body>

</html>