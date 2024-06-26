<?php

class Employee {
    public $employeeId;
    public $tieColor;

    public function __construct($employeeId, $tieColor) {
        $this->employeeId = $employeeId;
        $this->tieColor = $tieColor;
    }

    public function getEmployeeId() {
        return $this->employeeId;
    }

    public function setEmployeeId($employeeId) {
        $this->employeeId = $employeeId;
    }

    public function getTieColor() {
        return $this->tieColor;
    }

    public function setTieColor($tieColor) {
        $this->tieColor = $tieColor;
    }


    public function __serialize() {
        //string name of the properties
        return [
            'employeeId' => $this->employeeId,
            'tieColor' => $this->tieColor
        ];
    }

    public function __unserialize(array $data): void {
        if (!empty($data['employeeId'])) {
        }
    }


    public function __toString() {
        return $this->employeeId . ' ' . $this->tieColor;
    }
}
