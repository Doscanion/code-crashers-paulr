<?php
require_once('includes/menu.php');

function orderArray($a, $b)
{
    return $a['order'] - $b['order'];
}
// usort($menu, 'orderArray');

function makeMenu(array $menu): string{
    usort($menu, 'orderArray');

    $a = '';
    foreach($menu as $key => $value){
        if ($value['active']) {
            $a .= '<a style="padding: 10px; align-text: center;  background-color: bisque" href="' .$value['href'] . '" title="' . $value['text'] . '" target="' . $value['target'] . '">' . $value['text'].  '</a>';
        }
    }
    return $a;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functies 1</title>
</head>

<body>
    <div class="container">
        <header>
        </header>
        <nav style="display: flex; gap: 2px;">
            <?php
            echo makeMenu($menu)
            ?>
        </nav>
        <article></article>
    </div>
</body>

</html>