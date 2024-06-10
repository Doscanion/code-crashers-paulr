<?php
abstract class Pokemon {
    protected int $level;
    protected string $name;

    public function __construct(int $level, string $name) {
        if ($level >= 1 && $level <= 99) {
            $this->level = $level;
        } else {
            die("It needs to be integer of 1-99");
        }
        $this->name = $name;
    }

    public function getLevel(): int {
        return $this->level;
    }

    public function setLevel(int $level) {
        $this->$level;
    }

    public function getName(): string {
        return $this->name;
    }

    public function setName(string $name) {
        $this->$name;
    }

    public function tackle() {
        echo 'Level ' . $this->level . ' ' .   $this->name . ' uses Tackle! It deals ' . ceil(40 * ($this->level * 0.3)) . ' damage<br>';
    }

    protected abstract function pokemons(): int;

    public function groupAttack() {
        $pokemons = $this->pokemons();
        echo  $pokemons . ' ' .   $this->name . '(s) use a group attack together in unison!<br>';
    }
}
