<?php

namespace CodeCrashers\Marco;

class Calculator {

	public static function add(array $args){
		return array_sum($args);
	}

	public static function multiply(array $args){
		return array_product($args);
	}

	public static function findHighest(array $args){
		return max($args);
	}

}

?>