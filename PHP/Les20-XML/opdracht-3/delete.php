<?php
$xml = new SimpleXMLElement('xml/webshop.xml', 0, true);

// === does not work in this if
if ($xml->category[2]->products->product[0]->name == 'Brie') {
    unset($xml->category[2]->products->product[0]);
}

$xml->asXML('xml/webshop.xml');
