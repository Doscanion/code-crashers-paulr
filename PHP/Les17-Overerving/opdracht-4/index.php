<?php
require_once './classes/Animal.php';

require_once './classes/Dog.php';
require_once './classes/Human.php';

$dog = new Dog(2, 'Labrador');
$human = new Human(20, 'Code',  'Webdeveloper');
// $oldhuman = new Human(47, 'Code', 'webdeveloper');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Overerving 4</title>
</head>

<body>
    <?= $dog->celebrateBirthday(); ?>
    <?= $dog->sayHello(); ?>
    <?= $human->celebrateBirthday(); ?>
    <?= $human->sayHello(); ?>

</body>

</html>