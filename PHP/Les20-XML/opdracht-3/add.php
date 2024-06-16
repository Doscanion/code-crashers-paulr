<?php
$xml = new SimpleXMLElement('xml/webshop.xml', 0, true);

$xbox = $xml->category[0]->products->addChild('product');
$xbox->addAttribute('id', '0104');
$xbox->addChild('name', 'Xbox One');
$xbox->addChild('price', '279.95')->addAttribute('cur', 'euro');

$xml->asXML('xml/webshop.xml');
