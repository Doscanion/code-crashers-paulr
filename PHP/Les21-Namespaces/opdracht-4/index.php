<?php
require_once './classes/CodeCrashers/Marco/Calculator.php';
require_once './classes/CodeCrashers/Patrick/Calculator.php';

use CodeCrashers\Marco\Calculator as MarcoCalculator;
use CodeCrashers\Patrick\Calculator as PatrickCalculator;

$array = [10, 7, 13, 6];
$marcoHighest = MarcoCalculator::findHighest($array);
$patrickDivide = PatrickCalculator::divide($marcoHighest, 3);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namespace 4</title>
</head>

<body>
    <?= $patrickDivide ?>
</body>

</html>