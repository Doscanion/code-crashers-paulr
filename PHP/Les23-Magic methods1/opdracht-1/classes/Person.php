<?php
class Person {
	private string $firstName;
	private string $lastName;
	private array $data;



	// De getters en setters voor alle reeds gedefinieerde properties.
	public function getFirstName(): string {
		return $this->firstName;
	}

	public function setFirstName(string $firstName) {
		$this->firstName = $firstName;
	}

	public function getLastName(): string {
		return $this->lastName;
	}

	public function setLastName(string $lastName) {
		$this->lastName = $lastName;
	}

	// Method om de volledige naam te laten zien op het scherm.
	public function showFullName() {
		echo $this->firstName . ' ' . $this->lastName;
	}

	// De magic methods van deze class.
	public function __construct(string $firstName, string $lastName) {
		$this->firstName = $firstName;
		$this->lastName = $lastName;
		$data = [];
	}
	public function __set($name, $value) {
		$this->data[$name] = $value;
	}

	public function __get($name) {
		if (array_key_exists($name, $this->data)) {
			return $this->data[$name];
		}
	}

	public function __destruct() {
		echo '<p>__destruct ' . $this->firstName .  ' ' . $this->lastName . '</p>';
	}
}
