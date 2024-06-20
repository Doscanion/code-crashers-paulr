<?php

namespace Organisms\Flora;

class Bonsai extends Plant {
	private string $cultivator;

	public function __construct(int $age, string $cultivator) {
		parent::__construct($age);
		$this->cultivator = $cultivator;
	}

	public function getCultivator(): string {
		return $this->cultivator;
	}

	public function setCultivator(string $cultivator) {
		$this->cultivator = $cultivator;
	}

	public function whoAmI() {
		return 'I am a ' . (new \ReflectionClass($this))->getShortName() . ' of ' . $this->age . ' years old, cultivated by ' . $this->cultivator . '.';
	}
}
