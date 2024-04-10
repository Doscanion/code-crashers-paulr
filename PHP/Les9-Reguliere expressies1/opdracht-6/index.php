<?php
$secret = 'di4ti8s70e1en15ge4h5ei6m7e95b6o7o8ds9ch0ap';
$bible = 'In the beginning God created the heaven and the earth.
And the earth was without form, and void; and darkness was upon the face of the deep.
And the Spirit of God moved upon the face of the waters.';




$letterArray = preg_split('/\d/', $secret, -1, PREG_SPLIT_NO_EMPTY);
$bibleWords = preg_split('/\s/', $bible, -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_OFFSET_CAPTURE)

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regex-1 6</title>
</head>

<body>
    <pre>
    <?php var_dump($letterArray); ?>
    </pre>
    <pre>
    <?php var_dump($bibleWords); ?>
    </pre>
</body>

</html>