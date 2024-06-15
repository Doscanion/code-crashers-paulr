<?php

require_once './classes/Drawable.php';
require_once './classes/Appendable.php';


class Row implements Drawable, Appendable {
	private array $cells;

	public function __construct() {
		$this->cells = array();
	}

	public function append($cell) {
		$this->cells[] = $cell;
	}

	public function draw() {
		echo '<tr>';
		foreach ($this->cells as $cell) {
			$cell->draw();
		}
		echo '</tr>';
	}
}
