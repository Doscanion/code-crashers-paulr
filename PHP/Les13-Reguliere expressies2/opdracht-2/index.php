<?php
$message1 = 'I will be interviewed by @MariaBartiromo at 10:00 A.M. on @FoxNews. Thank you!';
$message2 = 'Great Rally and fantastic job on @ffweekend this morning. It is all happening! #MAGA';

$userArray = preg_replace('/@\b([A-Za-z0-9_]+)\b/', '<a href="https://twitter.com/$1">$1</a>', $message1);
$userArray2 = preg_replace('/#\b([A-Za-z0-9_]+)\b/', '<a href="https://twitter.com/hashtag/$1?src=hashtag_click">$1</a>', $message2);



ahrefTwitter($message1);
ahrefTwitter($message2);


function ahrefTwitter($message) {
    $userArray = preg_replace('/@\b([A-Za-z0-9_]+)\b/', '<a href="https://twitter.com/$1">$1</a>', $message);
    $userArray2 = preg_replace('/#\b([A-Za-z0-9_]+)\b/', '<a href="https://twitter.com/hashtag/$1?src=hashtag_click">$1</a>', $userArray);
    print_r($userArray2);
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regex-2 2</title>
</head>

<body>

</body>

</html>