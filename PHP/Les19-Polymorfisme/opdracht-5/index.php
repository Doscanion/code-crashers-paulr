<?php
require_once('./classes/Logger.php');

$dInterface = false;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $author = $_POST['name'];
    $message = $_POST['message'];
    if (!empty($author) && !empty($message)) {
        foreach (class_implements(new Logger) as $key => $value) {
            if ($value === 'DatabaseInterface') {
                $logger = new Logger('./files/logboek.txt', 'a');
                $logger->addLog($author, $message);
                $dInterface = true;
            }
        }
    }
} else {
}

$loggerRead = new Logger('./files/logboek.txt', 'r');

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        article {
            border: 1px solid black;
            margin-top: 10px;
            padding: 5px;
        }

        article p:nth-child(2) {
            font-size: 11px;
        }
    </style>
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
    <?php
    if ($dInterface && $_SERVER['REQUEST_METHOD'] == 'POST') {
        $loggerRead->showLog();
    }

    ?>
</body>

</html>