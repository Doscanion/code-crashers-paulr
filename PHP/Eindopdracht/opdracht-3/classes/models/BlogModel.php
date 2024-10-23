<?php
require_once 'vendor/autoload.php';

class BlogModel {
    private $blog;

    public function __construct() {
        $this->blog = new Blog;
    }

    public function blogLoad() {
        $this->blog->loadPosts();
        return $this->blog->getPosts();
    }
}
