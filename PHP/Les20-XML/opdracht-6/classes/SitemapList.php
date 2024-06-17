<?php
require_once './classes/AbstractSitemap.php';
class SitemapList extends AbstractSitemap {
    private $list;
    public function __construct(bool $list = false) {
        $this->list = $list;
        parent::__construct();
    }

    public function showData() {
        $this->list ? $listOrder = 'ol' : $listOrder = 'ul';
        $locationText = '<' . $listOrder . '>';
        foreach ($this->locations as $locationkey => $location) {
            $locationText .= '<li>' . $location . '</li>';
        }
        $locationText .= '</' . $listOrder . '>';
        echo $locationText;
    }
}
