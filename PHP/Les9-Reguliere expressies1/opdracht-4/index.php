<?php
if (!empty($_GET)) {
}

function checkComplexity($pw)
{
    $error = [];
    !preg_match('/.{8,}/', $pw) ? $error[] = 'Password needs to be 8 characters long.' : '';
    !preg_match('/[a-z]+/', $pw) ? $error[] = 'Password needs at least 1 lowercase letter.' : '';
    !preg_match('/[A-Z]+/', $pw) ? $error[] = 'Password needs at least 1 uppercase letter.' : '';
    !preg_match('/\W+/', $pw) ? $error[] = 'Password needs at least 1 none alphanumeric.' : '';
    preg_match_all('/\d+/', $pw, $matches);
    if (count($matches[0]) < 2) {
        $error[] = 'Password needs at least 2 number.';
    }
    return $error;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regex-1 4</title>
</head>

<body>
    <form action="<?= $_SERVER['PHP_SELF'] ?>" method="get">
        <div><label for="name">Username</label>
            <input type="text" name="name" id="name">
        </div>
        <div><label for="password">Password</label>
            <input type="text" name="password" id="password">
        </div>
        <input type="submit" value="Registreren">
    </form>
    <?php
    if (!empty($_GET)) {
        if (!empty($_GET['name']) && !empty($_GET['password'])) {
            $pwErrors = checkComplexity($_GET['password']);
            if (!empty($pwErrors)) {
                foreach ($pwErrors as $key => $value) {
                    echo '<p>' . $value . '</p>';
                }
            }
        } else {
            echo '<p>The inputs are empty</p>';
        }
    }
    ?>
</body>

</html>