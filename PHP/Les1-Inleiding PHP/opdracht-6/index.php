<?php
$string = 'The club isn\'t the best place to find a lover, so the bar is where I go. Me and my friends at the table doing shots, drinking fast and then we talk slow.'
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p><?= strpos($string, 'o') ?></p>
    <p><?= strrpos($string, 't') ?></p>
    <p><?= strrev($string) ?></p>
    <p><?= str_shuffle($string) ?></p>
</body>

</html>