<?php

// Meta

function postMeta() { ?>

	<link rel="shortcut icon" href="favicon.ico">
	<link type="text/css" rel="stylesheet" href="css/style.css">
	<meta name="keywords" content="webshop, katten">
	<meta name="description" content="Deze site is een website voor katten, Sensei: Tom Bartels">
	<meta name="author" content="Wieke Lemmens">
	<meta name="robots" content="index, follow">
	<meta name="language" content="dutch">
	<meta name="copyright" content="Wieke Lemmens">
	<meta name="rating" content="general">
	<meta name="reply-to" content="nyanmiauwnyan@gmail.com">
	<meta charset="utf-8">

<?php }

// Header

function postHeader() { ?>

	<header>
		<nav>
			<?php postMenu(); ?>
		</nav>
		<h1><a href="index">Webshop voor katten</a></h1>
		<div id="socialmedia">
			<a id="facebook" alt="facebook" href="https://www.facebook.com" target="_blank"></a>
			<a id="twitter" alt="twitter" href="https://www.twitter.com" target="_blank"></a>
			<a id="googleplus" alt="googleplus" href="https://www.google.com/+" target="_blank"></a>
		</div>
	</header>

<?php }

// Menu

function postMenu() {

	$menu = array(
		'home' => 'index',
		'table' => 'table',
		'contact' => 'contact',
		'products' => 'products'
	);

	$buttonWidth = (1000 / count($menu) - 10);
	echo '<ul class="nav-list">';
	foreach ($menu as $key => $value) {
		$f = explode('/', $_SERVER['SCRIPT_FILENAME']);
		echo '<li class="nav-item">';
		echo '<a class="nav-link';
		if ($f[count($f) - 1] == $value) {
			echo ' current';
		}
		echo '" style="width: ' . $buttonWidth . 'px" href=" ' . $value . ' " >' . ($key) . '</a></li>';
	}
	echo '</ul>';
}

// Footer

function postFooter() { ?>

	<footer>
		<div class="footer">
			<section>
				<div>
					<div id="copyright">
						<span>&reg; Wieke Lemmens 2016 - <?= date("F") . ' IP: ' . $_SERVER['REMOTE_ADDR']; ?></span>
					</div>
				</div>
			</section>
		</div>
	</footer>

<?php }

?>