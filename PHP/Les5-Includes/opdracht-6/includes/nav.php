<?php

$menu = array(
    'Home',
    'News',
    'About' => ['General', 'History', 'Disclaimer'],
    'Contact',
    'Links'
);

$menuCreate = function ($menu) {
    echo '<ul>';
    foreach ($menu as $key => $value) {
        if (!is_array($value)) {
            // echo ' geen array ';
            if ($key !== 0) {
                echo ('<li><a href="#">' . $value . '</li>');
            } else {
                echo ('<li><a href="#" class="active">' . $value . '</li>');
            }
        } else {
            // echo ' array ';
            echo '<li><a href="#">' . $key . '</a><ul>';
            foreach ($value as $key2 => $value2) {
                echo ('<li><a href="#">' . $value2 . '</a></li>');
            }
            echo '</ul></li>';
        }
    }
    echo '</ul>';
};
