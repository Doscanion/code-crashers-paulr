<?php
function ExceptionHandler(Exception $e) {
    echo '<div class="e-handler">';
    echo '<h1>Something went wrong</h1>';
    echo '<p>Message: ' . $e->getMessage() . '</p>';
    echo '<p>File: ' . $e->getFile() . '</p>';
    echo '<p>Line: ' . $e->getLine() . '</p>';
    echo '</div>';
}

set_exception_handler('ExceptionHandler');

$y = random_int(1, 100);
$x = random_int(1, 100);
$z = random_int(1, 100);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exceptions 4</title>
    <style>
        .e-handler {
            background-color: lightpink;
            color: darkred;
            padding: 15px;
            border: 1px solid darkred;
        }
    </style>
</head>

<body>
    <?php
    if ($y % 3 > 0) {
        throw new Exception("$y is not divisible by 3");
    }

    try {
        if ($x % 2 > 0) {
            throw new Exception("$y is not divisible by 2");
        }
    } catch (Exception $e) {
        echo '<div class="e-handler">';
        echo '<h1>Something went wrong in the try</h1>';
        echo '<p>Message: ' . $e->getMessage() . '</p>';
        echo '<p>File: ' . $e->getFile() . '</p>';
        echo '<p>Line: ' . $e->getLine() . '</p>';
        echo '</div>';
    }


    if ($z % 4 > 0) {
        throw new Exception("$y is not divisible by 4");
    }
    ?>
</body>