<?php

class Human extends Animal {
    public string $breed;

    public function getEduction(): string {
        return $this->breed;
    }

    public function setEduction(string $breed) {
        $this->breed;
    }

    public function bork() {
        echo 'bork';
    }
}
