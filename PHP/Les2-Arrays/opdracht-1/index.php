<?php
$supermarkten =  array(
    'Albert Heijn',
    'Jumbo',
    'Coop',
    'Jan linders',
    'Edah',
    'C1000'
);

// print_r($supermarkten);
array_push($supermarkten, 'Aldi', 'Lidl');
$supermarkten[2] = 'Plus';
unset($supermarkten[4]);
print_r($supermarkten);
$supermarkten[5] = null;
print_r($supermarkten);
