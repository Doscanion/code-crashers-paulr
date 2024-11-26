<?php

class Blog {
    private $session;
    private $post = [];

    public function __construct() {
    }

    public function getPosts() {
        return $this->post;
    }

    public function loadPosts($author = null, $page, $amount = 5) {
        $filesNameLoaded = glob('./blog/posts/*.xml');
        rsort($filesNameLoaded);

        if ($author) {
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
            if (!isset($_GET['indexQuery']) && !isset($_GET['authorQuery'])) {
                $post = $this->loadPostFileInfo($author, $files);
                $this->post = $post;
            } else {
                if (isset($_GET['indexQuery'])) {
                    $search = $_GET['indexQuery'];
                } else {
                    $search =  $_GET['authorQuery'];
                }
                if ($search) {
                    echo $search;
                    $post = $this->searchPosts($files, $search, $author);
                    $this->post = $post;
                }
            }

            $sort = $_GET['sort'] ?? null;

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

    public function loadPostFileInfo($author, $files) {
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
        return $post;
    }

    public function loadUserPosts($author, $pageNumber) {
        $this->loadPosts($author, $pageNumber);
    }



    public function searchPosts($files, $searchQuery, $author) {
        echo $searchQuery;
        $posts = $this->loadPostFileInfo($author, $files);
        $categories = $_GET['categories'] ?? [];

        if (!empty($categories) && !is_array($categories)) {
            $categories = explode(',', $categories); // create array for the foreach
        }

        if (!isset($_SESSION['searchQuery'])) {
            $_SESSION['searchQuery'] = '';
        }
        if (!isset($_SESSION['searchCategories'])) {
            $_SESSION['searchCategories'] = [];
        }

        if ($searchQuery !== $_SESSION['searchQuery'] && $categories !== $_SESSION['searchCategories']) {
            $_SESSION['searchQuery'] = $searchQuery;
            $_SESSION['searchCategories'] = $categories;
        }

        $filteredPosts = array_filter($posts, function ($post) use ($categories, $searchQuery) {
            if (empty($categories)) { //should not be possible
                return stripos($post['title'], $searchQuery) !== false ||
                    stripos($post['author'], $searchQuery) !== false ||
                    stripos($post['content'], $searchQuery) !== false;
            }
            foreach ($categories as $category) {
                if (isset($post[$category]) && stripos($post[$category], $searchQuery) !== false) {
                    return true;
                    break;
                }
            }

            return false;
        });

        return $filteredPosts;
    }
}
