<?php

class StrongCell extends Cell {
    public function __construct(string $content) {
        parent::__construct($content);
    }

    public function draw() {
        echo '<td><strong>' . $this->content . '</strong></td>';
    }
}
