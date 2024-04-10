<?php
$taal = !isset($_GET['q']) ? 'nl' : $_GET['q'];
echo $taal;
switch ($taal) {
    case 'nl':
        $msg = 'Hallo wereld!';
        break;
    case 'en':
        $msg = 'Hello world!';
        break;
    case 'fr':
        $msg = 'Bonjour tout le monde!';
        break;
    case 'es':
        $msg = 'Hello world!';
        break;
    case 'de':
        $msg = 'Hallo Welt!';
        break;
    default:
        $msg = 'None selected';
        break;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>PHP Adresbalk - 3</title>
</head>

<body>
    <form action="<?= htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="get">
        <button class="nl" type="submit" name="q" value="nl">
        </button>
        <button class="en" type="submit" name="q" value="en">
        </button>
        <button class="fr" type="submit" name="q" value="fr">
        </button>
        <button class="es" type="submit" name="q" value="es">
        </button>
        <button class="de" type="submit" name="q" value="de">
        </button>
    </form>
    <h1><?= isset($msg) ? $msg : '' ?></h1>
</body>

</html>