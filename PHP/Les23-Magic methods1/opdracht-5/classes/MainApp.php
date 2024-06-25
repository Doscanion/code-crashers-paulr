<?php

class MainApp implements AppInterface {
	private string $content;

	public function index() {
		$this->content = '<h1>Welcome!</h1><p>Please make a choice by using the menu.</p>';
	}

	public function getContent() {
		return $this->content;
	}

	public function catalog() {
		$this->content = '<h1>Our products</h1><p>Please take a look at our products.</p>';
	}

	public function about() {
		$this->content = '<h1>About us</h1><p>A little story about us.</p>';
	}

	// Voeg hier de magic method __call() toe.
	public function __call($name, $arguments) {
		return 'This page ' . $name . ' does not exist';
	}
}
