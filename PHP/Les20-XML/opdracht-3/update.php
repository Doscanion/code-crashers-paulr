<?php
$xml = new SimpleXMLElement('xml/webshop.xml', 0, true);

$xml->category[1]->products->product[1]->price = '6,95';
$xml->category[2]->products->product[2]['id'] = '0306';

$xml->asXML('xml/webshop.xml');
