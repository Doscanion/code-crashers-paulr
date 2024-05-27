<?php
require_once './classes/Mareep.php';

$mareep5 = new Mareep('./mareep.png', 5);
$mareep15 = new Mareep('./mareep.png', 15);
$mareep30 = new Mareep('./mareep.png', 30);
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
    ?>
</body>

</html>