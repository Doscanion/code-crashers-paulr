<?php
$x = 5;
$end = 10;
// for ($i = 1; $i < 10; $i++) {
//     $som = $x * $i;
//     echo <<<HTML
//     <tr>
//         <td>$i</td>
//         <td>x</td>
//         <td>$x</td>
//         <td>=</td>
//         <td>$som</td>
//     </tr>
//     HTML;
// }


?>

<!DOCTYPE html>
<html lang="en">
<style>
    table {
        border-collapse: collapse;
    }

    td {
        width: 50px;
        height: 20px;
        border: 1px solid black;
        text-align: center;

    }
</style>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>
        <table>
            <?php for ($i = 0; $i < $end + 1; $i++) {
                $som = $x * $i; ?>
                <tr>
                    <td><?= $i ?></td>
                    <td>x</td>
                    <td><?= $x ?></td>
                    <td>=</td>
                    <td><?= $som ?></td>
                </tr>
            <?php } ?>
        </table>
    </div>
</body>

</html>