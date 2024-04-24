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
        <h1>Extra</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam tempore, architecto iste laudantium hic temporibus ipsam fuga maxime vel tenetur beatae odit. Earum consequatur ratione voluptatem velit, illo minima?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis culpa optio dignissimos. Illo assumenda voluptatum debitis blanditiis, animi, rem consectetur commodi, laudantium dignissimos architecto repellendus totam corrupti magnam quod libero.</p>
        <?php
        if (isset($_SESSION['logged']) && $_SESSION['logged']) {
        ?>
            <h1>Extra 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aut, tempore laudantium rem temporibus ullam quidem eaque quod placeat id eum ab minus. Accusantium placeat dolorem sint perspiciatis nihil corrupti?</p>
        <?php
        }
        ?>
    </main>
</body>

</html>