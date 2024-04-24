<?php
if (isset($_POST['login'])) {
    foreach ($usersLogin as $key => $value) {
        if (!empty($_POST['username'] && !empty($_POST['password']))) {
            if ($_POST['username'] === $value['username'] && $_POST['password'] === $value['password']) {

                $_SESSION['logged'] = true;
                $_SESSION['username'] = htmlspecialchars($_POST['username']);
            }
        }
    }
}

if (isset($_POST['logout'])) {
    session_unset();
}


if (!isset($_SESSION['logged']) || isset($_SESSION['logged']) && !$_SESSION['logged']) {
?>
    <form action="<?= htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="post">
        <label for="username">Username</label><input type="text" id="username" name="username" value="<?php echo isset($_POST['username']) ? htmlspecialchars($_POST['username']) : ''; ?>">
        <label for="password">Password</label><input type="password" id="password" name="password">
        <input type="submit" value="Submit" name="login">
    </form>

    <?php
    if (isset($_POST['login'])) {
        foreach ($usersLogin as $key => $user) {
            if (empty($_POST['username'] || empty($_POST['password']))) {
                echo '<p>Please fill out all the required fields.</p>';
            } elseif ($_POST['username'] !== $user['username'] || $_POST['password'] !== $user['password']) {
                echo '<p>Incorrect Username or Password.</p>';
            }
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
<?php
}
