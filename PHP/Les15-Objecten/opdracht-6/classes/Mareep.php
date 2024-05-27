<?php
class Mareep {
    private int $level;
    private string $image;
    private bool $imageBolean;
    private static $mareeps = 0;
    // public string $monster;

    // string $monster = 'mareep',
    public function __construct(string $image, int $level) {
        if ($level >= 1 && $level <= 99) {
            $this->level = $level;
        } else {
            die("It needs to be integer of 1-99");
        }
        $this->imageBolean = false;
        $this->image = $image;
        self::$mareeps++;
        // $this->monster = $monster;
    }


    public function getLevel(): int {
        return $this->level;
    }

    public function setLevel(int $level) {
        $this->$level;
    }


    public function mareepImage() {
        if (!$this->imageBolean) {
            echo "<img src=\"{$this->image}\" alt=\"Mareep\">";
            $this->image = true;
        } else {
            echo "Image already displayed";
        }
    }

    public function tackle() {
        echo 'Level ' . $this->level . ' Mareep uses Tackle! It deals ' . ceil(40 * ($this->level * 0.3)) . ' damage';
    }

    public function groupAttack() {
        echo  self::$mareeps . ' Mareep(s) use a group attack together in unison!';
    }
}
