<?php

namespace Paul\Toys {
    class Dice {

        public static int $diceRoll = 0;

        public int $eyes;

        public function __construct(int $eyes = 6) {
            $this->eyes = $eyes;
        }

        public function getDice(): int {
            return $this->eyes;
        }

        public function setDice(int $eyes) {
            $this->$eyes;
        }

        public function roll() {
            self::$diceRoll++;
            return random_int(1, $this->eyes) . ' and total rolls is ' . self::$diceRoll;
        }
    }
}
