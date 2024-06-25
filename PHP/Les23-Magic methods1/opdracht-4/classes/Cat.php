<?php
require_once 'Animal.php';

class Cat extends Animal {
    private bool $isDomesticated;

    public function __construct(bool $isDomesticated, $age, $color, $gender) {
        parent::__construct($age, $color, $gender);
        $this->isDomesticated = $isDomesticated;
    }

    public function setIsDomesticated($isDomesticated) {
        $this->isDomesticated = $isDomesticated;
    }

    public function getGender() {
        return $this->isDomesticated;
    }

    public function makeSound() {
        echo 'Meow<br>';
    }

    public static function __set_state($data) {
        $class_name = get_called_class();
        $isDomesticated = $data['isDomesticated'] ?? false;
        $age = $data['age'] ?? 0;
        $color = $data['color'] ?? '';
        $gender = $data['gender'] ?? '';

        // Instantiate the object with the restored state
        return new $class_name($isDomesticated, $age, $color, $gender);
    }
}
