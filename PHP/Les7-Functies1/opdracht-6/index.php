<?php
$errors = [];
$check;
if (isset($_POST['submit'])) {

    $user = isset($_POST['user']) && !empty($_POST['user']) ? htmlspecialchars($_POST['user']) : $errors[] = 'User';
    $password = isset($_POST['password']) && !empty($_POST['password']) ? htmlspecialchars($_POST['password']) : $errors[] = 'Password';
    $confirm = isset($_POST['pwconfirm']) && !empty($_POST['pwconfirm']) ? htmlspecialchars($_POST['pwconfirm']) : $errors[] = 'Second Password';
    if (count($errors) === 0) {
        $credentials = [
            "user" => $user,
            "password" => $password,
            "pwconfirm" => $confirm
        ];
        $check = checkPass($credentials);
    } else {
        $error = 'Missing ' . implode(' ', $errors);
    }
}



function checkPass($cred): array
{
    $pwError = [];
    if ($cred['password'] !== $cred['pwconfirm']) {
        $pwError[] = 'Not the same password';
    }

    if (strlen($cred['password']) < 8) {
        $pwError[] = 'Password is not long, it needs 8 characters';
    }

    if ($cred['password'] === $cred['user']) {
        $pwError[] = 'Password cannot be the same as User';
    }
    return $pwError;
}

?>

<!DOCTYPE html>
<html lang="en">

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    input[type='submit'] {
        width: 80px;
    }

    p {
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functies 1 - 6</title>
</head>

<body>
    <form action="index.php" method="post">
        <div>
            <label for="user">Gebruiker</label>
            <input type="text" name="user" id="user">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
        </div>
        <div>
            <label for="pwconfirm">Password</label>
            <input type="password" name="pwconfirm" id="pwconfirm">
        </div>
        <input type="submit" value="submit" name="submit" id="submit">
        <?php
        if (isset($_POST['submit'])) {
            if (isset($error) && !empty($error)) {
                echo  '<p style="color: red;">' . $error . '</p>';
            } else {
                if (count($check)) {
                    echo '<p style="color: red;">Registratie niet voltooid. Probeer het nog eens.</p>';
                    foreach ($check as $key => $value) {
                        echo '<p style="color: red;">' . $value . '.</p>';
                    }
                } else {
                    echo '<p style="color: green;">Registratie voltooid.</p>';
                }
            }
        }
        ?>
    </form>
</body>

</html>