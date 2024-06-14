<?php
require_once './classes/Figures.php';

class Ellipse extends Figures {
    public function __construct(int $x, int $y, int $width, int $height, string $color) {
        parent::__construct($x, $y, $width, $height, $color);
    }

    public function draw() {
        $ellipsee = '<ellipse cx="' . $this->x . '" cy="' . $this->y . '" rx="' . $this->width . '" ry="' . $this->height . '" fill="' . $this->color . '" />';
        return $ellipsee;
    }
}
