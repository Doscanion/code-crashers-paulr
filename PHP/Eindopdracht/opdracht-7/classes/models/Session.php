<?php

class Session {
    private $lastVisit;

    public function __construct() {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        $this->lastVisit = isset($_COOKIE['last_visit']) ? $_COOKIE['last_visit'] : null;
        setcookie('last_visit', time(), [
            'expires' => time() + 365 * 24 * 60 * 60,
            'path' => '/',
        ]);
    }

    public function logIn() {
        if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
            echo 'Invalid CSRF token';
            exit;
        }
        $username = $_POST['username'];
        $password = $_POST['password'];

        if (!empty($username) && !empty($password)) {
            if (!$this->isLoggedIn()) {
                $filePath = './users/users.json';
                $users = json_decode(file_get_contents($filePath), true);
                foreach ($users as $user) {
                    if ($user['username'] === $username) {
                        if (password_verify($password, $user['password'])) {
                            $_SESSION['username'] = $user['username'];
                            $_SESSION['role'] = $user['role'];
                            // echo 'logged in';
                            header('Location: index.php');
                            exit;
                        } else {
                            return 'Incorrect password';
                        }
                    }
                }
                return 'User not found';
            } else {
                return 'You are already logged in as ' . htmlspecialchars($_SESSION['username']) . ".";
            }
        }
    }

    public function logOut() {
        session_unset();
        session_destroy();
        header('Location: ' . BASE_PATH);
    }

    public function isLoggedIn() {
        return isset($_SESSION['username']);
    }

    public function isRoleAuthor() {
        if ($this->isLoggedIn()) {
            return $_SESSION['role'] === 'author';
        }
        return false;
    }

    public function minuteslastVisit() {
        if ($this->lastVisit !== null) {
            $minutes = floor((time() - $this->lastVisit) / 60);
            return $minutes;
        }
        return null;
    }

    public function getUserName() {
        if ($this->isLoggedIn()) {
            return $_SESSION['username'];
        }
        return;
    }

    public function csrf() {
        if (empty($_SESSION['csrf_token'])) {
            return $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
        } else {
            return $_SESSION['csrf_token'];
        }
    }
}
