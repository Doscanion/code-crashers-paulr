<?php
require_once './classes/CustomException.php';

function ExceptionHandler(Exception $e) {
    echo '<h1>Something went wrong</h1>';
    echo '<p>Message: ' . $e->getMessage() . '</p>';
    echo '<p>File: ' . $e->getFile() . '</p>';
    echo '<p>Line: ' . $e->getLine() . '</p>';
}

set_exception_handler('ExceptionHandler');

if (!empty($_POST)) {
    if (!empty($_POST['email'])) {
        try {
            if (!preg_match('/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-z]{2,}$/', $_POST['email'])) {
                throw new Exception("Email is not in correct format");
            }
        } catch (Exception $e) {
            throw new CustomException($e->getMessage(), $e->getCode(), $e);
        }
    } else {
        throw new Exception("Email is empty");
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exception 5</title>
</head>

<body>
    <form action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        <input type="submit" value="Submit">
    </form>
</body>

</html>