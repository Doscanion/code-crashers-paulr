<!DOCTYPE html>
<html lang="nl">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="./styles/style.css" />
	<script defer src="./js/javascript.js"></script>
	<title>Embed Index</title>
</head>

<body>
	<header><?php require_once(__DIR__ . '/includes/header.html'); ?> </header>
	<nav> <?php require_once(__DIR__ . '/includes/nav.html'); ?></nav>
	<main>
		<div class="main-slider">
			<img class="slider-arrow left-arrow" src="./img/arrow-left-1.svg" alt="Left" />
			<img class="slider-arrow right-arrow" src="./img/arrow-right-1.svg" alt="Right" />
			<p class="main-slider-info">
				Bekijk Beddengoed
				<img class="info-arrow" src="./img/arrow-right-1.svg" alt="Right" />
				<span class="slider-info-line"></span>
			</p>
		</div>
		<div class="main-info">
			<section class="triple-container">
				<article>
					<section class="triple-container-transparency">
						<p>Bekijk de nieuwste</p>
						<p>Lente Collectie</p>
					</section>
				</article>
				<article><iframe autoplay="0" width="100%" height="100%" src="./video/old.mp4" frameborder="0"></iframe></article>
				<article>
					<section class="triple-container-transparency">
						<p>Bekijk de online</p>
						<p>Brochure</p>
					</section>
				</article>
			</section>
			<section class="product-info">
				<div class="product-slider">
					<section class="product-slider-info">
						<p class="product-slider-large">Nieuw!</p>
						<h2 class="product-slider-title">BureauLamp Schijner 9001</h2>
						<p class="product-slider-text">De beste schijnlamp beschikbaar in ons assortiment. De lamp is zo sterk dat het over de 9000 gaat.</p>
						<a href="#" class="product-view">Meer Informatie</a>
					</section>
					<div class="product-slider-img"><img src="./img/lamp.jpg" alt="Lamp 9001" /></div>
					<img class="slider-arrow left-arrow" src="./img/arrow-left-1.svg" alt="Left" />
					<img class="slider-arrow right-arrow" src="./img/arrow-right-1.svg" alt="Right" />
				</div>
				<div class="product-review">
					<p class="review-title">Geweldig!</p>
					<p class="review-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique reprehenderit sint facilis earum quibusdam..
					</p>
					<p class="review-user">Karel de Grote / 60 - 70 jaar</p>
					<a href="#" class="review-more">Lees meer reviews</a>
				</div>
			</section>
		</div>
	</main>
	<footer><?php require_once(__DIR__ . '/includes/footer.html'); ?></footer>
</body>

</html>