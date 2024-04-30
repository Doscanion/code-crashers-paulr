<?php
$html = '<html>
<head>
    <meta charset="UTF-8">
    <title>Mijn titel</title>
    <meta name="description" content="Reguliere expressies">
</head>
<body>
    <div id="container">
        <h1>Reguliere expressies zijn cool</h1>
        <p>Wist je dat: 1+1=2?</p>
    </div>
</body>
</html>';

preg_match_all('/>(.+?)</', $html, $contents);


preg_match_all('/="(.+?)"/', $html, $attributes);

preg_match_all('/<([A-Za-z][^\s>\/]*)/', $html, $tags);

print_r($tags[1]);



print_r($attributes[1]);
print_r($contents[1]);



function createUl(array $array) {
    echo '<ul>';
    foreach ($array as $key => $value) {
        echo '<li>' . $value . '</li>';
    }
    echo '</ul>';
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regex-2 4</title>
</head>

<body>
    <?php
    echo '<h1>Tags</h1>';
    createUl($tags[1]);
    echo '<h1>Attributes</h1>';
    createUl($attributes[1]);
    echo '<h1>Contents</h1>';
    createUl($contents[1]);
    ?>
</body>

</html>