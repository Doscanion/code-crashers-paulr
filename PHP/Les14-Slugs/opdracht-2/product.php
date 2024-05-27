<?php

if (isset($_GET['id']) && !empty($_GET['id'])) {
	$id = $_GET['id'];
	echo $id;
} else {
	$id = 0;
	echo $id;
}

// In de praktijk zouden de productgegevens natuurlijk uit een database komen.
switch ($id) {
	case 'lords-of-waterdeep':
		$name = 'Lords of Waterdeep';
		$price = 39.99;
		$img = 'lords-of-waterdeep.jpg';
		break;
	case 'joking-hazard':
		$name = 'Joking Hazard';
		$price = 23.99;
		$img = 'joking-hazard.jpg';
		break;
	case 'arkham-horror':
		$name = 'Arkham Horror';
		$price = 43.99;
		$img = 'arkham-horror.jpg';
		break;
	case 'smash-up':
		$name = 'Smash Up';
		$price = 37.99;
		$img = 'smash-up.jpg';
		break;
	default:
		$name = 'Geen geldig product gekozen.';
		$price = 0.00;
		$img = 'no-product-found.png';
}


?>
<!DOCTYPE html>
<html lang="nl-NL">

<head>
	<base href="/Les14-Slugs/opdracht-2/" target="_self">
	<meta charset="UTF-8">
	<title>Productpagina</title>
	<link rel="stylesheet" href="./css/main.css">
</head>

<body>
	<div id="container">
		<?php include_once 'includes/nav.php'; ?>
		<section>
			<ul>
				<li><a href="./product/lords-of-waterdeep">Lords of Waterdeep</a></li>
				<li><a href="./product/joking-hazard">Joking Hazard</a></li>
				<li><a href="./product/arkham-horror">Arkham Horror</a></li>
				<li><a href="./product/smash-up">Smash Up</a></li>
			</ul>

		</section>
		<section>
			<h1><?= $name; ?></h1>
			<h2>€<?= $price; ?></h2>
			<img src="./images/<?= $img; ?>" alt="<?= $name; ?>">
		</section>
	</div>
</body>

</html>