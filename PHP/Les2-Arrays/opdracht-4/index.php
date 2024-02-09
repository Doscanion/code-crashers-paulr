<?php
$countries = array(
    'Servië' => 'Belgrado',
    'Bulgarije' => 'Sofia',
    'Roemenië' => 'Boekarest',
    'Moldavië' => 'Chisinau',
    'Hongarije' => 'Boedapest',
    'Albanië' => 'Tirana',
    'Oekraïne' => 'Kyiv',
    'Slowakije' => 'Bratislava'
);
krsort($countries);

unset($countries['Moldavië'], $countries['Albanië'])
?>
<!DOCTYPE html>
<html lang="en">
<style>
    table,
    thead,
    td {
        border: 1px solid black;
    }
</style>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <pre><?= print_r($countries); ?></pre>
    <pre><?= var_dump($countries); ?></pre>

    <table>
        <thead>
            <td>Land</td>
            <td>City</td>
        </thead>
        <?php foreach ($countries as $land => $city) {
        ?>

            <tr>
                <td><?= $land ?></td>
                <td><?= $city ?></td>
            </tr>
        <?php } ?>
    </table>
</body>

</html>