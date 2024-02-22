<?php
    class User {
        
        private $name;
        private $email;
        private $age;
        
        public function __construct($name, $email) {
            $this->name = $name;
            $this->email = $email;
            $this->age = 0;
        }
                
        public function getName() {
            return $this->name;
        }

        public function getEmail() {
            return $this->email;
        }

        public function getAge() {
            return $this->age;
        }

        public function setName($name) {
            $this->name = $name;
        }

        public function setEmail($email) {
            $this->email = $email;
        }

        public function setAge($age) {
            $this->age = $age;
        }
    }
?>