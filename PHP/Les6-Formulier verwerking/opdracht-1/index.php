<?php
$voornaam =  $_POST['voornaam'];
$achternaam =  $_POST['achternaam'];
$leeftijd =  $_POST['leeftijd'];
$datum =  $_POST['datum'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles/style.css">
    <title>Formulier 1</title>
</head>

<body>
    <form action="index.php" method="post">
        <div class="label-input">
            <label for="voornaam">Voornaam</label>
            <input type="text" name="voornaam">
        </div>
        <div>
            <label for="achternaam">Achternaam</label>
            <input type="text" name="achternaam">
        </div>
        <div>
            <label for="leeftijd">Leeftijd</label>
            <input type="number" name="leeftijd">
        </div>
        <div>
            <label for="datum">Datum</label>
            <input type="date" name="datum">
        </div>
        <div>
            <label for="kleur">Kleur</label>
            <input type="color" name="kleur">
        </div>
        <div>
            <input type="submit" name="verzend" value="Verzenden">
        </div>
        <?php
        echo 'Je naam is ' . $voornaam . ' ' . $achternaam;
        echo 'Je leeftijd is ' . $leeftijd;
        echo 'De datum is ' . $datum;
        echo '<style>
        body {
            background-color: .' . $_POST['kleur'] . ';
            }
        </style>';
        ?>
    </form>
</body>

</html>