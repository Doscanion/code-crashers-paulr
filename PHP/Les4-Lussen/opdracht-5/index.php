<?php
$maand = array("januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december")
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
        <ul>
            <?php
            for ($i = 2; $i < count($maand); $i++) {
                echo <<<HTML
            <li>$maand[$i]</li>
            HTML;
            }
            ?>
            <br>
            <?php
            for ($i = 8; $i >= 4; $i--) {
                echo <<<HTML
            <li>$maand[$i]</li>
            HTML;
            }
            ?>
        </ul>
    </div>
</body>

</html>