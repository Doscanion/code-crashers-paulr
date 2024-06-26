<?php
require_once 'vendor/autoload.php';

session_start();

if (isset($_POST['user'])) {
    if (!empty($_POST['name']) && !empty($_POST['age']) && !empty($_POST['email']) && !empty($_POST['nation'])) {
        $tempkey = uniqid();
        $newUser = new User($_POST['name'], $_POST['age'], $_POST['email'], $_POST['nation'], $tempkey);
        $_SESSION['newUser'] = $newUser;
    }
} elseif (isset($_POST['serial'])) {
    if (!empty($_SESSION['newUser'])) {
        $serialUser =  serialize($_SESSION['newUser']);
        file_put_contents('userlist.txt', $serialUser . PHP_EOL, FILE_APPEND);
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magic methods-2 3</title>
</head>

<body>
    <form action="<?= $_SERVER["PHP_SELF"] ?>" method="post">
        <div>
            <label for="name">name</label>
            <input type="text" name="name" id="name">
        </div>
        <div>
            <label for="age">Age</label>
            <input type="number" name="age" id="age">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
        </div>
        <div>
            <label for="nation">nationality</label>
            <select name="nation" id="nation">
                <option value="NL">NL</option>
                <option value="BE">BE</option>
                <option value="DE">DE</option>
                <option value="FR">FR </option>
                <option value="UK">UK </option>
            </select>
        </div>
        <input type="submit" name="user" value="Submit">
    </form>

    <?php
    if (!empty($newUser)) {
        echo $newUser;
    ?>
        <form action="<?= $_SERVER["PHP_SELF"] ?>" method="post">
            <input type="submit" name="serial" value="Submit">
        </form>
    <?php
    }
    ?>
</body>

</html>