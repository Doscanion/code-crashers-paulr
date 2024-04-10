<?php
if (isset($_GET['panel-1']) && isset($_GET['panel-2']) && isset($_GET['panel-3'])) {
	$panel1 = preg_match('/^[1-8]$/', $_GET['panel-1']) ? $_GET['panel-1'] : 2;
	$panel2 = preg_match('/^[1-8]$/', $_GET['panel-2']) ? $_GET['panel-2'] : 3;
	$panel3 = preg_match('/^[1-8]$/', $_GET['panel-3']) ? $_GET['panel-3'] : 4;
} elseif (isset($_GET)) {
	$_GET['panel-1'] = random_int(1, 8);
	$_GET['panel-2'] = random_int(1, 8);
	$_GET['panel-3'] = random_int(1, 8);

	$panel1 = $_GET['panel-1'];
	$panel2 = $_GET['panel-2'];
	$panel3 = $_GET['panel-3'];
	header("Location: {$_SERVER['PHP_SELF']}?panel-1=$panel1&panel-2=$panel2&panel-3=$panel3");
}
?>

<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>Comic Generator</title>
	<link rel="stylesheet" href="css/stylesheet.css">
</head>

<body>
	<div id="container">
		<section class="comic">
			<div class="panel-1">
				<img src="images/panel-1-<?= $panel1 ?>.png" alt="panel 1" width="275" height="398">
			</div>
			<div class="panel-2">
				<img src="images/panel-2-<?= $panel2 ?>.png" alt="panel 2" width="275" height="398">
			</div>
			<div class="panel-3">
				<img src="images/panel-3-<?= $panel3 ?>.png" alt="panel 3" width="275" height="398">
			</div>
		</section>
		<form action="<?= htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="get">
			<div><label for="panel-1">Panel-1</label> <input type="number" name="panel-1" id="panel-1" minlength="1" maxlength="8" required></div>
			<div><label for="panel-2">Panel-2</label><input type="number" name="panel-2" id="panel-2" minlength="1" maxlength="8" required></div>
			<div><label for="panel-3">Panel-3</label><input type="number" name="panel-3" id="panel-3" minlength="1" maxlength="8" required></div>
			<input type="submit" value="submit">
		</form>
		<form action="<?= htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="get">
			<input type="submit" value="random">
		</form>
	</div>
</body>

</html>