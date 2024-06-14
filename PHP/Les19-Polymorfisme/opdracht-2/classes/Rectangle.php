<?php
require_once './classes/Figures.php';

class Rectangle extends Figures {

    public function __construct(int $x, int $y, int $width, int $height, string $color) {
        parent::__construct($x, $y, $width, $height, $color);
    }

    public function draw() {
        $rect = '<rect x="' . $this->x . '" y="' . $this->y . '" width="' . $this->width . '" height="' . $this->height . '" fill="' . $this->color . '"></rect>';
        return $rect;
    }
}
