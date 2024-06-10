<?php

class Table {
	private array $rows;

	public function __construct() {
		$this->rows = array();
	}

	public function append(Row $row) {
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
