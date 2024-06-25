<?php
require_once 'vendor/autoload.php';

$personA = new Person('Donald', 'Trump');

$testPerson = new Person('Donald', 'Trump');
$personA->age = '80';

echo $personA->setFirstName('Obama');
echo '<p>' . $personA->showFullName() . '</p>';

echo '<p>' . $personA->age . '</p>';

print_r(get_object_vars($personA));
