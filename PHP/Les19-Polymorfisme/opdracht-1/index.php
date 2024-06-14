<?php
require_once './classes/Drawing.php';
require_once './classes/Rectangle.php';

$rect1 = new Rectangle(100, 100, 80, 70, 'red');
$rect2 = new Rectangle(200, 200, 60, 70, 'blue');
$rect3 = new Rectangle(300, 300, 90, 80, 'green');

$drawing = new Drawing(400, 400);
$drawing->addFigure($rect1);
$drawing->addFigure($rect2);
$drawing->addFigure($rect3);


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Polymorfisme 1</title>
</head>

<body>
    <?php echo $drawing->draw(); ?>
</body>

</html>