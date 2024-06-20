<?php

namespace Organisms\Flora;

abstract class Plant {
	protected int $age;

	public function __construct(int $age) {
		$this->age = $age;
	}

	public function getAge(): int {
		return $this->age;
	}

	public function setAge(int $age) {
		$this->age = $age;
	}
}
