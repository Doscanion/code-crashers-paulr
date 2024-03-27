<?php
	
	// In een realistisch scenario zouden deze productgegevens natuurlijk uit een database komen.
	// Op het moment hebben we dat echter nog niet gehad, dus tref je de gegevens 'hard coded' aan.
	function getInfo(): array {
		$gameInfo = array(
			'name' => 'Mass Effect Andromeda', 
			'description' => 'In Mass Effect Andromeda verken je het Andromeda stelsel, ongeveer 600 jaar na de eerste Mass Effect trilogie.', 
			'genre' => 'roleplaying game',
			'price' => 59.99,
			'releaseDate' => '21 maart 2017'
		);
		return $gameInfo;
	}
	
	$game = getInfo();
	
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Mass Effect Andromeda</title>
		<link rel="stylesheet" href="css/stylesheet.css">
	</head>
	<body>
		<div id="container">
			<table>
				<tr>
					<th colspan="2"><?= $game['name'] ?></th>
				</tr>
				<tr>
					<td>Omschrijving:</td>
					<td><?= $game['description'] ?></td>
				</tr>
				<tr>
					<td>Genre:</td>
					<td><?= $game['genre'] ?></td>
				</tr>
				<tr>
					<td>Prijs:</td>
					<td><?php echo '€' . str_replace('.', ',', $game['price']) ?></td>
				</tr>
				<tr>
					<td>Verwacht:</td>
					<td><?= $game['releaseDate'] ?></td>
				</tr>
			</table>
		</div>
	</body>
</html>