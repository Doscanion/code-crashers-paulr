<?php

namespace classes\Shop {
	class Customer {
		private int $id;
		private string $name;
		private $shoppingCart;

		public function __construct(string $name) {
			$this->name = $name;
			$this->shoppingCart = new ShoppingCart();
		}

		public function __clone() {
			$this->shoppingCart = clone $this->shoppingCart;
		}

		public function setName(string $name) {
			$this->name = $name;
		}

		public function getName() {
			return $this->name;
		}

		public function addToCart(string $product) {
			$this->shoppingCart->products[] = $product;
		}

		public function removeFromCart(int $id) {				// Requires the id of the product in the array.
			unset($this->shoppingCart->products[$id]);
		}

		public function __toString() {
			$output = '<p>De klant ' . $this->name . ' heeft de volgende producten in zijn winkelwagentje:</p>';
			$output .= '<ul>';
			foreach ($this->shoppingCart->products as $product) {
				$output .= '<li>' . $product . '</li>';
			}
			$output .= '</ul>';
			return $output;
		}
	}
}
