<?php
$errors = [];

if (isset($_POST['verzend'])) {
    $leeftijd = -1;
    foreach ($_POST as $key => $value) {
        if ($key !== 'verzend') {
            if (!empty($value)) {
                error_log('test');
                switch ($key) {
                    case 'voornaam';
                        $voornaam = $value;
                        break;
                    case 'achternaam';
                        $achternaam =  $value;
                        break;
                    case 'leeftijd';
                        $leeftijd =  $value;
                        break;
                    case 'datum';
                        $datum = $value;
                        break;
                }
            } else {
                $errors[] = $key;
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/style.css">
    <title>Formulier 1</title>
</head>

<body>
    <form action="index.php" method="post">
        <div class="label-input">
            <label for="voornaam">Voornaam</label>
            <input type="text" name="voornaam" id="voornaam">
        </div>
        <div>
            <label for="achternaam">Achternaam</label>
            <input type="text" name="achternaam" id="achternaam">
        </div>
        <div>
            <label for="leeftijd">Leeftijd</label>
            <input type="number" name="leeftijd" id="leeftijd">
        </div>
        <div>
            <label for="datum">Datum</label>
            <input type="date" name="datum" id="datum">
        </div>
        <div>
            <label for="kleur">Kleur</label>
            <input type="color" name="kleur" id="kleur">
        </div>
        <div>
            <input type="submit" name="verzend" value="Verzenden">
        </div>
        <?php
        // if (isset($_POST['verzend']) && count($errors) === 0 && $leeftijd >= 0 && $leeftijd <= 150) {
        //     echo 'Je naam is ' . $voornaam . ' ' . $achternaam;
        //     echo 'Je leeftijd is ' . $leeftijd;
        //     echo 'De datum is ' . $datum;
        //     echo '
        //     <style>
        //         body {
        //         background-color: ' . $_POST['kleur'] . ';
        //         }
        //     </style>';
        // } elseif (isset($_POST['verzend']) && count($errors) !== 0) {
        //     if ($leeftijd < 0 && $leeftijd > 150) {
        //         echo '<p style="color: red;">Vul een gelde waarde in voor de leeftijd</p>';
        //     }
        //     foreach ($errors as $key => $value) {
        //         echo '<p style="color: red;">Vul de waarde in van ' . $value . '</p>';
        //     }
        // } elseif (isset($_POST['verzend']) && $leeftijd < 0 && $leeftijd > 150) {
        //     echo 'Vul een gelde waarde in voor de leeftijd';
        // }

        if (isset($_POST['verzend'])) {
            if ($leeftijd < 0 && $leeftijd > 150) {
                echo '<p style="color: red;">Vul een gelde waarde in voor de leeftijd</p>';
            } elseif (count($errors) !== 0) {
                foreach ($errors as $key => $value) {
                    echo '<p style="color: red;">Vul de waarde in van ' . $value . '</p>';
                }
            } else {
                echo '<p>Je naam is ' . $voornaam . ' ' . $achternaam . '</p>';
                echo '<p>Je leeftijd is ' . $leeftijd . '</p>';
                echo '<p>De datum is ' . $datum . '</p>';
                echo '
                <style>
                body {
                background-color: ' . $_POST['kleur'] . ';
                }
                </style>';
            }
        }
        ?>
    </form>
</body>

</html>