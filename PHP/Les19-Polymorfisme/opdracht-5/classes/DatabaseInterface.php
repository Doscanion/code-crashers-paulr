<?php

interface DatabaseInterface {
    // public function __construct();
    // public function __destruct();
    public function addLog(string $author, string $message);
    public function showLog();
}
