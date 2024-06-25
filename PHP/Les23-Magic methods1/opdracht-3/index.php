<?php
require_once 'vendor/autoload.php';

$robot1 = new Robot(0);
// $robot2 = new Robot(1);
// $robot3 = new Robot(2);

// echo $robot2->countRobots();

for ($i = 0; $i < 4; $i++) {
    new Robot(rand(150, 400));
}

echo Robot::countRobots();

$robot1->test();
$robot1->secret(1, 2, 1);
