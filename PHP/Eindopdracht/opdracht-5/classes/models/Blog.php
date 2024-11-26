<?php

class Blog {
    private $session;
    private $post = [];

    public function __construct() {
    }

    public function getPosts() {
        return $this->post;
    }

    public function loadPosts($author = null, $page = 0, $amount = 5) {
        $filesNameLoaded = glob('./blog/posts/*.xml');
        rsort($filesNameLoaded);

        if ($author) {
            $_SESSION['blogPostsAuthor'] = $author;
            foreach ($filesNameLoaded as $file) {
                $xml = simplexml_load_file($file);
                if ((string)$xml->author == $author) {
                    $files[] = $file;
                }
            }
        } else {
            $files = $filesNameLoaded;
        }
        if (!empty($files)) {
            foreach ($files as $postfile) {
                $xml = simplexml_load_file($postfile);

                $content = substr((string)$xml->content, 0, 512) . '...';
                $filename = pathinfo($postfile, PATHINFO_FILENAME);
                $postAuthor = (string)$xml->author;

                if ($author === null || $author === $postAuthor) {
                    $post[] = [
                        'id' => (string)$xml->id,
                        'title' => (string)$xml->title,
                        'author' => (string)$xml->author,
                        'publication' => (string)$xml->publication,
                        'content' => $content,
                        'filename' => $filename
                    ];
                }
            }

            $search = $_GET['search'] ?? null;
            if ($search) {
                # code...
            }

            $this->post = $post;
            $sort = $_GET['sort'] ?? 'default';

            $this->sortPosts($sort);

            $id = ($page - 1) * $amount;

            $slicedFiles = array_slice($this->post, $id, $amount);

            $this->post = $slicedFiles;

            $remainingFiles = count($post) - ($id + count($slicedFiles));
            $hasMoreFiles = $remainingFiles > 0;

            $_SESSION['sortPosts'] = $sort;
            $_SESSION['hasMoreFiles'] = $hasMoreFiles;
        }
    }

    public function sortPosts($sort) {
        switch ($sort) {
            case 'authorAbc':
                usort($this->post, function ($a, $b) {
                    return strcmp($a['author'], $b['author']);
                });
                break;
            case 'authorZyx':
                usort($this->post, function ($a, $b) {
                    return strcmp($b['author'], $a['author']);
                });
                break;
            case 'oldNew':
                $this->post = array_reverse($this->post);
                break;
            default:
                break;
        }
    }

    public function loadUserPosts($author, $pageNumber) {
        $this->loadPosts($author, $pageNumber);
    }

    public function searchPosts($author) {
        if (!empty($_GET['categories'])) {
        }
    }
}
