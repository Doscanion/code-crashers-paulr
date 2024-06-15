<?php
require_once './classes/Drawable.php';

class Cell implements Drawable {
	protected string $content;

	public function __construct(string $content) {
		$this->content = $content;
	}

	public function draw() {
		echo '<td>' . $this->content . '</td>';
	}
}
