<?php
require_once 'vendor/autoload.php';

class BlogModel {
    private $resource;
    private $loader;
    private $twig;


    public function __construct($file = null) {
        $this->resource = new SimpleXMLElement($file, 0, true);
        $this->loader = new \Twig\Loader\FilesystemLoader('./templates');
        $this->twig = new \Twig\Environment($this->loader, []);;
    }
}
