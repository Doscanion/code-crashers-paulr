<?php

function truncateString(string $text, int $limit): string{
    $length = strlen($text);
    if ($length > $limit) {
        return substr($text, 0, $limit) . "...";
    } else{
        return $text;
    }
}

function l33tifyString(string $text): string{
    $text = str_replace(['a', 'A'], "@", $text);
    $text = str_replace(['o', 'O'], "0", $text);
    $text = str_replace(['e', 'E'], "3", $text);
    $text = str_replace(['i', 'I'], "1", $text);
    return $text;
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
    <p>De tekst voor de eerste functie -> <?php echo truncateString("De tekst voor de eerste functie", 20) ?></p>
    <p>De tekst voor de tweede functie -> <?php echo l33tifyString("De tekst voor de tweede functie") ?></p>
    <p>De tekst voor beide functies -> <?php echo l33tifyString(truncateString('De tekst voor beide functies', 15)) ?></p>
</body>

</html>