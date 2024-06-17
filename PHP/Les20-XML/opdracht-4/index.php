<?php
$xml = new SimpleXMLElement('fleetwoodmac.xml', 0, true);

if (!empty($_POST)) {
    try {
        $newAlbum = $xml->addChild('album');
        if (!empty($_POST['name'])) {
            $newAlbum->addChild('name', $_POST['name']);
        } else {
            throw new Exception("Name is empty");
        }
        if (!empty($_POST['year'])) {
            if (preg_match('/[0-9]{4}/', $_POST['year'])) {
                $newAlbum->addChild('year', $_POST['year']);
            } else {
                throw new Exception("Year is not 4 numbers");
            }
        } else {
            throw new Exception("Year is empty");
        }
        if (!empty($_POST['time'])) {
            if (preg_match('/^\d{2}:\d{2}$/', $_POST['time'])) {
                $newAlbum->addChild('time', $_POST['time']);
            } else {
                throw new Exception("Time is not mm:ss");
            }
        } else {
            throw new Exception("Time is empty");
        }
        if (!empty($_POST['numbers'])) {
            if ($_POST['numbers'] > 0) {
                $newAlbum->addChild('numbers', $_POST['numbers']);
            } else {
                throw new Exception("Numbers is not mm:ss");
            }
        } else {
            throw new Exception("Numbers is empty");
        }

        $songs = $newAlbum->addChild('songs');

        if (!empty($_POST['song1'])) {
            $songs->addChild('song', $_POST['song1']);
        } else {
            throw new Exception("Song 1 is empty");
        }
        if (!empty($_POST['song2'])) {
            $songs->addChild('song', $_POST['song2']);
        } else {
            throw new Exception("Song 2 is empty");
        }
        if (!empty($_POST['song3'])) {
            $songs->addChild('song', $_POST['song3']);
        } else {
            throw new Exception("Song 3 is empty");
        }
    } catch (Exception $e) {
        echo '<p>Error: ' . $e->getMessage() . '</p>';
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XML 4</title>
    <style>
        div {
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <form action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
        <div>
            <label for="name">Name</label>
            <input type="text" required id="name" name="name">
        </div>
        <div>
            <label for="year">Year - yyyy</label>
            <input type="text" required pattern="^[0-9]{4}$" id="year" name="year">
        </div>
        <div>
            <label for="time">Time - mm:ss</label>
            <input type="text" required pattern="^\d{2}:\d{2}$" id="time" name="time">
        </div>
        <div>
            <label for="numbers">Numbers</label>
            <input type="number" required id="numbers" name="numbers">
        </div>
        <div>
            <label for="song1">Song 1</label>
            <input type="text" required id="song1" name="song1">
        </div>
        <div>
            <label for="song2">Song 2</label>
            <input type="text" required id="song2" name="song2">
        </div>
        <div>
            <label for="song3">Song 3</label>
            <input type="text" required id="song3" name="song3">
        </div>
        <div>
            <input type="submit" value="Submit" name="submit">
        </div>
    </form>
    <?php
    $table = '<table>';
    $table .= '<tr><th>Album</th><th>Afspeeltijd</th><th>Nummers</th></tr>';
    foreach ($xml->children() as $albumkey => $album) {
        if ($album->getName() == 'album') {
            $table .= '<tr>';
            $table .= '<td>' . $album->name . ' (' . $album->year . ')'  . '</td>';
            $table .= '<td>' . $album->time .  ' minuten'  . '</td>';
            $table .= '<td>' . $album->numbers .  ', waaronder ';

            $arrayLength = count($album->songs->song);
            $length = 0;
            foreach ($album->songs->children() as $songkey => $song) {
                if ($length <= $arrayLength - 1) {
                    $table .= '"' . $song . '", ';
                } else {
                    $table .= '"' . $song . '"</td>';
                }
                $length++;
            }

            $table .= '</tr>';
        }
    }
    $table .= '</table>';

    echo $table;
    ?>
</body>

</html>