<?php

class InsertCell extends Cell {
    public function __construct(string $content) {
        parent::__construct($content);
    }

    public function __toString() {
        return '<td><ins>' . $this->content . '</ins></td>';
    }
}
