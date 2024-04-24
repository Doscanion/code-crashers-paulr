<?php
include 'users.php';
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sessies 5</title>
</head>

<body>
    <header>
        <?php
        include 'login.php'
        ?>
    </header>
    <nav>
        <a href="./index.php">Index</a>
        <a href="./extra.php">Extra</a>
        <a href="./about.php">About</a>
        <a href="./contact.php">Contact</a>
    </nav>
    <main>
        <h1>Contact</h1>
        <p>Street: Fakestreet 123</p>
        <p>Location: Fakecity 1234AS</p>
        <p>Tel. number: 0123456789</p>
        <?php
        if (isset($_SESSION['logged']) && $_SESSION['logged']) {
        ?>
            <h1>Contact 2</h1>
            <p>Street: Realstreet 123</p>
            <p>Location: Realcity 1234AS</p>
            <p>Tel. number: 9876543210</p>
        <?php
        }
        ?>
    </main>
</body>

</html>