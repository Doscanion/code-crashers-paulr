<?php
function dik($tekst) {
    return '<strong>' . $tekst . '</strong>';
}
function schuin($tekst) {
    return '<em>' . $tekst . '</em>';
}
function onderstreept($tekst) {
    return '<ins>' . $tekst . '</ins>';
}

function verwijderd($tekst) {
    return '<del>' . $tekst . '</del>';
}

function geciteerd($tekst) {
    return '<q>' . $tekst . '</q>';
}

$hello = 'Hello Eindhoven!';

if (isset($_GET['stijl'])) {
    if (function_exists($_GET['stijl'])) {
        $hello = $_GET['stijl']($hello);
    }
}

highlight_file(basename($_SERVER['PHP_SELF']));

?>
<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="utf-8">
    <title>Functies 2</title>
</head>

<body>
    <?= $hello ?? '' ?>
    <form method="get" action="<?= htmlspecialchars($_SERVER['PHP_SELF']); ?>">
        <input type="submit" name="stijl" value="dik">
        <input type="submit" name="stijl" value="schuin">
        <input type="submit" name="stijl" value="onderstreept">
        <input type="submit" name="stijl" value="verwijderd">
        <input type="submit" name="stijl" value="geciteerd">
    </form>
</body>

</html>