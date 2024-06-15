<?php
require_once './classes/Animal.php';

class Eekhoorn  extends Animal {
	use Sciuridae;
	protected string $species = 'eekhoorn';

	public function __construct() {
		parent::__construct();
	}
	// Properties
	// private $species = 'eekhoorn';

	// Magic methods
	// public function __construct(){
	// 	if (file_exists('images/'.$this->species.'.jpg')){
	// 		echo '<img src="images/'.$this->species.'.jpg" alt="'.$this->species.'" title="'.$this->species.'">';
	// 	}			
	// }
	// public function __call($method, $args){
	// 	echo '<p>De '.$this->species.' kan de handeling "'.$method.'" niet uitvoeren.</p>';
	// }
	// public function __debugInfo(){
	// 	echo '<p>Een '.$this->species.' beschikt over de volgende handelingen:</p>';
	// 	echo '<ul>';
	// 	foreach (get_class_methods($this) as $value){
	// 		echo '<li>'.$value.'</li>';
	// 	}
	// 	echo '</ul>';
	// }

	// // Normale methods
	// public function nestelen(){
	// 	echo '<p>De '.$this->species.' bouwt een nest van twijgen en mos.</p>';
	// }
	// public function knaag(){
	// 	echo '<p>De '.$this->species.' knaagt eten met zijn voortanden.</p>';
	// }		
	// public function klim(){
	// 	echo '<p>De '.$this->species.' klimt in een hoge boom.</p>';
	// }		
}
