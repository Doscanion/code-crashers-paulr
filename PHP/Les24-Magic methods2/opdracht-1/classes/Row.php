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

	public function rowCellCount() {
		return count($this->cells);
	}

	public function __toString() {
		$text =  '<tr>';
		foreach ($this->cells as $cell) {
			$text .= $cell->__toString();
		}
		$text .= '</tr>';

		return $text;
	}
}
