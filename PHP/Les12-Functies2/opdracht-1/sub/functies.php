<?php

function  berekenGemiddelde(int|float|string $x, int|float|string $y): void {
    if (is_numeric($x) && is_numeric($y)) {
        var_dump($x + $y);
    } else {
        exit('x = ' . (is_numeric($x) ? 'true' : 'false') . ' and y = ' . (is_numeric($y) ? 'true' : 'false'));
    }
}
