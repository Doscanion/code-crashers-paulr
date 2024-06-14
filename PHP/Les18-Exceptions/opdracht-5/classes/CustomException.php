<?php
class CustomException extends Exception {
    public function getError() {
        $errorMessage = '<h1>Something went wrong</h1>';
        $errorMessage .= '<p>Message: ' . $this->getMessage() . '</p>';
        $errorMessage .= '<p>File: ' . $this->getFile() . '</p>';
        $errorMessage .= '<p>Line: ' . $this->getLine() . '</p>';

        return $errorMessage;
    }
}
