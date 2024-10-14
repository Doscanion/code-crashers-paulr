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


    public function __serialize() {
        //string name of the properties
        return [
            'username' => $this->username,
            'age' => $this->age,
            'email' => $this->email,
            'nationality' => $this->nationality,
        ];
    }

    public function __unserialize(array $data): void {
        $this->tempKey = uniqid();
        if (!empty($data['username']) && !empty($data['age']) && !empty($data['email']) && !empty($data['nationality'])) {
            $this->username = $data['username'];
            $this->age = $data['age'];
            $this->email = $data['email'];
            $this->nationality = $data['nationality'];
        }
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
