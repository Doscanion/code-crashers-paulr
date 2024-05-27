<?php
require_once('./classes/Logger.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $author = $_POST['name'];
    $message = $_POST['message'];
    if (!empty($author) && !empty($message)) {
        $logger = new Logger('./files/logboek.txt', 'a', $author, $message);
    }
}

if (!empty($logger)) {
    $logger->addLog($author, $message);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File handling 2</title>
</head>

<body>
    <form action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name">
        </div>
        <br>
        <div>
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="4" cols="50"></textarea>
        </div>
        <input type="submit" value="Submit">
    </form>
</body>

</html>