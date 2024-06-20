<?php
require_once './classes/Organisms/Fauna/Animal.php';
require_once './classes/Organisms/Fauna/Dog.php';
require_once './classes/Organisms/Fauna/Human.php';

require_once './classes/Organisms/Flora/Plant.php';
require_once './classes/Organisms/Flora/Bonsai.php';

$dog = new \Organisms\Fauna\Dog(2, 'Labrador');
$human = new \Organisms\Fauna\Human(20, 'Code', 'Webdeveloper');
$bonsai = new \Organisms\Flora\Bonsai(5, 'Test');

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namespace 2</title>
</head>

<body>
    <?= $dog->celebrateBirthday(); ?><br>
    <?= $dog->sayHello(); ?><br>
    <?= $human->celebrateBirthday(); ?><br>
    <?= $human->sayHello(); ?><br>
    <?= $bonsai->whoAmI(); ?>
</body>

</html>