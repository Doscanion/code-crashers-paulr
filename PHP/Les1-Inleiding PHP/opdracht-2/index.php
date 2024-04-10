<?php
$A = 8;
$B = -2;
$C = 5.5;


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p><?php echo $A . ' + ' . $B . ' = ' . $A + $B; ?></p>
    <p><?php echo $A . ' - ' . $C . ' = ' . $A - $C ?></p>
    <p><?php echo $B . ' * ' . $C . ' = ' . $B * $C ?></p>
    <p><?php echo $A . ' / ' . $B . ' = ' . $A / $B ?></p>
    <p><?php echo '(' . $A . ' - ' . $B . ')' . ' * ' . $C .  ' = ' . ($A - $B) * $C ?></p>

</body>

</html>