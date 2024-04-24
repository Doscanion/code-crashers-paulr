<?php
// define('username', 'Paul');
// define('password', 'admin');
session_start();

include 'users.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sessies 2</title>
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

    <?php
    if (isset($_SESSION['logged']) && $_SESSION['logged']) {
    ?>
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam saepe quod iusto quae, perferendis vitae magni soluta, ipsum enim repellendus deserunt fugiat qui, atque non incidunt odit quas ab impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam saepe quod iusto quae, perferendis vitae magni soluta, ipsum enim repellendus deserunt fugiat qui, atque non incidunt odit quas ab impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam saepe quod iusto quae, perferendis vitae magni soluta, ipsum enim repellendus deserunt fugiat qui, atque non incidunt odit quas ab impedit? </p>
    <?php
    }
    ?>

</body>

</html>