<?php
include 'brontekst.php';


$pattern = '/<h5 class="mt-20">Pizza (?!.*\bHawaii\b)([^<]+)<\/h5>\s*<h4 class="mt-5"><b>€([^<]+)<\/b>/';

preg_match_all($pattern, $source, $matches, PREG_SET_ORDER);

$pizzaArray = array();
foreach ($matches as $match) {
    $pizzaArray[] = array(
        'naam' => $match[1],
        'prijs' => $match[2]
    );
}

print_r($pizzaArray);


// preg_match_all('/(?<=<h5 class="mt-20">Pizza (?!.*\bHawaii\b))([^<]+)<\/h5>\s*<h4 class="mt-5"><b>€([^<]+)<\/b>/', $source, $pizzaArray);
// print_r($pizzaArray[0]);

// /(?<=<h5 class="mt-20">Pizza (?!.*\bHawaii\b))([^<]+)<\/h5>\s*(?<=<h4 class="mt-5"><b>)([^<]+)<\/b>/
// /<h4 class="mt-5"><b>([€0-9,.]+)<\/b>/

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regex-2 3</title>
</head>

<body>
    <?php
    echo "<table border='1'>";
    echo "<tr><th>Pizza</th><th>Prijs</th></tr>";
    foreach ($pizzaArray as $pizza) {
        echo "<tr>";
        echo "<td>" . $pizza['naam'] . "</td>";
        echo "<td>" . $pizza['prijs'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
    ?>
</body>

</html>