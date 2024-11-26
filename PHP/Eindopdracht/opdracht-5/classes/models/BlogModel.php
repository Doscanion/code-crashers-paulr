<?php
require_once 'vendor/autoload.php';

class BlogModel {
    private $blog;

    public function __construct() {
        $this->blog = new Blog;
    }

    public function blogLoad($pageNumber) {
        $this->blog->loadPosts(null, $pageNumber);
        return $this->blog->getPosts();
    }

    public function userPostLoad($author, $pageNumber) {
        $this->blog->loadUserPosts($author, $pageNumber);
        return $this->blog->getPosts();
    }
}
