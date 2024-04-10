<?php

$x = 1;
echo '<ul>';
while ($x <= 1000) {
    echo <<<HTML
    <li>$x</li> 
    HTML;
    $x *= 3;
}
echo '</ul>';

$y = 500;
echo '<ul>';
while ($y >= 50) {
    echo <<<HTML
    <li>$y</li> 
    HTML;
    $y /= 5;
}
echo '</ul>';
