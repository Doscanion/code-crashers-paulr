<?php
$errors = [];

if (isset($_POST['verzenden'])) {
    foreach ($_POST as $key => $value) {
        $value = htmlspecialchars($value);
        if ($key !== 'verzenden') {
            if (!empty($value) || $value === '0') {
                switch ($key) {
                    case 'naam';
                        $naam = $value;
                        break;
                    case 'email';
                        $email =  $value;
                        break;
                    case 'kinderen';
                        $kinderen =  intval($value);
                        break;
                    case 'staat';
                        $staat = $value;
                        break;
                    case 'nationaliteit';
                        $nationaliteit = $value;
                        break;
                    case 'nieuwsbrief';
                        $nieuwsbrief =  $value;
                }
            } else {
                $errors[] = $key;
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="nl-NL">

<head>
    <meta charset="utf-8">
    <title>Registratieformulier</title>
    <link rel="stylesheet" href="css/stylesheet.css">
</head>

<body>
    <div id="container">
        <form action="index.php" method="post">
            <div class="form-row">
                <label for="naam">Naam:</label>
                <input type="text" name="naam" id="naam" required>
            </div>
            <div class="form-row">
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email" required>
            </div>
            <div class="form-row">
                <label for="staat">Burgerlijke staat:</label>
                <select name="staat" id="staat">
                    <option>Ongehuwd</option>
                    <option>Gehuwd</option>
                    <option>Gescheiden</option>
                    <option>Verweduwd</option>
                </select>
            </div>
            <div class="form-row">
                <label for="kinderen">Aantal kinderen:</label>
                <input type="number" name="kinderen" id="kinderen" value="0" min="0">
            </div>
            <div class="form-row">
                <label for="nationaliteit">Nationaliteit:</label>
                <select name="nationaliteit" id="nationaliteit">
                    <option>Nederlandse</option>
                    <option>Belgische</option>
                    <option>Duitse</option>
                    <option>anders...</option>
                </select>
            </div>
            <div class="form-row">
                <label for="nieuwsbrief">
                    <input type="checkbox" name="nieuwsbrief" id="nieuwsbrief" value="ja"> Ik wil mij abonneren op de nieuwsbrief
                </label>
                <input type="submit" name="verzenden" value="Verzenden">
            </div>
            <div class="form-row">
                <span>verplicht om in te vullen.</span>
            </div>
        </form>
        <?php
        if (isset($_POST['verzenden'])) {
            if (count($errors) !== 0) {
                foreach ($errors as $key => $value) {
                    echo '<p style="color: red;">Vul de waarde in van ' . $value . '</p>';
                }
            } elseif ($kinderen < 0) {
                echo '<p style="color: red;">Negatief aantal kinderen ingevuld</p>';
            } else {
                if (!isset($nieuwsbrief)) {
                    $text = "Je wilt geen spam";
                } else {
                    $text = "Meer spam";
                }
                echo '<p>Naam: <span>' . $naam . '</span></p>';
                echo '<p>Aantal kinderen: <span>' . $kinderen . '</span></p>';
                echo '<p>Burgerlijke staat: <span>' . $staat . '</span></p>';
                echo '<p>Nationaliteit: <span>' . $nationaliteit . '</span></p>';
                echo '<p>Email: <span>' . $email . '</span></p>';
                echo '<p>Niewsbrief: <span>' . $text . '</span></p>';
            }
        }
        ?>
    </div>
</body>

</html>