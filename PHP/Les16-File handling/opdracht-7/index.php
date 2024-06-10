<?php
require_once './classes/Filelog.php';

// $nlvsfin = new Filelog;
// $playerstats = $nlvsfin->createLogArray('NL-vs-FIN-stats.txt');
// if (!empty($playerstats)) {
//     $nlvsfin->statTable($playerstats);
// } else {
//     echo 'empty $roundarray';
// }

// echo "================================================================<br />";
// echo '================================================================<br />';

// $nlvseu = new Filelog;
// $playerstats2 = $nlvseu->createLogArray('NL-vs-EU-stats.txt');
// // $playerstats2 = $nlvseu->createLogArray('test.txt');
// if (!empty($playerstats2)) {
//     $nlvseu->statTable($playerstats2);
// } else {
//     echo 'empty $roundarray';
// }

if (!empty($_POST)) {
    $logFile = new Filelog($_POST['logFile']);
    $result = $logFile->statTable();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File handling 7</title>
</head>

<body>
    <form action="<?php $_SERVER["PHP_SELF"] ?>" method="post">
        <label for="logFile">File</label>
        <select name="logFile" id="logFile">
            <option value="NL-vs-FIN-stats.txt">NL vs FIN</option>
            <option value="NL-vs-EU-stats.txt">NL vs EU</option>
        </select>
        <input type="submit" value="select">

    </form>
    <?= $result ?>
</body>

</html>