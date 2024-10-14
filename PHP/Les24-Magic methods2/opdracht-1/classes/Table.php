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

	private function tableCellCount() {
		$cellCount = 0;
		foreach ($this->rows as $row) {
			$cellCount += $row->rowCellCount();
		}
		return $cellCount;
	}

	public function __toString() {
		$table = '<table border="1">';
		foreach ($this->rows as $row) {
			$table .= $row->__toString();
		}
		$table .= '</table>';
		return $table;
	}

	public function __invoke() {
		return 'This table has ' . count($this->rows) .  ' rows and ' . $this->tableCellCount() . ' cells';
	}
}
