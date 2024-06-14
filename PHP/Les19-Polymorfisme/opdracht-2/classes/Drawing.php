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
        $svg = '<svg width="' . $this->width . '" height="' . $this->height . '" xmlns="http://www.w3.org/2000/svg">';
        foreach ($this->figures as $key => $figure) {
            $svg .= $figure->draw();
        }
        $svg .= '</svg>';
        return $svg;
    }

    public function addFigure(Figures $figures) {
        $this->figures[] = $figures;
    }
}
