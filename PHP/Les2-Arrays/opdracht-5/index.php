<?php

$catalogus = [
    'Rode wijnen' => ['Merlot', 'Carbernet Sauvignon', 'Grenache', 'Malbec'],
    'Witte wijnen' => ['Chardonnay', 'Riesling', 'Pinot Blanc', 'Trebbiano'],
    'Speciaalbieren' => ['Duvel', 'Leffe', 'Affligem'],
    'Sterke dranken' => ['Baileys', 'Wodka', 'Whisky', 'Cognac', 'Rum', 'Malibu']
];

$catalogus['Witte wijnen'][3] = 'Pinot Gris';
$catalogus['Gedestilleerde dranken'] = $catalogus['Sterke dranken'];
unset($catalogus['Sterke dranken']);
unset($catalogus['Gedestilleerde dranken'][0], $catalogus['Gedestilleerde dranken'][5]);
$catalogus['Speciaalbieren'][] = 'Guiness';
$catalogus['Likeuren'] = ['Baileys', 'Malibu', 'Amaretto', 'Cointreau'];

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul>
        <?php foreach ($catalogus as $drank => $value) { ?>
            <li>
                <?php echo ($drank); ?>
                <ul>
                    <?php foreach ($value as $merk) { ?>
                        <li><?php echo $merk ?> </li>
                    <?php } ?>
                </ul>
            </li>
        <?php } ?>
    </ul>
</body>

</html>