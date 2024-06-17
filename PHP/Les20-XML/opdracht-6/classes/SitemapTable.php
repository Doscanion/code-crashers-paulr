<?php
require_once './classes/AbstractSitemap.php';
class SitemapTable extends AbstractSitemap {

    protected $priorities;

    public function __construct() {
        parent::__construct();
    }

    public function getData(string $sitemap) {
        $xml = new SimpleXMLElement($sitemap, 0, true);
        foreach ($xml->urlset->url as $url) {
            $location = (string)$url->loc;
            $priority = isset($url->priority) ? (string)$url->priority : 'N/A';
            $this->locations[] = [$location, $priority];
        }
    }

    public function showData() {
        $locationTable = '<table>';
        $locationTable .= '<tr>';
        $locationTable .= '<th>Location</th>';
        $locationTable .= '<th>Priority</th>';
        $locationTable .= '</tr>';

        foreach ($this->locations as $locationkey => $location) {
            $locationTable .= '<tr>';
            $locationTable .= '<td>' . $location[0] . '</td>';
            $locationTable .= '<td>' . $location[1] . '</td>';
            $locationTable .= '</tr>';
        }
        $locationTable .= '</table>';

        echo $locationTable;
    }
}
