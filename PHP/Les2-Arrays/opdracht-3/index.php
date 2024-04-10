<?php
$minNumber = 0;
$maxNumber = 1000;
$randomNumbers = array();

for ($i = 0; $i < 10; $i++) {
    $randomNumbers[] = rand($minNumber, $maxNumber);
}

arsort($randomNumbers);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ol>
        <?php foreach ($randomNumbers as $number) { ?>
            <li>
                <?php echo $number; ?>
            </li>
        <?php } ?>
    </ol>
</body>

</html>