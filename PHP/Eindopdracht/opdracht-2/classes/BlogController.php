<?php
require_once 'vendor/autoload.php';


class BlogController {
    private $account = true;
    private $blogPost;

    public function __construct() {
    }

    public function index() {
    }

    public function addBlogPost() {
        if (!empty($_POST) && $this->account) {
            # code...
        }
    }
}
