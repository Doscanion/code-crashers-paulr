<?php
require('includes/index.php');
?>
<!DOCTYPE html>
<html lang="<?= $language; ?>">

<head>
    <title>Includes</title>
    <style>
        body {
            background-color: <?= $color; ?>;
        }
    </style>
</head>

<body>
    <section>
        <?php
        $languageCheck($language);
        ?>
    </section>
</body>

</html>