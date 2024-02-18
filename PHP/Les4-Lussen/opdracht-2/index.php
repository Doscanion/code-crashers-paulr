<?php
$x = 1;
while ($x <= 1000) {
    echo <<<HTML
    <p>$x</p> 
    HTML;
    $x *= 3;
}

$y = 500;
while ($y >= 50) {
    echo <<<HTML
    <p>$y</p> 
    HTML;
    $y /= 5;
}
