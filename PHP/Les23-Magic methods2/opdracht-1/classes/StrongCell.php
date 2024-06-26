<?php

class StrongCell extends Cell {
    public function __construct(string $content) {
        parent::__construct($content);
    }

    public function __toString() {
        return '<td><strong>' . $this->content . '</strong></td>';
    }
}
