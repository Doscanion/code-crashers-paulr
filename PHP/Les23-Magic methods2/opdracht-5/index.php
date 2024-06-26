<?php
require_once 'vendor/autoload.php';

$employee =  new Employee(255, 'black');

$employee2 = clone $employee;
$employee2->setEmployeeId(222);

$employee3 = clone $employee;
$employee3->setEmployeeId(145);

$office = new Office('Utrecht', 'ICT');

$office->employees = [$employee, $employee2, $employee3];

$office2 = clone $office;
$office2->setLocation('Rotterdam');

$office3 = clone $office;
$office3->setLocation('Amsterdam');

$office2->changeTieColor('blue');
$office3->changeTieColor('red');
echo "<pre>";
var_dump($office);
echo "<br>";
var_dump($office2);
echo "<br>";
var_dump($office3);
echo "</pre>";

// echo '<p>' . $employee . '</p>';
// echo '<p>' . $employee2 . '</p>';
// echo '<p>' . $employee3 . '</p>';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magic methods-2 5</title>
</head>

<body>

    <?php
    ?>
</body>

</html>