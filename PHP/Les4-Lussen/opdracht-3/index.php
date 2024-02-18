<?php
$numbers = array();
for ($i = 0; $i < 10; $i++) {
    $randnumb = rand(1, 20);
    $numbers[$i] = $randnumb;
    if ($randnumb === 13) {
        break;
    }
}

sort($numbers);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <pre><?= print_r($numbers); ?></pre>
</body>

</html>