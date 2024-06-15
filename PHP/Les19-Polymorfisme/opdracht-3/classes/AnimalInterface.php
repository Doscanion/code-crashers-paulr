<?php
interface AnimalInterface {
    public function __construct();
    public function __debugInfo();
    public function __call($method, $args);
}
