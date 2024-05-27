<?php

class User {
    public string $name;
    public string $password;
    public string $email;
    public int $age;
    public bool $active = true;



    public function getName(): string {
        return $this->name;
    }

    public function setName(string $name) {
        $this->name = $name;
    }



    public function getPassword(): string {
        return $this->password;
    }
    public function setPassword(string $password) {
        $this->password = $password;
    }



    public function getEmail(): string {
        return $this->email;
    }
    public function setEmail(string $email) {
        $this->email = $email;
    }



    public function getAge(): int {
        return $this->age;
    }
    public function setAge(int $age) {
        $this->age = $age;
    }



    public function getActive(): bool {
        return $this->active;
    }
    public function setActive(bool $active) {
        $this->active = $active;
    }

    public function __construct(string $name, string $password, string $email, int $age, bool $active) {
        $this->name = $name;
        $this->password = $password;
        $this->email = $email;
        $this->age = $age;
        $this->active = $active;
    }

    public function showData() {
        $backgcolor =  $this->active ? 'green' : 'red';
        $tableData = '<table style="background-color: ' . $backgcolor . '">';


        $tableData .= '<tbody>';

        $tableData .= '<tr><td>Naam</td><td>' . $this->name . '</td></tr>';
        $tableData .= '<tr><td>Wachtwoord</td><td>' . $this->password . '</td></tr>';
        $tableData .= '<tr><td>E-mailadres</td><td>' . $this->email . '</td></tr>';
        $tableData .= '<tr><td>Leeftijd</td><td>' . $this->age . '</td></tr>';

        $tableData .= '</tbody>';

        $tableData .= '</table>';

        return $tableData;
    }
}
