<?php
require_once 'vendor/autoload.php';

if (file_exists('userlist.txt')) {
    $contents = file_get_contents('userlist.txt');
    $users = explode(PHP_EOL, $contents);
    $html = '';
    foreach ($users as $user) {
        if (!empty($user)) {
            $unserialUser = unserialize($user);
            $html .= '<p>';
            $html .= 'username: ' . $unserialUser->username . ' ';
            $html .= 'age: ' . $unserialUser->age . ' ';
            $html .= 'email: ' . $unserialUser->email . ' ';
            $html .= 'nationality: ' . $unserialUser->nationality . ' ';
            $html .= 'tempKey: ' . $unserialUser->tempKey;
            $html .= '</p>';
        }
    }
    echo $html;
}
