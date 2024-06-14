<?php
require_once './classes/Drawable.php';

class Drawing implements Drawable {
    private int $width;
    private int $height;
    private array $figures;

    public function __construct(int $width, int $height) {
        $this->width = $width;
        $this->height = $height;
        $this->figures = [];
    }

    public function draw() {
        $svg = '<svg width="' . $this->width . '" height="' . $this->height . '">';
        foreach ($this->figures as $key => $figure) {
            $svg .= $figure->draw();
        }
        $svg .= '</svg>';
        return $svg;
    }

    public function addFigure(Rectangle $rectangle) {
        $this->figures[] = $rectangle;
    }
}
