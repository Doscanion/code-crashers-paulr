<?php
require_once 'Animal.php';

class Fish extends Animal {

    private bool $hasScales;

    public function __construct(bool $hasScales, $age, $color, $gender) {
        parent::__construct($age, $color, $gender);
        $this->hasScales = $hasScales;
    }

    public function setHasScales($hasScales) {
        $this->hasScales = $hasScales;
    }

    public function getGender() {
        return $this->hasScales;
    }

    public function makeSound() {
        echo 'Blub<br>';
    }

    public function makeSoundNTimes($n) {
        for ($i = 0; $i < $n; $i++) {
            parent::makeSound();
        }
    }

    public static function __set_state($data) {
        $class_name = get_called_class();
        $hasScales = $data['hasScales'] ?? false;
        $age = $data['age'] ?? 0;
        $color = $data['color'] ?? '';
        $gender = $data['gender'] ?? '';

        // Instantiate the object with the restored state
        return new $class_name($hasScales, $age, $color, $gender);
    }
}
