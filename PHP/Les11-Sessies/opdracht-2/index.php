<?php
define('username', 'Paul');
define('password', 'admin');
session_start();

if (isset($_POST['login'])) {
    if (!empty($_POST['username'] && !empty($_POST['password']))) {
        if ($_POST['username'] === username && $_POST['password'] === password) {

            $_SESSION['logged'] = true;
            $_SESSION['username'] = htmlspecialchars($_POST['username']);
        }
    }
}

if (isset($_POST['logout'])) {
    session_unset();
}



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sessies 2</title>
</head>

<body>


    <?php
    if (!isset($_SESSION['logged']) || isset($_SESSION['logged']) && !$_SESSION['logged']) {
    ?>
        <form action="<?= htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="post">
            <label for="username">Username</label><input type="text" id="username" name="username" value="<?php echo isset($_POST['username']) ? htmlspecialchars($_POST['username']) : ''; ?>">
            <label for="password">Password</label><input type="password" id="password" name="password">
            <input type="submit" value="Submit" name="login">
        </form>

        <?php
        if (isset($_POST['login'])) {
            if (empty($_POST['username'] || empty($_POST['password']))) {
                echo '<p>Please fill out all the required fields.</p>';
            } elseif ($_POST['username'] !== username || $_POST['password'] !== password) {
                echo '<p>Incorrect Username or Password.</p>';
            }
        }
    } else {
        ?>
        <div>
            <p>Welkom terug <?= $_SESSION['username'] ?></p>
            <form action="<?= htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
                <input type="submit" name="logout" value="Logout">
            </form>
        </div>
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam saepe quod iusto quae, perferendis vitae magni soluta, ipsum enim repellendus deserunt fugiat qui, atque non incidunt odit quas ab impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam saepe quod iusto quae, perferendis vitae magni soluta, ipsum enim repellendus deserunt fugiat qui, atque non incidunt odit quas ab impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam saepe quod iusto quae, perferendis vitae magni soluta, ipsum enim repellendus deserunt fugiat qui, atque non incidunt odit quas ab impedit? </p>
    <?php
    }
    ?>
</body>

</html>