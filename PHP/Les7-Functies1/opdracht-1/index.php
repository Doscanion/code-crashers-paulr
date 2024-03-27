<?php
function delen(int $x, int $y)
{
    return round($x / $y);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <input type="number" readonly value="<?php echo delen(54, 7); ?>">
    <input type="number" readonly value="<?php echo delen(75, 3); ?>">
    <input type="number" readonly value="<?php echo delen(122, 3); ?>">
</body>

</html>