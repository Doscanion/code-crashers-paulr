<?php

namespace classes\Shop {
	class ShoppingCart {
		public array $products;

		public function __construct() {
			$this->products = array();
		}
	}
}
