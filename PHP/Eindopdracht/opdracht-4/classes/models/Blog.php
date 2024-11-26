<?php

class Blog {
    private $session;
    private $post = [];

    public function __construct() {
    }

    public function getPosts() {
        return $this->post;
    }

    public function loadPosts($author = null) {
        $files = glob('./blog/posts/*.xml');
        rsort($files);

        foreach ($files as $postfile) {
            $xml = simplexml_load_file($postfile);

            $content = substr((string)$xml->content, 0, 512) . '...';
            $filename = pathinfo($postfile, PATHINFO_FILENAME);
            $postAuthor = (string)$xml->author;

            if ($author === null || $author = $postAuthor) {
                $this->post[] = [
                    'id' => (string)$xml->id,
                    'title' => (string)$xml->title,
                    'author' => (string)$xml->author,
                    'publication' => (string)$xml->publication,
                    'content' => $content,
                    'filename' => $filename
                ];
            }
        }
    }

    public function loadUserPosts($author) {
        $this->loadPosts($author);
    }
}
