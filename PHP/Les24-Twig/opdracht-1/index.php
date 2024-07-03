<?php
require_once 'vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('./templates');
$twig = new \Twig\Environment($loader, []);

$page = $twig->load('page.html');

$animal = [
	'title' => 'Hallo!',
	'ptext' => 'Mijn naam is Nel de Beer.<br><br>
				Ik zit groep 7 van de basisschool "De Koalavrienden" en wil een spreekbeurt houden over beren.
				Daarom heb ik deze mooie website gemaakt, met hulp van mijn opa Henk de Beer.',
	'image' => [
		'url' => 'grizzly.jpg',
		'width' => '400',
		'alt' => 'grizzly'
	]
];

if (isset($_GET['page'])) {
	if ($_GET['page'] == 'ijsbeer') {
		$animal = [
			'title' => 'IJsbeer',
			'ptext' => 'De ijsbeer is zeer groot en krachtig. Mannetjes worden 2,3 tot 2,6 meter lang en wegen 300 tot 800 kilogram. Vrouwtjes zijn kleiner dan de mannetjes en worden 1,8 tot 2 meter lang en 150 tot 300 kilogram zwaar. De ijsbeer heeft een lange nek en een grote neus. Onder de vacht is de huid zwart, wat te zien is op de naakte delen zoals de neus en de lippen. De haren van de vacht zijn niet wit, maar doorzichtig en hol. De kleur van de vacht is, afhankelijk van de tijd van het jaar, lichtval en de hoeveelheid vuil in de vacht, gelig wit tot vuil grijs. Hij is waterafstotend en houdt de warmte van de zon vast. Daarnaast heeft de ijsbeer een dikke onderhuidse vetlaag, waarmee hij warmte vasthoudt. De ijsbeer heeft vliezen tussen zijn tenen, waardoor hij beter kan zwemmen. Zijn achterpoten gebruikt hij als een soort roer om mee te sturen. IJsberen hebben een kleine staart, ongeveer acht tot tien centimeter lang.',
			'image' => [
				'url' => '2409567-polar_bear_cub_1786691i.jpg',
				'width' => '500',
				'alt' => 'IJsbeer'
			]
		];
	} elseif ($_GET['page'] == 'grizzlybeer') {
		$animal = [
			'title' => 'Grizzlybeer',
			'ptext' => 'De grizzlybeer is na de Kodiakbeer de grootste ondersoort van Ursus arctos. Hij kan op zijn achterpoten staand een hoogte van 3 meter bereiken en tot 600 kg zwaar worden. De bouw van de beer is gericht op het zoeken en graven naar voedsel in de grond. De grizzlybeer heeft een zeer kenmerkende grote uitstekende spierbundel tussen de schouderbladen, die hem veel kracht in de voorpoten oplevert. Ook de nagels van de grizzlybeer zijn scherp en lang (zo\'n 10 cm), en geschikt om in de aarde mee te wroeten. De snuit van de grizzlybeer is vrij lang en heeft een gebogen vorm. De oren zijn vrij klein en rond.',
			'image' => [
				'url' => 'grizzly-bear5.jpg',
				'width' => '700',
				'alt' => 'IJsbeer'
			]
		];
	} elseif ($_GET['page'] == 'koala') {
		$animal = [
			'title' => 'Koala',
			'ptext' => 'De koala of buidelbeer (Phascolarctos cinereus) is een buideldier uit de familie koala\'s (Phascolarctidae) die voorkomt in het oosten van Australi&euml;. "Koala" komt uit het Dharuk, een uitgestorven aboriginaltaal die rond Sydney werd gesproken. Het zou zoiets betekenen als "drinkt niet", verwijzend naar het feit dat de koala zelden drinkt (zie onder). De koala, zoals vele andere inheemse Australische dieren, speelt een belangrijke rol in de aboriginal-mythe over het ontstaan van de wereld.',
			'image' => [
				'url' => 'koala-family-train.jpg',
				'width' => '500',
				'alt' => 'Koala'
			]
		];
	}
}

echo $page->render($animal);
