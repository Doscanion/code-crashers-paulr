<?php
$hoogste_kerktorens = [
    ['naam' => 'Domtoren', 'plaats' => 'Utrecht', 'hoogte' => 112.32, 'voltooid' => 1382],
    ['naam' => 'Grote Kerk', 'plaats' => 'Breda', 'hoogte' => 97.3, 'voltooid' => 1547],
    ['naam' => 'Martinitoren', 'plaats' => 'Groningen', 'hoogte' => 96.8, 'voltooid' => 1548],
    ['naam' => 'Nieuwe Kerk', 'plaats' => 'Delft', 'hoogte' => 108.75, 'voltooid' => 1496],
    ['naam' => 'Onze Lieve Vrouwetoren', 'plaats' => 'Amersfoort', 'hoogte' => 98.33, 'voltooid' => 1470],
    ['naam' => 'Sint-Vituskerk', 'plaats' => 'Hilversum', 'hoogte' => 98.3, 'voltooid' => 1892]
];


// function sortHeight($a, $b) {
//     return $a['hoogte'] - $b['hoogte'];
// }

// function sortHeightReverse($a, $b) {
//     return $b['hoogte'] - $a['hoogte'];
// }

// function sortString($a, $b) {
//     return $a['hoogte'] - $b['hoogte'];
// }

// function sortStringReverse($a, $b) {
//     return $b['hoogte'] - $a['hoogte'];
// }

function sortOption(string $option, bool $bool) {
    if ($bool) {
        return function ($a, $b) use ($option) {
            if (!is_float($a[$option])) {
                return strcmp($a[$option], $b[$option]);
            } else {
                return $a[$option] <=> $b[$option];
            }
        };
    } else {
        return function ($a, $b) use ($option) {
            if (!is_float($a[$option])) {
                return strcmp($b[$option], $a[$option]);
            } else {
                return $b[$option] <=> $a[$option];
            }
        };
    }
}



if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['sortOption'])) {
    $sortOption = $_POST['sortOption'];

    switch ($sortOption) {
        case 'heightsort':
            usort($hoogste_kerktorens, sortOption('hoogte', true));
            break;
        case 'heightrsort':
            usort($hoogste_kerktorens, sortOption('hoogte', false));
            break;
        case 'namesort':
            usort($hoogste_kerktorens, sortOption('naam', true));
            break;
        case 'namersort':
            usort($hoogste_kerktorens, sortOption('naam', false));
            break;
        case 'placesort':
            usort($hoogste_kerktorens, sortOption('plaats', true));
            break;
        case 'placersort':
            usort($hoogste_kerktorens, sortOption('plaats', false));
            break;
        case 'finishsort':
            usort($hoogste_kerktorens, sortOption('voltooid', true));
            break;
        case 'finishrsort':
            usort($hoogste_kerktorens, sortOption('voltooid', false));
            break;
        default:
            // Default sorting option or no option selected
            break;
    }
} else {
    usort($hoogste_kerktorens, sortOption('hoogte', true));
}






function makeTable(array $multiArray): string {
    $table = '<table>';
    $table .= '<tr><th>Name</th><th>Place</th><th>Height</th><th>Finished</th></tr>';

    foreach ($multiArray as $key => $value) {
        $table .= '<tr>';
        $table .= '<td>' . $value['naam'] . '</td>';
        $table .= '<td>' . $value['plaats'] . '</td>';
        $table .= '<td>' . $value['hoogte'] . '</td>';
        $table .= '<td>' . $value['voltooid'] . '</td>';
        $table .= '</tr>';
    }
    $table .= '</table>';
    return $table;
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functies-2 4</title>
</head>

<body>
    <form action="<?php htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="post">
        <select name="sortOption" id="sortOption">
            <option value="heightsort">Height (low)</option>
            <option value="heightrsort">Height (high)</option>
            <option value="namesort">Name (low)</option>
            <option value="namersort">Name (high)</option>
            <option value="placesort">Place (low)</option>
            <option value="placersort">Place (high)</option>
            <option value="finishsort">Finished (low)</option>
            <option value="finishrsort">Finished (high)</option>
        </select>
        <input type="submit" value="Submit">
    </form>
    <?php

    echo makeTable($hoogste_kerktorens);

    ?>
</body>

</html>