<?php

class Cell {
	protected string $content;

	public function __construct(string $content) {
		$this->content = $content;
	}

	public function draw() {
		echo '<td>' . $this->content . '</td>';
	}
}
