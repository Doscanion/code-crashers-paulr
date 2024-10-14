<?php
require_once 'vendor/autoload.php';
require_once 'classes/AlbumController.php';

$controller = new AlbumController();

if (empty($_POST)) {
    $controller->index();
} elseif (!empty($_POST)) {
    $controller->addAlbum();
}
// $songs = new AlbumModel('./fleetwoodmac.xml');

// $songs->getAlbumsFromXML();
// if (!empty($_POST)) {
//     $songs->addAlbumToXML($_POST);
// }
