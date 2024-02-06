<?php
// Hier worden alle variabelen gedefinieerd
$title = 'Les PHP';
$description = 'opdracht test';
$heading = 'PHP';
$paragraph = 'De eerste opdracht van les 1 PHP';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?= $description ?>">
    <title><?= $title ?></title>
</head>

<body>
    <section>
        <h1><?= $heading ?></h1>
        <p><?= $paragraph ?></p>
    </section>
</body>

</html>