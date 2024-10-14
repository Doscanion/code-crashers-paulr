<?php

require_once 'vendor/autoload.php';

use classes\Shop\Customer;

session_start();
/*
 *	In onderstaand blok code wordt een nieuwe customer aangemaakt en zijn winkelwagentje gevuld.
 */
$_SESSION['customer1'] = new Customer('Joris');
$_SESSION['customer1']->addToCart('krabpaal');			// Wordt toegevoegd met id 0
$_SESSION['customer1']->addToCart('kattengras');		// Wordt toegevoegd met id 1
$_SESSION['customer1']->addToCart('dode muis');			// Wordt toegevoegd met id 2
$_SESSION['customer1']->addToCart('chicky tuna');		// Wordt toegevoegd met id 3
$_SESSION['customer1']->removeFromCart(1);				// Product met id 1 wordt weggehaald
/* */

/*
 *	In onderstaand blok code wordt een nieuwe customer aangemaakt op basis van de eerste customer.
 *	De naam wordt vervolgens veranderd.
 */
$_SESSION['customer2'] = clone $_SESSION['customer1'];
$_SESSION['customer2']->setName('Thom');
$_SESSION['customer2']->addToCart('bolletje wol');
$_SESSION['customer2']->addToCart('vis in gelei');
$_SESSION['customer2']->removeFromCart(2);
/* */

?>
<!DOCTYPE html>
<html>

<head>
	<title>Webshop met katten producten</title>
	<style>
		body {
			font-family: Calibri, Verdana, sans-serif;
			font-size: 20px;
			background-color: khaki;
		}

		section {
			padding: 40px;
		}
	</style>
</head>

<body>
	<section>
		<?php
		echo $_SESSION['customer1'];
		?>
	</section>
	<section>
		<?php
		echo $_SESSION['customer2'];
		?>
	</section>
</body>

</html>