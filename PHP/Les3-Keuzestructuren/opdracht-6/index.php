<?php
$temperature = rand(-10, 40);

$temperatureColors = [
    [-10, "rgb(0, 0, 255)"],
    [-5, "rgb(30, 60, 225)"],
    [0, "rgb(60, 120, 195)"],
    [10, "rgb(90, 180, 165)"],
    [15, "rgb(120, 240, 135)"],
    [20, "rgb(150, 255, 105)"],
    [25, "rgb(180, 210, 75)"],
    [30, "rgb(210, 165, 45)"],
    [35, "rgb(240, 120, 15)"],
    [40, "rgb(255, 165, 0)"]
];

foreach ($temperatureColors as $tColor) {
    if ($temperature <= $tColor[0]) {
        $color = $tColor[1];
        break;
    }
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body style="background-color: <?= $color ?>;">
    <div>
        <h1>Het is nu <?= $temperature ?> °.</h1>
        <?php
        if ($temperature >= 25) {
        ?>
            <img src="./sun.jpg" alt="Star">
        <?php
        } else if ($temperature <= 0) {
        ?>
            <img src="./cold.png" alt="Cold">
        <?php
        }
        ?>
    </div>
</body>

</html>