<?php

//time() voor huidige tijd + de berekening voor een jaar(geen rekening  gehouden met afwijkende jaren)
setcookie('date-time', date('d-m-Y G:i'), time() + (365 * 24 * 60 * 60));

$lastVisit = $_COOKIE['date-time'];

//strotime() zet het om naar een timestamp zoals time.
$timeDifference = time() - strtotime($_COOKIE['date-time']);

$minutesPassed = round($timeDifference / 60);

// echo $minutesPassed . ' ';

// echo  time() . ' ' . strtotime($_COOKIE['date-time']);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookies 1</title>
</head>

<body>
    <?php
    if (isset($_COOKIE['date-time'])) {
        $timeDifference = time() - strtotime($_COOKIE['date-time']);

        $minutesPassed = round($timeDifference / 60);

        // echo $minutesPassed . ' ';
        // echo  time() . ' ' . strtotime($_COOKIE['date-time']);

        echo '<p>Welkom terug! Uw vorige bezoek was op ' . $_COOKIE['date-time'] . '.</p>';
        echo '<p>Welkom terug! Uw vorige bezoek was ' . $minutesPassed . ' minuten geleden.</p>';
    }
    ?>
</body>

</html>