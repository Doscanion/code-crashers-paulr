<?php

class Office {
    public string $location;
    public string $sector;
    public array $employees;

    public function __construct($location, $sector) {
        $this->location = $location;
        $this->sector = $sector;
        $this->employees = [];
    }

    public function getLocation() {
        return $this->location;
    }

    public function setLocation($location) {
        $this->location = $location;
    }

    public function getSector() {
        return $this->sector;
    }

    public function setSector($sector) {
        $this->sector = $sector;
    }

    public function getEmployees() {
        return $this->employees;
    }

    public function setEmployees($employees) {
        $this->employees = $employees;
    }

    public function __clone() {
        $this->employees = array_map(function ($employee) {
            return clone $employee;
        }, $this->employees);
    }

    public function __debugInfo() {
        $properties = [];
        if (!empty($this->location)) {
            $properties['location'] = $this->location;
        }

        if (!empty($this->sector)) {
            $properties['sector'] = $this->sector;
        }

        if (!empty($this->employees)) {
            $properties['employees'] = $this->employees;
        }
        return $properties;
    }

    public function changeTieColor(string $color) {
        foreach ($this->employees as $employee) {
            $employee->setTieColor($color);
        }
    }
}
