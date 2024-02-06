<?php
//America/Curacao
date_default_timezone_set('America/Curacao');
	$datum = date('d-m-Y');
	$tijd = date('H:i:s');
	$week = date('W');
	$maand= date('t');
	$am_or_pm = date('A');
	$gmt = date('P');
	$unix = date('U');
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Datum & Tijd</title>
		<style>
			html, body {
				font-family: Arial, sans-serif;
				font-size: 24px;
				color: brown;
				background-color: orange;
			}
		</style>
	</head>
	<body>
		<header>
			<p>Het is nu <?=$tijd;?> op <?=$datum;?>.</p>
		</header>
		<section>
			<p>Weeknummer: <?= $week ?>
			<p>Aantal dagen in de huidige maand: <?= $maand ?></p>
			<p>AM of PM?: <?= $am_or_pm ?></p>
			<p>Verschil GMT en timezone: <?= $gmt ?></p>
			<p>Verstreken seconden sinds Unix epoch: <?= $unix ?></p>
		</section>
	</body>
</html>