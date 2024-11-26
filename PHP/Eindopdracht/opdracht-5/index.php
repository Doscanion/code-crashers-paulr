<?php
require 'vendor/autoload.php';

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
    } elseif ($_POST['action'] === 'commentCreate') {
        $controller->commentCreate();
    } elseif ($_POST['action'] === 'postcommentdelete') {
        $controller->postCommentDelete();
    }
} elseif (!empty($_GET)) {
    if (isset($_GET['search'])) {
        // $categories = $_GET['category'];
        // $author = isset($_GET['author']) ? $_GET['author'] : null;

        // $cleanUrl = '/search/' . implode('/', $categories);
        // if ($author) {
        //     $cleanUrl = '/author/' . $author . '/search/' . implode('/', $categories);
        // }

        // header("Location: $cleanUrl");
        // exit();
    } elseif (isset($_GET['author'])) {
        $controller->authorPage();
    } elseif (isset($_GET['pageNumber'])) {
        $controller->index($_GET['pageNumber']);
    } elseif (isset($_GET['page'])) {
        $page = $_GET['page'];
        $controller->$page();
    } elseif (isset($_GET['post'])) {
        $controller->showPost($_GET['post']);
    } elseif (isset($_GET['sort'])) { //Placed on the end of !empty($_GET)
        $controller->index();
    }
} else {
    $controller->index();
}
