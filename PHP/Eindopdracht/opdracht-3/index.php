<?php
require 'vendor/autoload.php';
$base_path = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/');


$controller = new BlogController();

if (!empty($_POST)) {
    if ($_POST['action'] === 'logout') {
        $controller->validateLogout();
    } elseif ($_POST['action'] === 'login') {
        $controller->validateLogin();
    } elseif ($_POST['action'] === 'register') {
        $controller->registerUser();
    } elseif ($_POST['action'] === 'createpost') {
        echo 'create?';
        $controller->createPostFile();
    } elseif ($_POST['action'] === 'editpost') {
        echo 'update?';
        $controller->editPostFile();
    }
    // elseif ($_POST['action'] === 'comment') {

    // }
} elseif (!empty($_GET)) {
    if (isset($_GET['author'])) {
        $controller->authorPage();
    } elseif (isset($_GET['page'])) {
        $page = $_GET['page'];
        $controller->$page();
    } elseif (isset($_GET['post'])) {
        $controller->showPost($_GET['post']);
    }
} else {
    $controller->index();
}
