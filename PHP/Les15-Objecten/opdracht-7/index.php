<?php
$user;
require_once './classes/User.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $active = isset($_POST['active']) ? true : false;
    $user = new User($name, $password, $email, $age, $active);
}

$user1 = new User('admin', 'admin', 'admin@cc.com', 25, true);
$user2 = new User('gebruiker1', '12345', 'gebruiker1@cc.com', 44, false);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Objecten 7</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th,
        td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>

<body>
    <form action="<?= $_SERVER['PHP_SELF'] ?>" method="post">

        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value=""><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" value=""><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value=""><br>

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" value=""><br>

        <input type="checkbox" id="active" name="active" value="1">
        <label for="active">Active</label><br>

        <input type="submit" value="Submit">

    </form>
    <?php
    echo $user1->showData();
    echo $user2->showData();
    echo !empty($user) ? $user->showData() : '';
    ?>
</body>

</html>