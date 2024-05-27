<?php
class Product {
    private string $name;
    private float $price;

    public function getName(): string {
        return $this->name;
    }

    public function setName(string $name) {
        $this->name = $name;
    }

    public function getPrice(): float {
        return $this->price;
    }

    public function setPrice(float $price) {
        $this->price = $price;
    }

    public function calculateCosts(int $quantity) {
        return $this->price * $quantity;
    }
}
