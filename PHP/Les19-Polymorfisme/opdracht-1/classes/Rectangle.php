<?php
require_once './classes/Drawable.php';

class Rectangle implements Drawable {
    private int $x;
    private int $y;
    private int $width;
    private int $height;
    private string $color;

    public function __construct($x, $y, $width, $height, $color) {
        $this->x = $x;
        $this->y = $y;
        $this->width = $width;
        $this->height = $height;
        $this->color = $color;
    }

    public function draw() {
        $rect = '<rect x="' . $this->x . '" y="' . $this->y . '" width="' . $this->width . '" height="' . $this->height . '" fill="' . $this->color . '"></rect>';
        return $rect;
    }
}
