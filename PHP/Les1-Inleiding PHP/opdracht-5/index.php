<?php
	$r = rand(1, 255);
    $r2 = rand(1, 20) * 2;
    $r3 = rand(15, 45) / 10 * 2 ;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Les 1 - 5</title>
</head>
<body>
    <p><?= $r ?></p>
    <p><?= $r2 ?></p>
    <p><?= $r3 ?></p>
</body>
</html>