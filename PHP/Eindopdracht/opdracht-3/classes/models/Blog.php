<?php
class Blog {
    private $post = [];

    public function __construct() {
    }

    public function loadPosts() {
        foreach (glob('./blog/posts/*.xml') as $postfile) {
            $xml = simplexml_load_file($postfile);
            $content = substr((string)$xml->content, 0, 512) . '...';
            $this->post[] = [
                'id' => (string)$xml->id,
                'title' => (string)$xml->title,
                'author' => (string)$xml->author,
                'publication' => (string)$xml->publication,
                'content' => $content
            ];
        }
    }

    public function getPosts() {
        return $this->post;
    }
}
