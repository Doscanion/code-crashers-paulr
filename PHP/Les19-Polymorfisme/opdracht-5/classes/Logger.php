<?php
require_once('./classes/DatabaseInterface.php');

class Logger implements DatabaseInterface {
    private $handle;
    private string $path;
    private string $modus;
    private string $author;
    private string $message;

    public function __construct(string $path = './files/logboek.txt', string $modus = 'a') {
        $this->path = $path;
        $this->modus = $modus;
        $this->handle = fopen($this->path, $this->modus);
    }

    public function __destruct() {
        if ($this->handle) {
            fclose($this->handle);
        }
    }

    public function getModus(): string {
        return $this->modus;
    }

    public function setModus(string $modus) {
        $this->modus = $modus;
    }

    public function getAuthor(): string {
        return $this->author;
    }

    public function setAuthor(string $author) {
        $this->author = $author;
    }

    public function getMessage(): string {
        return $this->message;
    }

    public function setMessage(string $message) {
        $this->message = $message;
    }

    public function addLog(string $author, string $message): void {
        $message = str_replace(';', '{SEMICOLON}', $message);
        fwrite($this->handle, $author . ';' . $message . ';' . date('H:i:s Y-m-d') . ';' . $_SERVER['REMOTE_ADDR'] . PHP_EOL);
        echo 'Text added';
    }

    public function showLog() {
        if (file_exists($this->path)) {
            $handle = fopen($this->path, 'r');
            while (!feof($handle)) {
                $textrow = fgets($handle);
                if ($textrow) {
                    $textarray = explode(';', $textrow);
                    foreach ($textarray as $key => $value) {
                        $textarray[$key] = str_replace('{SEMICOLON}', ';', $value);
                    }

                    echo '<article><p>' . $textarray[1] . '</p> <p>Gepost door <strong>' . $textarray[0] . '</strong> op ' . $textarray[2] . ', onder ip-adres ' . $textarray[3] . '</article>';
                }
            }
        }
        fclose($handle);
    }
}
