<?php
require_once 'vendor/autoload.php';

class BlogController {
    private $resource;
    private $loader;
    private $twig;
    private $blog;

    public function __construct($file = null) {
        // $this->resource = new SimpleXMLElement($file, 0, true);
        $this->loader = new \Twig\Loader\FilesystemLoader('./templates');
        $this->twig = new \Twig\Environment($this->loader, []);;
        $this->blog = new BlogModel;
    }

    public function index() {
        $posts = $this->blog->blogLoad();
        echo $this->twig->render('index.html.twig', ['posts' => $posts]);
    }

    public function addBlogPost() {
        if (!empty($_POST)) {
            # code...
        }
    }
}
