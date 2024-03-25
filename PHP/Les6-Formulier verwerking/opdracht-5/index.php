<?php
$errors = [];

if (isset($_POST['generen'])) {
    isset($_POST['tafel']) && !empty($_POST['tafel']) ? ($_POST['tafel'] > 0 ? $tafel = $_POST['tafel'] : $errors[] = 'Tafel') : $errors[] = 'Tafel';

    isset($_POST['lengte']) && !empty($_POST['lengte']) ? ($_POST['lengte'] > 0 ? $lengte = $_POST['lengte'] : $errors[] = 'Lengte') : $errors[] = 'Lengte';
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Form 5</title>
</head>

<body>
    <form action="index.php" method="post">
        <div>
            <label for="tafel">De tafel van:</label>
            <input type="number" id="tafel" name="tafel" min="1" max="999" value="<?php echo isset($tafel) ? $tafel : ''; ?>">
        </div>
        <div>
            <label for="tafel">De lengte:</label>
            <input type="number" id="lengte" name="lengte" min="1" max="999" value="<?php echo isset($lengte) ? $lengte : ''; ?>">
        </div>
        <input type="submit" value="generen" id="generen" name="generen">
    </form>
    <table>
        <?php
        if (isset(($_POST)['generen'])) {
            if (count($errors) === 0) {
                for ($i = 0; $i < $lengte; $i++) {
        ?>
                    <tr>
                        <td><?php echo $tafel ?></td>
                        <td>x</td>
                        <td><?php echo $i + 1 ?></td>
                        <td>=</td>
                        <td><?php echo $tafel * ($i + 1) ?></td>
                    </tr>
        <?php
                }
            } else {
                foreach ($errors as $key => $value) {
                    echo '<p style="color: red;">Vul in een correct waarden voor ' . $value . '</p>';
                }
            }
        }
        ?>
    </table>
</body>

</html>