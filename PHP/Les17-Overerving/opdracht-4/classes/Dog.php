<?php

class Dog extends Animal {
    public string $breed;

    public function __construct(int $age, string $breed) {
        parent::__construct($age);
        $this->breed = $breed;
    }

    public function getEduction(): string {
        return $this->breed;
    }

    public function setEduction(string $breed) {
        $this->breed = $breed;
    }

    public function bork() {
        echo 'bork';
    }

    public function sayHello() {
        echo 'Woof';
    }
}
