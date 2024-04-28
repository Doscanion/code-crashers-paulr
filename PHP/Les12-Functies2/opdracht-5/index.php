<?php
$numbArray = [2.474, 3.128, 7.1266, 8.3751];
$animalArray = ['dog', 'horse', 'cat', 'guinea pig', 'ferret', 'rabbit'];
$numbDivArray = [-3, 0, 2, 6, 12, 8, 4, 7, -5, 9];
$numbReduceArray = [5, 8, 12, 20];

function decimal($numb) {
    return number_format($numb, 2);
}

function capString($string) {
    return strtoupper($string);
}

function numbDivided($numb) {
    return $numb % 3 === 0;
}

function numbReduce($total, $numb) {
    $total += $numb;
    return $total;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functies-2 5</title>
</head>

<body>
    <?php
    print_r(array_map('decimal', $numbArray));
    print_r(array_map('capString', $animalArray));
    print_r(array_filter($numbDivArray, 'numbDivided'));
    print_r(array_reduce($numbReduceArray, 'numbReduce'));

    ?>
</body>

</html>