<?php
$katanas = [
    181 => ['Name' => 'Katana', 'Description' => 'Samurai sword that randomly  inflicts stun.', 'Price' => '70 GP', 'Strength' => 10, 'Element' => '', 'Status ailments' => 'stun(25%)'],
    182 => ['Name' => 'Kotetsu', 'Description' => 'Samurai sword that randomly  inflicts blind.', 'Price' => '300 GP', 'Strength' => 20, 'Element' => '', 'Status ailments' => 'blind(25%)'],
    183 => ['Name' => 'Asura', 'Description' => 'Samurai sword that randomly  inflicts silence.', 'Price' => '920 GP', 'Strength' => 40, 'Element' => '', 'Status ailments' => 'silence(25%)'],
    643 => ['Name' => 'Osafune', 'Description' => 'Samurai sword that randomly  inflicts decreases enemy magic.', 'Price' => '1350 GP', 'Strength' => 50, 'Element' => '', 'Status ailments' => 'mag brk(25%)'],
    596 => ['Name' => 'Kiyomori', 'Description' => 'Earthly samurai sword that randomly inflicts slow.', 'Price' => 'n/a', 'Strength' => 60, 'Element' => 'earth', 'Status ailments' => 'slow (25%)'],
    184 => ['Name' => 'Muramasa', 'Description' => 'Samurai sword that randomly inflicts confuse.', 'Price' => '2100 GP', 'Strength' => 80, 'Element' => '', 'Status ailments' => 'confuse (10%)'],
    606 => ['Name' => 'Stunner', 'Description' => 'Samurai sword that often inflicts stun.', 'Price' => 'n/a', 'Strength' => 90, 'Element' => '', 'Status ailments' => 'stun (50%)'],
    597 => ['Name' => 'Kokuei', 'Description' => 'Dark samurai sword that randomly inflicts berserk.', 'Price' => 'n/a', 'Strength' => 105, 'Element' => 'dark', 'Status ailments' => 'berserk (10%)'],
    644 => ['Name' => 'Kazekiri', 'Description' => 'Aerial samurai sword that randomly inflicts sleep.', 'Price' => '9900 GP', 'Strength' => 120, 'Element' => 'wind', 'Status ailments' => 'sleep (25%)'],
    608 => ['Name' => 'Chirijiraden', 'Description' => 'Ice-elemental katana that belongs to TEC.', 'Price' => 'n/a', 'Strength' => 200, 'Element' => 'ice', 'Status ailments' => ''],
    185 => ['Name' => 'Murasame', 'Description' => 'Samurai sword that randomly decreases enemy strength.', 'Price' => '12000 GP', 'Strength' => 175, 'Element' => '', 'Status ailments' => 'pwr brk (25%)'],
    600 => ['Name' => 'Fantomu', 'Description' => 'Ghastly samurai sword that randomly decreases enemy defense.', 'Price' => 'n/a', 'Strength' => 215, 'Element' => 'ghost', 'Status ailments' => 'def brk (25%)'],
    186 => ['Name' => 'Shockblade', 'Description' => 'Samurai sword that randomly inflicts paralyze.', 'Price' => '30000 GP', 'Strength' => 300, 'Element' => '', 'Status ailments' => 'paralyze (10%)'],
    187 => ['Name' => 'Defender', 'Description' => 'Samurai sword that increases your own defense.', 'Price' => '60000 GP', 'Strength' => 260, 'Element' => '', 'Status ailments' => ''],
    645 => ['Name' => 'Kiku-ichimonji', 'Description' => 'Samurai sword that inflicts random status ailments.', 'Price' => '50000 GP', 'Strength' => 335, 'Element' => '', 'Status ailments' => 'poison (25%), blind (25%), silence (25%), berserk (25%), confuse (25%)'],
    599 => ['Name' => 'Masamune', 'Description' => 'The king of all samurai swords.', 'Price' => 'n/a', 'Strength' => 480, 'Element' => '', 'Status ailments' => 'instant-death (20%)'],
    629 => ['Name' => 'Purizumu', 'Description' => 'Multi-elemental katana that shines like a prism.', 'Price' => 'n/a', 'Strength' => 400, 'Element' => 'fire, ice, thunder, water, earth, wind', 'Status ailments' => '']
];

uasort($katanas, function ($a, $b) {
    return $a['Strength'] - $b['Strength'];
});
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php foreach ($katanas as $weapon_key => $weapon) { ?>
        <article id="<?= $weapon_key ?>">
            <div>
                <h1><?php echo $weapon['Name'] ?></h1>
                <p>Description<?php echo $weapon['Description'] ?></p>
                <p>Price: <?php echo $weapon['Price'] ?></p>
                <p>Strength: <?php echo $weapon['Strength'] ?></p>
                <p>Element: <?php echo $weapon['Element'] ?></p>
                <p>Status ailments: <?php echo $weapon['Status ailments'] ?></p>
            </div>

        </article>
    <?php } ?>



</body>

</html>