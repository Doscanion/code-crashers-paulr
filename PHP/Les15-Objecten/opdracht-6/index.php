<?php
// echo '<pre>';
// print_r(get_declared_classes());
// echo '</pre>';
require_once './classes/Dice.php';
require_once './classes/Mareep.php';
require_once './classes/Person.php';
require_once './classes/Product.php';
require_once './classes/Validator.php';

$product2 =  new Product;
$product2->setName('Blik erwtensoep');
$product2->setPrice(1.99);


?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Objecten 6</title>
</head>

<body>
    <?php

    echo '<pre>';
    print_r(array_slice(get_declared_classes(), 171));
    echo '</pre>';

    echo $product2->getName() .  ' ' . $product2->getPrice();
    echo '<br>';
    if (method_exists('Product', 'calculateCosts')) {
        echo 'De method is aanwezig';
    } else {
        echo 'De method is niet aanwezig';
    }
    echo '<br>';

    if (property_exists('Product', 'image')) {
        echo 'De property is aanwezig';
    } else {
        echo 'De property is niet aanwezig';
    }
    ?>
</body>

</html>