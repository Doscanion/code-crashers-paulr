<?php

class DeleteCell extends Cell {
    public function __construct(string $content) {
        parent::__construct($content);
    }

    public function __toString() {
        return '<td><del>' . $this->content . '</del></td>';
    }
}
