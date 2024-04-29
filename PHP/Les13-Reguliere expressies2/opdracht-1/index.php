<?php
$text = 'Nap all day [cat] [dog] hate [mouse] eat string barf pillow no baths hate everything but [kitty] [poochy]. Sleep on keyboard toy [mouse] squeak roll over. Mesmerizing [birds]. Poop on grasses licks paws destroy couch intently sniff hand. The [dog] smells bad gnaw the corn cob.';

preg_match_all('/\[[A-Za-z]+\]/', $text, $test1);

var_dump($test1);

$text2 = 'Fa@!ll a@6sleep o1n the washi@n@g ma68chine hide whe5n gues73@ts come over s5ta*r4e at #gu#i$nea pigs yet% vo0m****6mi^t foo&d and e-at it7 aga><in ea&t8 an=+d than sl9ee4p 0on y~our face.';
$array2 = preg_replace('/[^A-Za-z\s]/', '', $text2);

var_dump($array2);

$text3 = 'Fooled again thinking the dog likes me missing until dinner time freak human out make funny noise mow mow mow mow mow mow success now attack human have secret plans. Plays league of legends meowing chowing and wowing need to chase tail or lick plastic bags but spend all night ensuring people dont sleep sleep all day or give me attention or face the wrath of my claws poop on grasses heck.';
preg_match_all('/\b[A-Za-z]{3,4}\b/', $text3, $array3);
print_r($array3);

$wordsArray = [];

foreach ($array3[0] as $word) {
    if (!in_array($word, $wordsArray)) {
        $wordsArray[] = $word;
    }
}

print_r($wordsArray);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regex-2 1</title>
</head>

<body>

</body>

</html>