<?php
require_once 'vendor/autoload.php';


$app = new MainApp();
$text = 'Welcome';
if (isset($_GET['action'])) {
	switch ($_GET['action']) {
		case 'index':
			$app->index();
			$text = $app->getContent();
			break;
		case 'catalog':
			$app->catalog();
			$text = $app->getContent();
			break;
		case 'about':
			$app->about();
			$text = $app->getContent();
			break;
		default:
			$app->__call($_GET['action'], null);
			break;
	}
} else {
	$text = $app->index();
	$text = $app->getContent();
}

?>

<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>Magic Methods</title>
	<style>
		body {
			font-family: Verdana, sans-serif;
			font-size: 24px;
			background-color: black;
			color: white;
		}

		section {
			margin: 100px 0;
		}

		nav a,
		footer a {
			color: khaki;
		}
	</style>
</head>

<body>
	<nav>
		<p><a href="index">Home</a> | <a href="catalog">Our products</a> | <a href="about">About us</a> | <a href="contact">Contact</a></p>
	</nav>
	<section>
		<?php

		echo $text;

		?>
	</section>
	<footer>
		<p>© Tom Bartels <?= date('Y'); ?> - <a href="?action=privacy">Privacy Disclaimer</a></p>
	</footer>
</body>

</html>