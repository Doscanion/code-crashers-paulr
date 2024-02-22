<?php
    function celebrateBirthDay($user) {
        $user->setAge($user->getAge()+1);
    }
    
    function addOne(&$number) {
        $number += 1;
    }
?>