<?php

class CursiveCell extends Cell {
    public function __construct(string $content) {
        parent::__construct($content);
    }

    public function __toString() {
        return '<td><em>' . $this->content . '</em></td>';
    }
}
