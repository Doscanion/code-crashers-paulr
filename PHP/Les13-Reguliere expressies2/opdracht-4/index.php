<?php
$students = [
    1 => 'Damion Scheltens',
    2 => 'Ferris Veerman',
    3 => 'Marry Hazenberg',
    4 => 'Achmed Tibben',
    5 => 'Yarno Sikkens',
    6 => 'Josie Veeke',
    7 => 'Lucretia van Oijen',
    8 => 'Angelo Duijzer',
    9 => 'Gerke Rikkert',
    10 => 'Cyrille van der Kaa',
    11 => 'Rosa de Schipper',
    12 => 'Guilliano van de Steeg',
    13 => 'Tijl Lenting',
    14 => 'Shanna van Workum'
];

$new_array = [];

foreach ($students as $student) {
    // De ^ geeft aan het begin, ([A-Z]) capture voor de eerste letter, \S* eind voor het eerste woord, \s* legen ruimte(s), (.+) capture voor de rest en $ is het eind
    preg_match('/^([A-Z])\S*\s*(.+)$/', $student, $matches);

    $key = strtolower($matches[1] . preg_replace('/\s+/', '', $matches[2])) . '@codecrashers.eu';
    $new_array[$key] = $student;
}

print_r($new_array);

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regex-2 4</title>
</head>

<body>

</body>

</html>