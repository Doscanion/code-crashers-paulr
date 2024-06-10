<?php

class Human extends Animal {
    public string $education;
    public string $job;

    public function __construct(int $age, string $education, string $job) {
        parent::__construct($age);
        $this->education = $education;
        $this->job = $job;
    }

    public function getEduction(): string {
        return $this->education;
    }

    public function setEduction(string $education) {
        $this->education;
    }

    public function getJob(): string {
        return $this->job;
    }

    public function setJob(string $job) {
        $this->job;
    }

    public function contemplateLife() {
        exit();
    }
}
