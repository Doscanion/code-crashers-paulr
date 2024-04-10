<?php
$gameArray = [
	[
		'name' => 'Red Dead Redemption 2',
		'release' => '26-10-2018',
		'console' => 'PlayStation 4',
		'price' => 59.99,
		'img' => 'images/9200000067180307.jpg'
	],
	[
		'name' => 'Ni No Kuni II: Revenant Kingdom',
		'release' => '23-03-2018',
		'console' => 'PlayStation 4',
		'price' => 49.99,
		'img' => 'images/9200000053083967.jpg'
	],
	[
		'name' => 'Far Cry 5 - Deluxe Edition',
		'release' => '27-03-2018',
		'console' => 'PlayStation 4',
		'price' => 59.99,
		'img' => 'images/9200000078668488.jpg'
	],
	[
		'name' => 'Injustice 2 - Legendary Edition',
		'release' => '29-03-2018',
		'console' => 'PlayStation 4',
		'price' => 59.99,
		'img' => 'images/9200000090287767.jpg'
	],
	[
		'name' => 'The Lost Child',
		'release' => '30-03-2018',
		'console' => 'PlayStation 4',
		'old-price' => 59.99,
		'price' => 49.99,
		'img' => 'images/9200000084844101.jpg'
	],
	[
		'name' => 'Biomutant',
		'release' => '31-12-2018',
		'console' => 'PlayStation 4',
		'price' => 49.99,
		'img' => 'images/9200000082972427.jpg'
	],
	[
		'name' => 'Dark Souls Remastered',
		'release' => '25-05-2018',
		'console' => 'PlayStation 4',
		'old-price' => 49.99,
		'price' => 39.99,
		'img' => 'images/9200000088311502.jpg'
	],
	[
		'name' => 'Attack on Titan 2 - A.O.T. 2',
		'release' => '30-03-2018',
		'console' => 'PlayStation 4',
		'price' => 59.99,
		'img' => 'images/9200000088397115.jpg'
	],
];

function compareByName($a, $b)
{
	return strcmp($a['name'], $b['name']);
}

function compareByNameReverse($a, $b)
{
	return -strcmp($a['name'], $b['name']);
}

?>

<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>PlayStation 4</title>
	<link rel="stylesheet" href="css/stylesheet.css">
	<script src="https://use.fontawesome.com/a1d6f5445a.js"></script>
</head>

<body>
	<div id="container">
		<header>
			<ol class="breadcrumbs">
				<li>
					<a href="http://www.webshop.com"><span content="Home"><i class="fa fa-home"></i></span></a> >
				</li>
				<li>
					<a href="http://www.webshop.com/muziek-film-games"><span>Muziek, Film & Games</span></a> >
				</li>
				<li>
					<a href="http://www.webshop.com/games"><span>Games</span></a> >
				</li>
				<li>
					<span>PlayStation 4</span>
				</li>
			</ol>
		</header>
		<main>
			<form action="<?= htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="get">
				<select id="limit" name="limit">
					<option value="2">2</option>
					<option value="4">4</option>
					<option value="6">6</option>
					<option value="8">8</option>
				</select>
				<div>
					<input type="radio" name="sort" id="oplopend" value="oplopend">
					<label for="oplopend">oplopend (A-Z)</label>
				</div>
				<div>
					<input type="radio" name="sort" id="aflopend" value="aflopend">
					<label for="aflopend">aflopend (Z-A)</label>
				</div>
				<input type="submit" value="submit">
			</form>
			<section>
				<h1>Videogames - PlayStation 4</h1>
				<p>
					Er is een groot aanbod in PlayStation 4 games. Elke game is divers en heeft unieke eigenschappen. Bedenk dus goed in wat voor game jij geïnteresseerd bent. In ons assortiment vind je games in verschillende genres van sport tot actie en van simulatie tot Role Playing Game (RPG). Exclusieve games voor de PlayStation 4 zijn Horizon Zero Dawn, Uncharted, Gran Turismo, InFamous, Killzone.
				</p>
			</section>
			<section id="products">
				<?php
				if (isset($_GET['limit']) && isset($_GET['sort'])) {
					$limit = $_GET['limit'];
					$sort = $_GET['sort'];

					$limit = preg_match('/^\d+$/', $limit) ? $limit : 4;
					$sort = in_array($sort, ['oplopend', 'aflopend']) ? $sort : 'oplopend';

					if ($sort === 'oplopend') {
						usort($gameArray, 'compareByName');
					} else {
						usort($gameArray, 'compareByNameReverse');
					}


					for ($i = 0; $i < $_GET['limit']; $i++) {
						$game = $gameArray[$i];
				?>
						<article>
							<span class="release"><?= $game['release'] ?></span>
							<img src="<?= $game['img'] ?>" alt="<?= $game['name'] ?> - <?= $game['console'] ?>" width="168" height="210">
							<span class="console"><?= $game['console'] ?></span>
							<span class="name"><?= $game['name'] ?></span>
							<span class="price"><?= isset($game['old-price']) ? '<del> € ' . $game['old-price'] . '</del> €' . $game['price'] : '€ ' . $game['price'] ?></span>
						</article>
					<?php
					}
				} else {
					foreach ($gameArray as $key => $value) {
					?>
						<article>
							<span class="release"><?= $value['release'] ?></span>
							<img src="<?= $value['img'] ?>" alt="<?= $value['name'] ?> - <?= $value['console'] ?>" width="168" height="210">
							<span class="console"><?= $value['console'] ?></span>
							<span class="name"><?= $value['name'] ?></span>
							<span class="price"><?= isset($value['old-price']) ? '<del> € ' . $value['old-price'] . '</del> €' . $value['price'] : '€ ' . $value['price'] ?></span>
						</article>
				<?php
					}
				}
				?>
			</section>
		</main>
	</div>
	<footer></footer>
</body>

</html>