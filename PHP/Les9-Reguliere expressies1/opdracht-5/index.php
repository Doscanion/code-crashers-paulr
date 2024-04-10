<?php
function textCheck($text)
{
    $error = [];
    !preg_match('/.{10,}/', $text) ? $error[] = 'Password needs to be 8 characters long.' : '';
    !preg_match('/[a-z]+/', $text) ? $error[] = 'Text needs to have at least 1 lowercase letter.' : '';
    !preg_match('/\s+/', $text) ? $error[] = 'Text needs to have at least 1 space.' : '';
    return $error;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regex-1 5</title>
</head>

<body>
    <form action="<?= $_SERVER['PHP_SELF'] ?>" method="get">
        <textarea name="text" id="text" cols="30" rows="10"></textarea>
        <input type="submit" value="Submit">
    </form>
    <?php
    if (!empty($_GET['text'])) {
        $textError = textCheck($_GET['text']);
        if (!empty($textError)) {
            foreach ($textError as $key => $value) {
                echo '<p>' . $value . '</p>';
            }
        } else {
            $textReplace = preg_replace('/[a-z]/', '*', $_GET['text']);
            $textReplace = preg_replace('/\s/', '  ', $textReplace);
            echo '<pre>' . $textReplace . '</pre>';
        }
    }

    ?>
</body>

</html>