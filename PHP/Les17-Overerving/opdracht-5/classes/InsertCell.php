<?php

class InsertCell extends Cell {
    public function __construct(string $content) {
        parent::__construct($content);
    }

    public function draw() {
        echo '<td><ins>' . $this->content . '</ins></td>';
    }
}
