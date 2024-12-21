<?php
require_once 'vendor/autoload.php';

use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mime\Email;

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

        $_SESSION['filename'] = $filename;

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

        //comments sort op recent. dateB en dateA omdraaien voor tegenovergestelde.
        usort($this->comments, function ($a, $b) {
            $idA = $a['id'];
            $idB = $b['id'];
            return $idB <=> $idA;
        });
    }



    // public function userPosts($author) {

    // }

    public function createNewPost($username) {
        $title = $_POST['title'];
        $content = $_POST['text'];
        $content = html_entity_decode($content, ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $filename = date('YmdHis');
        $date = date('d-m-y');

        $this->wordsBlackList($title);
        $this->wordsBlackList($content);


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
            $_SESSION['hasCreatedPost'] = "Post has been created";
            header('Location: ' . BASE_PATH . '/author/' . $this->author . '/create');
        } else {
            $_SESSION['error'] = "Could not create " . $title . ' blogpost';
            header('Location: ' . BASE_PATH . '/author/' . $this->author . '/create');
        }
    }

    public function editPost($author, $postId) {
        $this->loadPost($postId);
        $editpost = $this->getPost();
        return $this->getPost();
    }

    public function updatePost() {
        $title = $_POST['title'];
        $content = $_POST['text'];
        $filename = $_POST['filename'];

        $this->wordsBlackList($title);
        $this->wordsBlackList($content);


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

        $_SESSION['hasEditedPost'] = "Post has been edited";
        header('Location: ' . BASE_PATH . '/author/' . $this->author . '/edit/' . $filename);
    }

    public function postAddComment() {
        $content = $_POST['usercontent'];
        $content = html_entity_decode($content, ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $username =  isset($_POST['username']) ? $_POST['username'] : null;
        $filename = $_SESSION['postFileName'];
        $userIp = $_SERVER['REMOTE_ADDR'];
        $date = date('d-m-y');

        $this->wordsBlackList($content);

        if ($this->session->isLoggedIn()) {
            $username = $this->session->getUserName();
        }

        if (empty($username) || empty($content)) {
            $_SESSION['error'] = "Fill in all the fields";
            header('Location: ' . BASE_PATH . '/post/' . $filename);
            exit;
        }


        $commentsXml = simplexml_load_file('./blog/comments/' . $filename . '.xml');
        if ($commentsXml === false) {
            throw new Exception("Could not load the XML file: $filename.xml");
        }

        if (count($commentsXml->comment) > 0) {
            $id = count($commentsXml->comment);
        } else {
            $id = 0;
        }

        // $this->sendEmailComment($filename, $content, $username) //Email versturen

        $comment = $commentsXml->addChild('comment');

        $comment->addChild('id', $id);
        $comment->addChild('content', $content);
        $comment->addChild('userIp', $userIp);
        $comment->addChild('publication', $date);
        $comment->addChild('author', $username);
        $commentsXml->asXML('./blog/comments/' . $filename . '.xml');

        header('Location: ' . BASE_PATH . '/post/' . $filename);
    }

    public function sendEmailComment($filename, $emailTextContent, $username) {
        $transport = Transport::fromDsn($_ENV['MAILER_DSN']);
        $mailer = new Mailer($transport);

        $this->loadPost($filename);
        $author = $this->post['author'];
        $title = $this->post['title'];
        $receiverEmail = $this->authorEmail($author);

        $email = (new Email())
            ->from('websitename-comment@company.com')
            ->to($receiverEmail)
            ->subject('The blogpost ' . $title . ' has received a comment')
            ->text(
                'Hello ' . $author . "\n\n" . 'The user ' . $username . ' has placed a comment on your post ' . $title . '.' . "\n\n" . 'The comment has the following content: ' . $emailTextContent . "\n\n Link containing the message: " . BASE_PATH . '/post/' . $filename
            );

        try {
            $mailer->send($email);
        } catch (\Symfony\Component\Mailer\Exception\TransportExceptionInterface $e) {
            echo "Could not send mail: " . $e->getMessage();
        }
    }

    function authorEmail($author) {
        $users = json_decode(file_get_contents('./users/users.json'), true) ?: [];

        foreach ($users as $user) {
            if ($author === $user['username']) {
                $authorEmail = $user['email'];
                return $authorEmail;
            }
        }
        return;
    }

    public function postRemoveComment() {
        if (isset($_POST['reasontext'])) {
            $reason = !empty($_POST['reasontext']) ? 'Message deleted by ' . $_SESSION['username'] . ". Reason: " . $_POST['reasontext'] : 'Message deleted by ' . $_SESSION['username'] . '.';
        }
        $commentId = $_POST['id'];
        $filename = $_SESSION['filename'];

        $commentsXml = simplexml_load_file('./blog/comments/' . $filename . '.xml');
        if ($commentsXml === false) {
            throw new Exception("Could not load the XML file: $filename.xml");
        }

        foreach ($commentsXml->comment as $comment) {
            if ($comment->id == $commentId) {
                $comment->content = $reason;
                break;
            }
        }
        $commentsXml->asXML('./blog/comments/' . $filename . '.xml');

        header('Location: ' . BASE_PATH . '/author/' . $this->author . '/edit/' . $filename);
    }

    public function wordsBlackList($string) {
        // $string = "This is a sample string. The airplanes crashed";
        $notAllowedWords = ['airplane', 'fack', 'fuck', 'shit', 'shate', 'faggot', 'bitch', 'fucker', 'cunt', 'twat'];
        $wordsDenied = '';
        foreach ($notAllowedWords as $word) {
            if (preg_match("/\b" . preg_quote($word, '/') . "\b/", $string)) {
                $wordsDenied .=  $word . ' ';
            }
        }

        if (!empty($wordsDenied)) {
            trim($wordsDenied);
            $errorTextMessage = 'The following words are not allowed: ' .  $wordsDenied;
            $_SESSION['errorTextMessage'] = $errorTextMessage;
            $redirectUrl = $_SERVER['HTTP_REFERER'] ?? BASE_PATH;
            header("Location: $redirectUrl");
            exit();
        }
    }
}
