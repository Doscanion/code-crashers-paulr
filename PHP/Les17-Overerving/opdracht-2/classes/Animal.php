<?php

class Animal {
    protected int $age;

    public function __construct(int $age) {
        $this->age = $age;
    }

    public function getAge(): int {
        return $this->age;
    }

    public function setAge(int $age) {
        $this->age;
    }


    public function eat() {
        echo 'Nom nom nom';
    }

    public function celebrateBirthday() {

        echo $this->age += 1;
    }
}
