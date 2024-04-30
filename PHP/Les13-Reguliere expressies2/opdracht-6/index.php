<?php
$iban = 'NL55 RABO 0123 4567 89';

$pw = 'Testvoorww1.';

$isbn = 'ISBN 9789-02-453515-2';
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regex-2 4</title>
</head>

<body>
    <?php
    // (?: ... ) is NON-capturing
    if (preg_match('/[A-Z]{2}\d{2}\s[A-Z]{4}\s(?:\d{4}\s){2}\d{2}/', $iban)) {
        echo 'iban valid';
    } else {
        echo 'iban invalid';
    }
    echo '<br>';
    // (?=.* ...) Checkt eerst of dat er niks of meer is over heel de string en dan zoekt de gewenste tekst op de ...
    if (preg_match('/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&\^%!\.])\S{8,32}/', $pw)) {
        echo 'pw valid';
    } else {
        echo 'pw invalid';
    }
    echo '<br>';
    if (preg_match('/ISBN\s\d{3}-?\d-?\d{2}-\d{6}-?\d/', $isbn)) {
        echo 'pw valid';
    } else {
        echo 'pw invalid';
    }
    ?>
</body>

</html>