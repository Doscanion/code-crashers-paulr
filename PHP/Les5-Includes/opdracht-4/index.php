<?php
require_once('includes/menu.php');

function orderArray($a, $b)
{
    return $a['order'] - $b['order'];
}
usort($menu, 'orderArray')
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <header>
        </header>
        <nav style="display: flex; gap: 2px;">
            <?php
            foreach ($menu as $key => $value) {
                if ($value['active']) {
            ?>

                    <a style="padding: 10px; align-text: center;  background-color: bisque" href="<?= $value['text'] ?>" title="<?= $value['text'] ?>" target="<?= $value['target'] ?>"><?= $value['text'] ?></a>
            <?php
                }
            }
            ?>
        </nav>
        <article></article>
    </div>
</body>

</html>