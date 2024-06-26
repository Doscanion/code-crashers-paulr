<?php

class User {
    public $username;
    public $age;
    public $email;
    public $nationality;
    public $tempKey;

    public function __construct($username, $age, $email, $nationality, $tempKey) {
        $this->username = $username;
        $this->age = $age;
        $this->email = $email;
        $this->nationality = $nationality;
        $this->tempKey = $tempKey;
    }


    public function __sleep() {
        //string name of the properties
        return ['username', 'age', 'email', 'nationality'];
    }

    public function __wakeup() {
        $this->tempKey = uniqid();
    }


    public function __toString() {
        $ul = '<ul>';
        $ul .= '<li>' . $this->username . '</li>';
        $ul .= '<li>' . $this->age . '</li>';
        $ul .= '<li>' . $this->email . '</li>';
        $ul .= '<li>' . $this->nationality . '</li>';
        $ul .= '<li>' . $this->tempKey . '</li>';
        $ul .= '</ul>';
        return $ul;
    }
}
