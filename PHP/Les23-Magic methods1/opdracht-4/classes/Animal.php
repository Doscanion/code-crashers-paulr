<?php
abstract class Animal {
    protected $age;
    protected $color;
    protected $gender;

    public function __construct($age, $color, $gender) {
        $this->age = $age;
        $this->color = $color;
        $this->gender = $gender;
    }

    public function getAge() {
        return $this->age;
    }

    protected function setAge($age) {
        $this->age = $age;
    }

    public function getColor() {
        return $this->color;
    }

    protected function setColor($color) {
        $this->color = $color;
    }

    public function getGender() {
        return $this->gender;
    }

    protected function setGender($gender) {
        $this->gender = $gender;
    }

    public function celebrateBirthDay() {
        $this->age++;
        $this->makeSoundNTimes($this->age);
    }

    protected abstract function makeSound();

    private function makeSoundNTimes($n) {
        for ($i = 0; $i < $n; $i++) {
            $this->makeSound();
        }
    }

    private function unlist(array $properties) {
        $html = '<ul>';

        // Properties
        foreach ($properties as $key => $value) {
            $html .= '<li>' . $key . ': ' . $value . '</li>';
        }

        $methods = get_class_methods($this);

        foreach ($methods as $key => $value) {
            $html .= '<li>' . $key . ': ' . $value . '</li>';
        }

        $html .= '</ul>';
        echo $html;
        return $properties;
    }

    //Can only return a array
    public function __debugInfo() {
        $properties = [];
        if (!empty($this->age)) {
            $properties['age'] = $this->age;
        }

        if (!empty($this->color)) {
            $properties['color'] = $this->color;
        }

        if (!empty($this->gender)) {
            $properties['gender'] = $this->gender;
        }
        return $this->unlist($properties);
    }
}

/*
 * Wanneer je de methode makeSound van de klasse Animal abstract maakt kunnen er
 * geen objecten meer van het type Animal aangemaakt worden. Hiermee kun je dus
 * afdwingen dat er specifiekere klassen gemaakt moeten worden. De abstracte
 * klasse dient kan nog wel als basis dienen voor de andere klassen.
 * 
 * Wanneer je de methode makeSoundNTimes($n) in de klasse Fish zet krijg je een
 * foutmelding die aangeeft dat er een abstracte methode wordt aangeroepen (Fish
 * verwijst nu namelijk expliciet naar de methode makeSound van Animal). Het is
 * echter niet mogelijk een abstracte methode aan te roepen omdat die geen body
 * heeft.
 * Wanneer je de functie makeSoundNTimes($n) in de klasse Animal private maakt
 * kan deze niet meer worden overschreven door de klasse Fish. Hierdoor wordt
 * niet meer explicit (d.m.v. parent::makeSound()) verwezen naar de methode 
 * makeSound() van Animal. Omdat Fish de methode makeSound overschrijft wordt
 * uiteindelijk weer de methode makeSound van de klasse Fish aangeroepen en
 * verschijnen er Blubs op de pagina.
 */