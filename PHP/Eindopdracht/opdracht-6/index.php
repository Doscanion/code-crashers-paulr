<?php
require 'vendor/autoload.php';

$controller = new BlogController();
// print_r($_GET);
// print_r($_POST);

if (!empty($_POST)) {
    if ($_POST['action'] === 'logout') {
        $controller->validateLogout();
    } elseif ($_POST['action'] === 'login') {
        $controller->validateLogin();
    } elseif ($_POST['action'] === 'register') {
        $controller->registerUser();
    } elseif ($_POST['action'] === 'createpost') {
        $controller->createPostFile();
    } elseif ($_POST['action'] === 'editpost') {
        $controller->editPostFile();
    } elseif ($_POST['action'] === 'commentCreate') {
        $controller->commentCreate();
    } elseif ($_POST['action'] === 'postcommentdelete') {
        $controller->postCommentDelete();
    }
} elseif (!empty($_GET)) {
    if (!empty($_GET['query'])) { //Placed first on !empty($_GET)
        $categories = isset($_GET['categories']) ? $_GET['categories'] : null;
        $query = isset($_GET['query']) ? $_GET['query'] : '';
        $author = isset($_GET['author']) ? $_GET['author'] : null;

        $cleanUrl = BASE_PATH;

        if ($author) {
            $cleanUrl .= '/author/' . urlencode($author);
        }

        $cleanUrl .= '/search/';

        if ($query) {
            $cleanUrl .= urlencode($query);
        }

        if ($categories) {
            $cleanUrl .= '/categories/' . implode(',', array_map('urlencode', $categories));;
        } else {
            $cleanUrl .= '/categories/content';
        }

        header("Location: $cleanUrl");
        exit();
    } elseif (isset($_GET['indexQuery'])) { //Goes after $_GET['query']
        $controller->index();
    } elseif (!empty($_GET['author'])) {
        $controller->authorPage();
    } elseif (!empty($_GET['pageNumber'])) {
        echo $_GET['pageNumber'];
        $controller->index($_GET['pageNumber']);
    } elseif (!empty($_GET['page'])) { //No use
        $page = $_GET['page'];
        $controller->$page();
    } elseif (!empty($_GET['post'])) {
        $controller->showPost($_GET['post']);
    } elseif (!empty($_GET['sort'])) { //Placed on the end of !empty($_GET)
        $controller->index();
    } else {
        echo 'niks';
    }
} else {
    $controller->index();
}
