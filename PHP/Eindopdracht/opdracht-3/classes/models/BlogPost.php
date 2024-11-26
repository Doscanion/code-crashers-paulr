<?php
require_once 'vendor/autoload.php';

class BlogPost {
    private $post = [];
    private $comments = [];
    private $session;
    private $author;

    public function __construct() {
        $this->session = new Session;
        $this->author = $this->session->getUserName();
    }

    public function getPost() {
        return [
            'post' => $this->post,
            'comments' => $this->comments
        ];
    }

    public function loadPost($filename, $error = false) {
        $postxml = simplexml_load_file('./blog/posts/' . $filename . '.xml');
        if ($postxml === false) {
            throw new Exception("Could not load the XML file: $filename.xml");
        }

        $this->loadComments($filename);

        $this->post = [
            'id' => (string)$postxml->id,
            'title' => (string)$postxml->title,
            'author' => (string)$postxml->author,
            'publication' => (string)$postxml->publication,
            'content' => (string)$postxml->content,
            'filename' => $filename,
            'error' => $error
        ];
    }

    public function loadComments($filename) {
        $commentsxml = simplexml_load_file('./blog/comments/' . $filename . '.xml');

        if ($commentsxml === false) {
            throw new Exception("Could not load the XML file: $filename.xml");
        }

        foreach ($commentsxml->comment as $comment) {
            $this->comments[] = [
                'id' => (string)$comment->id,
                'content' => (string)$comment->content,
                'publication' => (string)$comment->publication,
                'author' => (string)$comment->author
            ];
        }
    }

    // public function userPosts($author) {

    // }

    public function createNewPost($username) {
        $title = $_POST['title'];
        $content = $_POST['text'];
        $filename = date('YmdHis');
        $date = date('d-m-y');

        if (empty($title) || empty($content)) {
            $_SESSION['error'] = "Fill in all the fields";
            header('Location: ' . BASE_PATH . '/author/' . $this->author . '/create');
            exit;
        }

        $xmlPost = new SimpleXMLElement('<blogpost></blogpost>');

        $xmlPost->addChild('id', $filename);
        $xmlPost->addChild('title', $title);
        $xmlPost->addChild('author', $this->author);
        $xmlPost->addChild('publication', $date);
        $xmlPost->addChild('content', $content);

        $xmlComments = new SimpleXMLElement('<comments></comments>');

        $filePathPost = './blog/posts/' . $filename . '.xml';

        $filePathComments = './blog/comments/' . $filename . '.xml';

        if ($xmlPost->asXML($filePathPost) && $xmlComments->asXML($filePathComments)) {
            header('Location: ' . BASE_PATH . '/author/' . $this->author . '/create');
        } else {
            $_SESSION['error'] = "Could not create " . $title . ' blogpost';
            header('Location: ' . BASE_PATH . '/author/' . $this->author . '/create');
        }
    }

    public function editPost($author, $postId) {
        $this->loadPost($postId);
        $editpost = $this->getPost();
        return $editpost['post'];
    }

    public function updatePost() {
        $title = $_POST['title'];
        $content = $_POST['text'];
        $filename = $_POST['filename'];

        if (empty($title) || empty($content)) {
            $_SESSION['error'] = "Fill in all the fields";
            header('Location: ' . BASE_PATH . '/author/' . $this->author . '/edit/' . $filename);
            exit;
        }


        $postxml = simplexml_load_file('./blog/posts/' . $filename . '.xml');
        if ($postxml === false) {
            throw new Exception("Could not load the XML file: $filename.xml");
        }

        $postxml->title = $title;
        $postxml->content = $content;

        $postxml->asXML('./blog/posts/' . $filename . '.xml');

        header('Location: ' . BASE_PATH . '/author/' . $this->author . '/edit/' . $filename);
    }

    public function postAddComment() {
        // $content = $_POST['text'];
        // $filename = $_SESSION['postFileName'];
        // $username =  $_POST['username'];
        // $userIp = $_SERVER['HTTP_CLIENT_IP'];

        // if (empty($title) || empty($content)) {
        //     $_SESSION['error'] = "Fill in all the fields";
        //     header('Location: ' . BASE_PATH . $filename);
        //     exit;
        // }

        // $commentXml = simplexml_load_file('./blog/comments/' . $filename . '.xml');
        // if ($commentXml === false) {
        //     throw new Exception("Could not load the XML file: $filename.xml");
        // }

        // $id = 0;


        // $commentXml = new SimpleXMLElement('<blogpost></blogpost>');

        // $commentXml->addChild('id', $id);
        // $commentXml->addChild('username', $username);
        // $commentXml->addChild('content', $title);
        // $commentXml->addChild('author', $this->author);
        // $commentXml->asXML('./blog/comments/' . $filename . '.xml');

        // header('Location: ' . BASE_PATH . '/author/' . $this->author . '/edit/' . $filename);
    }

    public function postRemoveComment() {
    }
}
