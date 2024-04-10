<?php
if (isset($_POST['submit'])) {
    function randomArray(int $x): array
    {
        $numbArray = [];
        for ($i = 0; $i < $x; $i++) {
            $numbArray[] =  rand(1, 20);
        }
        return $numbArray;
    }

    function getEvenNumbers(array $array): array
    {
        $even = [];
        foreach ($array as $key => $value) {
            if ($value % 2 === 0) {
                $even[] = $value;
            }
        }
        if (!empty($even)) {
            $length = count($even);
            // $sum = null;
            // foreach ($even as $key => $value) {
            //     $sum += $value;
            // }
            $sum = array_sum($even);
            $average = $sum / $length;
        } else {
            $length = 0;
            $sum = 0;
            $average = 0;
        }
        return [$length, $sum, $average];
    }
}


?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functies 1 - 7</title>
</head>

<body>
    <form action="index.php" method="post">
        <label for="number">Number</label>
        <input type="number" min="1" name="number" id="number" required>
        <input type="submit" value="submit" name="submit">
    </form>

    <?php
    if (isset($_POST['number'])) {
        $numbArray = randomArray($_POST['number']);
        print_r($numbArray);
        [$length, $sum, $average] = getEvenNumbers($numbArray);
        echo '<p>Over de even getallen</p>';
    ?>
        <ul>
            <li><?= $length ?></li>
            <li><?= $sum ?></li>
            <li><?= $average ?></li>
        </ul>
    <?php
    }
    ?>
</body>

</html>