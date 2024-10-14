<?php
class Robot {
	private int $id;
	private static int $numRobots = 0;

	public function __construct(int $id) {
		$this->id = $id;
		self::$numRobots++;
		echo '<p>BLEEP BLEEP! I AM ROBOT #' . $this->id . '!</p>';
	}

	public function getId(): int {
		return $this->id;
	}

	public function setId(int $id) {
		$this->id = $id;
	}

	private function secret(int $code1, int $code2, int $code3) {
		echo '<p>BLEEP BLEEP... VALIDATING CODE ' . $code1 . '-' . $code2 . '-' . $code3 . '.';
		if (pow($code1, $code2) == $code3) {
			echo '<p>ACCESS GRANTED!</p>';
		} else {
			echo '<p>ACCESS DENIED!</p>';
		}
	}

	public function __destruct() {
		echo '<p>ERROR! SELF DESTRUCT IN 3... 2... 1... 0!</p>';
	}

	public static function countRobots() {
		return 'Amount of robots is ' . self::$numRobots;
	}

	public function __call($name, $arguments) {
		if ($name == 'secret' && is_int($arguments[0]) && is_int($arguments[1]) && is_int($arguments[2])) {
			$this->secret($arguments[0], $arguments[1], $arguments[2]);
		} else {
			echo '<p>Method does not exist</p>';
			Robot::__callStatic($name, $arguments);
		}
	}

	public static function __callStatic($name, $arguments) {
		$filepath = 'log.txt';

		$text = '<p>The method ' . $name . ' does not exist. ';
		if (!empty($arguments)) {
			$text .= 'The argument(s)';
			foreach ($arguments as $argument) {
				$text .= ' ' . $argument . ' ';
			}
			$text .= 'exist ';
		} else {
			$text .= 'No arguments are ';
		}

		$text .= 'in the method.</p>';

		file_put_contents($filepath, $text);
	}
}
