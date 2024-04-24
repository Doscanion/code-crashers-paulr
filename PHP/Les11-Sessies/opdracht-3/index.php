<?php
session_start();
if (!isset($_SESSION['startTime'])) {
    $_SESSION['startTime'] = time();
}

$_SESSION['currentTime'] = time();
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sessies 3</title>
</head>

<body>
    <!-- <?php echo round(($_SESSION['currentTime'] - $_SESSION['startTime']) / 60) . ' minute(s)' ?> -->
    <script>
        let startTime = <?= $_SESSION['startTime'] ?>


        let timeSeconds = Math.round((Date.now() / 1000) - startTime);
        let timeMinutes = Math.floor(timeSeconds / 60);

        document.body.innerHTML = timeMinutes + ' minute(s)';
    </script>
</body>

</html>