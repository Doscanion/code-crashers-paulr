<?php

$movies2018 = array("Venom", "Deadpol 2", "Solo: A Star Wars Story", "AQuiet Place", "Avengers: Infinity War", "Mandy", "Love Simon", "Inciddent in a Ghost Land");
sort($movies2018);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul>
        <?php

        foreach ($movies2018 as $key => $movie) {
            echo $movie === "Mandy" ? "<li><b> $movie </b></li>" : "<li> $movie </li>";
        }

        ?>
    </ul>
</body>

</html>