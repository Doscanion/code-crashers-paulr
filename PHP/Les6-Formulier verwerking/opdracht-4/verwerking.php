<?php
$onbekend = '<i>onbekend</i>';
if (isset($_POST['verzenden'])) {
    $voornaam = isset($_POST['voornaam']) && !empty($_POST['voornaam']) ? htmlspecialchars($_POST['voornaam']) : $onbekend;
    $geslacht = isset($_POST['iets']) && !empty($_POST['iets']) ? htmlspecialchars($_POST['iets']) : $onbekend;
    $woonplaats = isset($_POST['woonplaats']) && !empty($_POST['woonplaats']) ? htmlspecialchars($_POST['woonplaats']) : $onbekend;
    $postcode = isset($_POST['postcode']) && !empty($_POST['postcode']) ? htmlspecialchars($_POST['postcode']) : $onbekend;
    $provincie = isset($_POST['provincie']) && !empty($_POST['provincie']) ? htmlspecialchars($_POST['provincie']) : $onbekend;
} else {
    header("Location: /index.php");
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Les Formulier 4</title>
</head>

<body>
    <table>
        <tr>
            <td>Voornaam</td>
            <td><?php echo $voornaam ?></td>
        </tr>
        <tr>
            <td>Geslacht</td>
            <td><?php echo $geslacht ?></td>
        </tr>
        <tr>
            <td>Woonplaats</td>
            <td><?php echo $woonplaats ?></td>
        </tr>
        <tr>
            <td>Postcode</td>
            <td><?php echo $postcode ?></td>
        </tr>
        <tr>
            <td>Provincie</td>
            <td><?php echo $provincie ?></td>
        </tr>
    </table>
</body>

</html>