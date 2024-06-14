<?php
$getallen = [];



for ($i = 0; $i < 4; $i++) {
    $getallen[$i] = rand(1, 10);
}

$fail = 0;
foreach ($getallen as $value) {
    if ($value < 6) {
        $fail++;
        echo $fail;
        if ($fail > 1) {
            throw new Exception("Te veel onvoldoendes behaald. Doe het schooljaar over");
        }
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exception 1</title>
</head>

<body>

</body>

</html>