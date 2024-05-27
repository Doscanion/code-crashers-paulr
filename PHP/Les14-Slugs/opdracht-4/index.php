<?php
require_once 'includes/pages.php';

if (isset($_GET['page']) && !empty($_GET['page'])) {
	if (array_key_exists($_GET['page'], $pages)) {
		$page = $_GET['page'];
	} else {
		$page = 'notfound';
	}
} else {
	$page = 'home';
}

if (isset($_GET['lang']) && !empty($_GET['lang'])) {
	if (array_key_exists($_GET['lang'], $pages[$page]['title'])) {
		$lang = $_GET['lang'];
	} else {
		/* Als de taal niet bestaat wordt automatisch Nederlands gepakt */
		$lang = 'nl';
	}
} else {
	$lang = 'nl';
}
//Test
echo !empty($_GET['lang']) ? $_GET['lang'] : 'GET lang is empty';
?>
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title><?= $pages[$page]['title'][$lang]; ?></title>
	<base href="http://ccphp/Les14-Slugs/opdracht-4/" target="_self">
	<link rel="stylesheet" href="./css/main.css">
</head>

<body>
	<nav>
		<a href="./<?php echo !empty($_GET['page']) ? $_GET['page'] : 'home'  ?>/nl"><img src="./images/nl.png" alt="nl"></a>
		<a href="./<?php echo !empty($_GET['page']) ? $_GET['page'] : 'home'  ?>/en"><img src="./images/gb.png" alt="en"></a>
		<a href="./<?php echo !empty($_GET['page']) ? $_GET['page'] : 'home'  ?>/pl"><img src="images/pl.png" alt="pl"></a>
	</nav>
	<div id="container">
		<ul>
			<li><a href="./home/<?php echo !empty($_GET['lang']) ? $_GET['lang'] : 'nl' ?>">Home</a></li>
			<li><a href="./about/<?php echo !empty($_GET['lang']) ? $_GET['lang'] : 'nl' ?>">About</a></li>
			<li><a href="./info/<?php echo !empty($_GET['lang']) ? $_GET['lang'] : 'nl' ?>">Info</a></li>
			<li><a href="./contact/<?php echo !empty($_GET['lang']) ? $_GET['lang'] : 'nl' ?>">Contact</a></li>
		</ul>
		<section>
			<h1><?= $pages[$page]['title'][$lang]; ?></h1>
			<p><?= $pages[$page]['content'][$lang]; ?></p>
		</section>
	</div>
</body>

</html>