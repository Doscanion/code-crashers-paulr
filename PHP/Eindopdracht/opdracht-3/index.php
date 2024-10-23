<?php
require 'vendor/autoload.php';
require_once 'classes/controller/BlogController.php';


$controller = new BlogController();

if (empty($_POST)) {
    $controller->index();
}
