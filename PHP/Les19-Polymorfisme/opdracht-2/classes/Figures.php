<?php
abstract class Figures {
    protected int $x;
    protected int $y;
    protected int $width;
    protected int $height;
    protected string $color;

    public function __construct($x, $y, $width, $height, $color) {
        $this->x = $x;
        $this->y = $y;
        $this->width = $width;
        $this->height = $height;
        $this->color = $color;
    }
}
