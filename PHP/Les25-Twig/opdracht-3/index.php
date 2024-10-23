<?php
require_once 'vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('./templates');
$twig = new \Twig\Environment($loader, []);


$page = isset($_GET['page']) ? $_GET['page'] : 'home';
$id = isset($_GET['id']) ? $_GET['id'] : null;

$template;
$content;

$products = [
	'lords-of-waterdeep' => [
		'name' => 'Lords of Waterdeep',
		'price' => 39.99,
		'img' => 'lords-of-waterdeep.jpg',
	],
	'joking-hazard' => [
		'name' => 'Joking Hazard',
		'price' => 23.99,
		'img' => 'joking-hazard.jpg',
	],
	'arkham-horror' => [
		'name' => 'Arkham Horror',
		'price' => 43.99,
		'img' => 'arkham-horror.jpg',
	],
	'smash-up' => [
		'name' => 'Smash Up',
		'price' => 37.99,
		'img' => 'smash-up.jpg',
	],
];

switch ($page) {
	case 'contact':
		$template = 'homecontact.html.twig';
		$content = [
			'title' => 'Contact',
			'text' => 'U kunt contact met ons opnemen op <a href="mailto:info@webshop.nl">info@webshop.nl</a>.'
		];
		break;
	case 'product':
		if (array_key_exists($id, $products)) {
			$template = 'product.html.twig';
			$content = $products[$id];
		} else {
			$template = 'product.html.twig';
			$content = [
				'name' => 'Geen geldig product gekozen.',
				'price' => 0.00,
				'img' => 'no-product-found.png',
			];
		}
		break;
	default:
		$template = 'homecontact.html.twig';
		$content = [
			'title' => 'Welkom',
			'text' => 'Welkom op onze webshop.'
		];
		break;
}

echo $twig->render($template, ['content' => $content]);
