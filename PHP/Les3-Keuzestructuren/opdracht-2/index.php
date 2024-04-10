<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $dayOfWeek = date('w');
    $dayOfMonth = date('j');
    $month = date('n');

    echo ($dayOfMonth);

    if ($dayOfWeek > 0 && $dayOfWeek <= 5) {
        echo <<<HTML
    <p>Vandaag is een werkdag</p>
    HTML;
    }
    if ($dayOfMonth === 13 && $dayOfWeek == 5) {
        echo <<<HTML
    <p>Het is vrijdag de dertiende!</p>
    HTML;
    }
    if ($dayOfMonth === 19 && $month == 5) {
        echo <<<HTML
    <img src="./bcake.jpg" alt="cake">
    HTML;
    }
    if ($dayOfMonth === 25 && $dayOfMonth === 26 && $month == 12) {
        echo <<<HTML
    <img src="./Christmas_Tree_photo.jpg" alt="cake">
    HTML;
    }

    if ($dayOfMonth === 3 && $month === 5 && $dayOfWeek === 0) {
        echo <<<HTML
    <iframe width="200" height="300" src="https://www.youtube.com/watch?v=eBGIQ7ZuuiU" frameborder="0" allowfullscreen></iframe>
    HTML;
    }

    ?>
</body>

</html>