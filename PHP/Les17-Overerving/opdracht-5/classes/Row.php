<?php

class Row {
	private array $cells;

	public function __construct() {
		$this->cells = array();
	}

	public function append(Cell $cell) {
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
