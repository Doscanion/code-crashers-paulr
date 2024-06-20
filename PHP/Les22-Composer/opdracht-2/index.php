<?php
require_once 'vendor/autoload.php';

use Carbon\Carbon;

$carbon = Carbon::now();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Composer 2</title>
</head>

<body>
    <?php
    echo 'Het is nu ' . $carbon . '<br>';
    $subDays = $carbon->copy()->subDay(2);
    echo 'Het is nu ' . $subDays  .  '<br>';
    $addWeeks = $carbon->copy()->addWeeks(3);
    echo 'Het is nu ' . $addWeeks .  '<br>';
    ?>
</body>

</html>