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
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem et recusandae aut, ullam quae reiciendis asperiores eaque eveniet harum officiis, blanditiis voluptatibus quasi minus cupiditate. Sunt nobis expedita voluptatum ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis quas ullam dolor a quisquam libero vero, enim voluptate id facere et adipisci animi magnam cupiditate. Ea iure omnis facere! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas modi fugiat maxime praesentium, sequi explicabo! Amet laudantium nostrum eum ipsa commodi odit ut, eveniet placeat cumque totam iure recusandae aut.</p>
        <?php
        if (isset($_SESSION['logged']) && $_SESSION['logged']) {
        ?>
            <h1>About 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam autem suscipit consequuntur libero nulla facere harum nam cupiditate natus, consequatur dolor repudiandae id reiciendis vitae! Voluptatum culpa ipsa dolorum.</p>
        <?php
        }
        ?>
    </main>
</body>

</html>