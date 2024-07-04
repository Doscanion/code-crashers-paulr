<?php
require_once 'vendor/autoload.php';

class AlbumController {
    private $albumModel;

    public function __construct() {
        $this->albumModel = new AlbumModel('fleetwoodmac.xml');
    }

    //creates the html
    public function index() {
        $this->albumModel->getAlbumsFromXML();
    }

    //add Album to the fleetwood.xml
    public function addAlbum() {
        if (!empty($_POST)) {
            $this->albumModel->addAlbumToXML($_POST);
        } else {
            echo '$_POST is empty????';
        }
    }
}
