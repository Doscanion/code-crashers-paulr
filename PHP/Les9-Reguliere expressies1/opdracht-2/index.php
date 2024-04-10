<?php

function checkPostalCode($formText)
{

    return preg_match('/[0-9]{4}\s?[a-zA-Z]{2}/', $formText);
}




?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regex 2</title>
</head>

<body>
    <form action="<?= htmlspecialchars($_SERVER['PHP_SELF'])  ?>" method="GET">
        <label for="postcode">Text</label>
        <input type="text" name="postcode" id="postcode" pattern="[0-9]{4}\s?[a-zA-Z]{2}" required>
        <input type="submit" value="submit">
    </form>
    <?php
    if (!empty($_GET)) {
        if (!empty($_GET['postcode'])) {
            $postcode = checkPostalCode($_GET['postcode']);
            echo $postcode ? 'valid Postcode' : 'unvalid Postcode';
        } else {
            echo 'Missing text';
        }
    }
    ?>
</body>

</html>