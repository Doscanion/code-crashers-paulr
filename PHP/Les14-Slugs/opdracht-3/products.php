<?php

	session_start();
	require_once ('scripts/sections.php');
	require_once ('scripts/functions.php');

	date_default_timezone_set('CET');
		
?>

<!DOCTYPE html>
<html lang="nl-NL"> 
	<head>
		<?php postMeta(); ?>
		<title>Webshop voor katten - producten</title>
	</head>
	<body>
		<div id="container">
			<?php postHeader(); ?>
			<main>
				<?php echo show_product_list(); ?>
			</main>
			<?php postFooter(); ?>
		</div>	
	</body>
</html>