<?php
$xml = new SimpleXMLElement('xml/webshop.xml', 0, true);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XML 3</title>
</head>

<body>
    <?php
    $list = '';
    foreach ($xml->children() as $categorykey => $catergory) {
        $list .= '<ul>';
        foreach ($catergory->products->children() as $productkey => $product) {
            $list .= '<li>' . $product->name . ' ' .  $product->price . ' ' . $product->price['cur'] . '</li>';
        }
        $list .= '</ul>';
    }
    echo $list;
    ?>
</body>

</html>