<?php
require_once './classes/AbstractSitemap.php';
class SitemapText extends AbstractSitemap {
    public function __construct() {
        parent::__construct();
    }

    public function showData() {
        $locationText = '';
        foreach ($this->locations as $locationkey => $location) {
            $locationText .= '<p><a href="' . $location . '">' . $location . '</a></p>';
        }
        echo $locationText;
    }
}
