<?php
require_once 'vendor/autoload.php';

class BlogController {
    private $resource;
    private $loader;
    private $twig;
    private $blog;
    private $post;
    private $lastVisit;
    private $session;

    public function __construct($file = null) {
        $this->session = new Session;
        // $this->resource = new SimpleXMLElement($file, 0, true);
        $this->loader = new \Twig\Loader\FilesystemLoader('./templates');
        $this->twig = new \Twig\Environment($this->loader, []);;
        $this->blog = new BlogModel;
        $this->post = new BlogPost;

        $this->setGlobalTwigVariables();
    }

    public function setGlobalTwigVariables() {
        $base_path = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/');
        $this->twig->addGlobal('base_path', $base_path);
        $this->twig->addGlobal('csrf_token', $this->session->csrf());
        $this->twig->addGlobal('loggedIn', $this->session->isLoggedIn());
        $this->twig->addGlobal('timeSinceLastVisit', $this->session->minuteslastVisit());
    }

    // public function __call($name, $arguments) {
    //     if (method_exists($this, $name)) {
    //         return call_user_func_array([$this, $name], $arguments);
    //     } else {
    //         switch ($name) {
    //             case 'login':
    //                 return $this->login();
    //             case 'register':
    //                 return $this->login();
    //             default:
    //                 return $this->notFound();
    //         }
    //     }
    // }

    public function index() {
        $posts = $this->blog->blogLoad();
        echo $this->twig->render('index.html.twig', ['posts' => $posts,]);
    }

    public function addBlogPost() {
        if (!empty($_POST)) {
            # code...
        }
    }

    public function login() {
        $csrf_token = $this->session->csrf();
        echo $this->twig->render('userlogin.html.twig', []);
    }

    public function showPost($filename) {
        $this->post->loadPost($filename);
        $_SESSION['postFileName'] = $filename;
        $postContent = $this->post->getPost();
        echo $this->twig->render('post.html.twig', ['post' => $postContent,]);
    }

    public function notFound() {
        echo $this->twig->render('notexist.html.twig', []);
    }

    public function registerUser() {
        if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
            echo 'Invalid CSRF token';
            exit;
        }

        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $users = json_decode(file_get_contents('./users/users.json'), true) ?: [];
        $hashedpassword = password_hash($password, PASSWORD_DEFAULT);

        foreach ($users as $user) {
            if ($username === $user['username'] || $email === $user['email']) {
                echo 'Username or email already exists';
                exit;
            }
        }

        $users[] = [
            'username' => $username,
            'email' => $email,
            'password' => $hashedpassword,
            'role' => 'member' //author voor rechten van maken voor post en eigen post aanpassen.
        ];
        file_put_contents('./users/users.json', json_encode($users));
    }

    public function authorPage() {
        if (!$this->session->isRoleAuthor()) {
            echo 'User is not an author';
            return;
        }

        if ($this->session->getUserName() !== $_GET['author']) {
            echo 'User is not the maker of this blog post';
            return;
        }

        $author = $_GET['author'];
        $action = $_GET['action'] ?? null;
        $postId = $_GET['post'] ?? null;
        $error = $_SESSION['error'] ?? null;

        unset($_SESSION['error']);

        switch ($action) {
            case 'create':
                echo $this->twig->render('createblogpost.html.twig', ['error' => $error]);
                break;

            case 'edit':
                $post = $this->post->editPost($author, $postId);
                echo $this->twig->render('usereditpost.html.twig', ['post' => $post, 'error' => $error]);
                break;

            default:
                $posts = $this->blog->userPostLoad($author);
                echo $this->twig->render('userblogposts.html.twig', ['posts' => $posts, 'error' => $error]);
                break;
        }
    }

    public function register() {
        if (empty($_SESSION['csrf_token'])) {
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
        }
        echo $this->twig->render('register.html.twig', []);
    }

    public function createPostFile() {
        $username = $this->session->getUserName();
        $this->post->createNewPost($username);
    }

    public function editPostFile() {
        $this->post->updatePost();
    }

    public function validateLogin() {
        $this->session->logIn();
    }

    public function validateLogout() {
        $this->session->logOut();
    }
}
