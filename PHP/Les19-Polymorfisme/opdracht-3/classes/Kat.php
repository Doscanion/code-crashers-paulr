<?php
require_once './classes/Animal.php';

class Kat  extends Animal {
	use Felinae;
	protected string $species = 'kat';

	public function __construct() {
		parent::__construct();
	}
	// // Properties
	// private $species = 'kat';

	// // Magic methods
	// public function __construct() {
	// 	if (file_exists('images/' . $this->species . '.jpg')) {
	// 		echo '<img src="images/' . $this->species . '.jpg" alt="' . $this->species . '" title="' . $this->species . '">';
	// 	}
	// }
	// public function __call($method, $args) {
	// 	echo '<p>De ' . $this->species . ' kan de handeling "' . $method . '" niet uitvoeren.</p>';
	// }
	// public function __debugInfo() {
	// 	echo '<p>Een ' . $this->species . ' beschikt over de volgende handelingen:</p>';
	// 	echo '<ul>';
	// 	foreach (get_class_methods($this) as $value) {
	// 		echo '<li>' . $value . '</li>';
	// 	}
	// 	echo '</ul>';
	// }

	// // Normale methods
	// public function miauw() {
	// 	echo '<p>De ' . $this->species . ' miauwt zo luid dat alle buren wakker worden.</p>';
	// }
	// public function klim() {
	// 	echo '<p>De ' . $this->species . ' klimt in een hoge boom.</p>';
	// }
	// public function purr() {
	// 	echo '<p>De ' . $this->species . ' purrt omdat hij lekker geaaid wordt.</p>';
	// }
}
