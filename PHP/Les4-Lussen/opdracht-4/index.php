<?php
$end = 100;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>
        <?php
        for ($i = 1; $i < $end + 1; $i++) {
            if ($i % 4 === 0 &  $i % 7 === 0 && $i % 4 === 0) {
                echo <<<HTML
                <p style="color: red;">$i en deelbaar door 7</p>
                HTML;
            } else if ($i % 4 === 0) {
                echo <<<HTML
                <p style="color: red;">$i</p>
                HTML;
            } else if ($i % 7 === 0) {
                echo <<<HTML
                <p>$i en deelbaar door 7</p>
                HTML;
            } else {
                echo <<<HTML
                <p>$i</p>
                HTML;
            }
        }
        ?>
    </div>
</body>

</html>