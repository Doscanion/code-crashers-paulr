<?php
require_once 'vendor/autoload.php';

use League\Csv\Reader;
use League\Csv\XMLConverter;

$file = new SplFileObject('./deniro.csv', 'r');
$csv = Reader::createFromFileObject($file);

$converter = XMLConverter::create()
    ->rootElement('csv')
    ->recordElement('record', 'offset')
    ->fieldElement('field', 'name');

$dom = $converter->convert($csv);
$dom->formatOutput = true;
$dom->encoding = 'iso-8859-15';
echo '<pre>', PHP_EOL;
echo htmlentities($dom->saveXML());
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Composer 3</title>
</head>

<body>

</body>

</html>