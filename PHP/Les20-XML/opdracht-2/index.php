<?php
$xml = new SimpleXMLElement('xml/webshop.xml', 0, true);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XML 2</title>
</head>

<body>
    <?php
    echo $xml->category[2]->products->product[1]['id'] . ' ' . $xml->category[2]->products->product[1]->name . '<br>';
    echo $xml->category[0]->products->product[2]->price['cur'] . ' ' . $xml->category[0]->products->product[2]->price . '<br>';

    $list1 = '<ul>';
    foreach ($xml->category[2]->products->children() as $key => $value) {
        $list1 .= '<li>' . $value->name . '</li>';
    }
    $list1 .= '</ul>';
    echo $list1;

    $list2 = '<ul>';
    foreach ($xml->category[1]->products->children() as $key => $value) {
        $list2 .= '<li>' . $value->price . '</li>';
    }
    $list2 .= '</ul>';
    echo $list2;

    $list3 = '<ul>';
    foreach ($xml->category[1]->products->children() as $key => $value) {
        $list3 .= '<li>' . $value['id'] . '</li>';
    }
    $list3 .= '</ul>';
    echo $list3;

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