<?php

require_once './classes/Drawable.php';
require_once './classes/Appendable.php';


class Table implements Drawable, Appendable {
	private array $rows;

	public function __construct() {
		$this->rows = array();
	}

	public function append($row) {
		$this->rows[] = $row;
	}

	public function draw() {
		echo '<table border="1">';
		foreach ($this->rows as $row) {
			$row->draw();
		}
		echo '</table>';
	}
}
