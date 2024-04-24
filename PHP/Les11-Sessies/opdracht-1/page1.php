<?php

session_start();

$_SESSION['name'] = 'Paul';
echo $_SESSION['name'];
$_SESSION['age'] = 31;
echo $_SESSION['age'];
$_SESSION['music'] = ['Disturbed', 'Dragon Force', 'Rise Against'];
echo implode(', ', $_SESSION['music']);
