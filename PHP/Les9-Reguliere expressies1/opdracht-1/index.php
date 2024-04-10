<?php

function verifyEndMark($string)
{
    return preg_match('/[?!\.]$/', $string);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $falseString = 'Random tekst';
    echo verifyEndMark($falseString) ? '"' . $falseString . '"' . ' eindigt wel met een . of ? of !' : '"' . $falseString . '"' . ' eindigt met geen . of ? of !';
    echo '<br>';
    $trueString = 'Voldoet de tekst aan de eisen?';
    echo verifyEndMark($trueString) ? '"' . $trueString . '"' . ' eindigt wel met een . of ? of !' : '"' . $trueString . '"' . ' eindigt met geen . of ? of !'

    ?>
</body>

</html>