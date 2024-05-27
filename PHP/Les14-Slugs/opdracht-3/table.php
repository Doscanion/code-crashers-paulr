<?php

	session_start();
	require_once ('scripts/sections.php');
	require_once ('scripts/functions.php');

	date_default_timezone_set('CET');

	$number1 = rand(1000,9999);
	$number2 = rand(1000,9999);
	$number3 = rand(1000,9999);
	$number4 = rand(1000,9999);
	$number5 = rand(1000,9999);
	$number6 = rand(1000,9999);
	
	$numbers = $number1 + $number2 + $number3 + $number4 + $number5 + $number6;
					
?>

<!DOCTYPE html>
<html lang="nl-NL"> 
	<head>
		<?php postMeta(); ?>
		<title>Webshop voor katten - tabel</title>
	</head>
	<body>
		<div id="container">
			<?php postHeader(); ?>
			<main>
				<table class="table">
					<caption>Table</caption>
					<tr>
						<th>Random Number</th>
						<th>All Numbers +</th>
						<th>Random Number</th>
					</tr>
					<tr>
						<td><?= $number1 ?></td>
						<td id="tdbig" rowspan="3"><?= $numbers ?></td>
						<td><?= $number2 ?></td>
					</tr>
					<tr>
						<td><?= $number3 ?></td>
						<td><?= $number4 ?></td>
					</tr>
					<tr>
						<td><?= $number5 ?></td>
						<td><?= $number6 ?></td>
					</tr>
				</table>
			</main>
			<?php postFooter(); ?>
		</div>	
	</body>
</html>