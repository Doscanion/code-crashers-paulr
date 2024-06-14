<?php
require_once './classes/Drawing.php';
require_once './classes/Rectangle.php';
require_once './classes/Ellipse.php';

$rect1 = new Rectangle(100, 100, 90, 70, 'red');
$rect2 = new Rectangle(200, 200, 160, 70, 'blue');
$rect3 = new Rectangle(300, 300, 190, 80, 'green');
$ellipse1 = new Ellipse(300, 100, 60, 30, 'orange');
$ellipse2 = new Ellipse(100, 300, 60, 30, 'yellow');

$drawing = new Drawing(400, 400);
$drawing->addFigure($rect1);
$drawing->addFigure($rect2);
$drawing->addFigure($rect3);
$drawing->addFigure($ellipse1);
$drawing->addFigure($ellipse2);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Polymorphism 2</title>
</head>

<body>
    <?php echo $drawing->draw(); ?>
</body>

</html>