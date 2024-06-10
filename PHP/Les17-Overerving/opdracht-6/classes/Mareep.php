<?php
class Mareep extends Pokemon {
    private string $image;
    private bool $imageBolean;
    private static $pokemons = 0;


    public function __construct(string $image, int $level, string $name) {
        parent::__construct($level, $name);
        $this->imageBolean = false;
        $this->image = $image;
        self::$pokemons++;
    }

    protected function pokemons(): int {
        return self::$pokemons;
    }

    public function mareepImage() {
        if (!$this->imageBolean) {
            echo "<img src=\"{$this->image}\" alt=\"" . __CLASS__ . "\">";
            $this->image = true;
        } else {
            echo "Image already displayed";
        }
    }
}
