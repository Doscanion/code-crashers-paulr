<?php
require_once("includes/nav.php");
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Menubalken</title>
    <link rel="stylesheet" href="css/stylesheet.css">
</head>

<body>
    <div id="container">
        <header></header>
        <nav>
            <?php $menuCreate($menu) ?>
        </nav>
        <main></main>
        <footer></footer>
    </div>
</body>

</html>