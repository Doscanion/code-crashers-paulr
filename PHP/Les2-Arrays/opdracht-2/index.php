<?php

$favGames = [
    'Tom ' => 'Final Fantasy VI',
    'Johan' => 'Jazz Jackrabbit 2',
    'Marco' => 'Clash of Clans',
    'Casper' => 'Super Smash Bros. Melee'
];

$favGames['Casper'] = 'Super Smash Bros. Ultimate';
$favGames['Gino'] = 'Habbo Hotel';
$favGames['Nancy'] = 'The Sims 4';
ksort($favGames)
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <pre>
        <?= var_dump($favGames); ?>
    </pre>
</body>

</html>