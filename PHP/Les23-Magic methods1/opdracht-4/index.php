<?php
require_once 'vendor/autoload.php';

$fish = new Fish(true, 1, 'blue', 'test');
$cat = new Cat(true, 5, 'white', 'test2');


var_dump($cat);
var_dump($fish);

echo '<br>';
echo var_export($fish->__set_state([
    'hasScales' => true,
    'age' => 2,
    'color' => 'red',
    'gender' => 'female',
]));
echo '<br>';
echo var_export($cat->__set_state([
    'isDomesticated' => false,
    'age' => 4,
    'color' => 'black',
    'gender' => 'male',
]));
echo '<br>';
