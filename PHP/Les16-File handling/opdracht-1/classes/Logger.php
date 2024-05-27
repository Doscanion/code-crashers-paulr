<?php
class Logger {
    private $handle;
    private string $path;
    private string $modus;

    public function __construct($path = './files/logboek.txt', $modus = 'r', $handle) {
        $this->path = $path;
        $this->modus = $modus;
        if (file_exists($this->path)) {
            $handle = fopen($this->path, $this->modus);
        }
        $this->handle = $handle;
    }

    public function __destruct() {
        if ($this->handle) {
            fclose($this->handle);
        }
    }
}
