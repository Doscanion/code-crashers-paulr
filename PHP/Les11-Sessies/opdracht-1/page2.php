<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sessies 1</title>
</head>

<body>
    <?php
    if (session_id()) {
        echo '<p>' . session_id() . '</p>';
        echo '<p>' . (!empty($_SESSION['name'])) ? $_SESSION['name'] . '</p>' : 'onbekend</p>';
        echo '<p>' . (!empty($_SESSION['age'])) ? $_SESSION['age'] . '</p>' : 'onbekend</p>';
        echo '<p>' . (!empty($_SESSION['music'])) ? implode(', ', $_SESSION['music']) . '</p>' : 'onbekend</p>';
    }


    ?>
</body>

</html>