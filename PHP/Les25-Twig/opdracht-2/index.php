<?php
require_once('vendor/autoload.php');
$loader = new \Twig\Loader\FilesystemLoader('./templates');
$twig = new \Twig\Environment($loader, []);

$page = $twig->load('page.html');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $author = $_POST['name'];
    $message = $_POST['message'];
    if (!empty($author) && !empty($message)) {
        $logger = new Logger('./files/logboek.txt', 'a');
        $logger->addLog($author, $message);
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
    $messages = $loggerRead->showLog();

    echo $page->render(['messages' => $messages]);
    // echo '<pre>';
    // echo var_dump($messages);
    // echo '</pre>';
    ?>
</body>

</html>