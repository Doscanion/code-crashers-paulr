<?php
class AlbumModel {
    private $resource;
    private $loader;
    private $twig;

    public function __construct($file = null) {
        $this->resource = new SimpleXMLElement($file, 0, true);
        $this->loader = new \Twig\Loader\FilesystemLoader('./templates');
        $this->twig = new \Twig\Environment($this->loader, []);;
    }

    public function addAlbumToXML($albums) {
        if (!empty($albums)) {
            try {
                if ($this->resource  === null) {
                    throw new Exception("XML is empty");
                }
                $newAlbum = $this->resource->addChild('album');
                if (!empty($albums['name'])) {
                    $newAlbum->addChild('name', $albums['name']);
                } else {
                    throw new Exception("Name is empty");
                }
                if (!empty($albums['year'])) {
                    if (preg_match('/[0-9]{4}/', $albums['year'])) {
                        $newAlbum->addChild('year', $albums['year']);
                    } else {
                        throw new Exception("Year is not 4 numbers");
                    }
                } else {
                    throw new Exception("Year is empty");
                }
                if (!empty($albums['time'])) {
                    if (preg_match('/^\d{2}:\d{2}$/', $albums['time'])) {
                        $newAlbum->addChild('time', $albums['time']);
                    } else {
                        throw new Exception("Time is not mm:ss");
                    }
                } else {
                    throw new Exception("Time is empty");
                }
                if (!empty($albums['numbers'])) {
                    if ($albums['numbers'] > 0) {
                        $newAlbum->addChild('numbers', $albums['numbers']);
                    } else {
                        throw new Exception("Numbers is not mm:ss");
                    }
                } else {
                    throw new Exception("Numbers is empty");
                }

                $songs = $newAlbum->addChild('songs');

                if (!empty($albums['song1'])) {
                    $songs->addChild('song', $albums['song1']);
                } else {
                    throw new Exception("Song 1 is empty");
                }
                if (!empty($albums['song2'])) {
                    $songs->addChild('song', $albums['song2']);
                } else {
                    throw new Exception("Song 2 is empty");
                }
                if (!empty($albums['song3'])) {
                    $songs->addChild('song', $albums['song3']);
                } else {
                    throw new Exception("Song 3 is empty");
                }
                $this->resource->asXML('fleetwoodmac.xml');
                $this->getAlbumsFromXML();
            } catch (Exception $e) {
                echo '<p>Error: ' . $e->getMessage() . '</p>';
            }
        }
    }

    public function getAlbumsFromXML() {
        try {
            if ($this->resource  === null) {
                throw new Exception("XML is empty");
            }
            $albums = [];

            foreach ($this->resource->children() as $albumkey => $album) {

                if ($album->getName() == 'album') {
                    $songs = [];
                    foreach ($album->songs->children() as $song) {
                        $songs[] = (string)$song;
                    }
                    $albums[] = [
                        'name' => (string)$album->name,
                        'year' => (string)$album->year,
                        'time' => (string)$album->time,
                        'numbers' => (string)$album->numbers,
                        'songs' => $songs
                    ];
                }
            }
            echo $this->twig->render('base.html.twig', [
                'albums' => $albums,
                'action' => htmlspecialchars($_SERVER['PHP_SELF'])
            ]);
        } catch (Exception $e) {
            echo '<p>Error: ' . $e->getMessage() . '</p>';
        }
    }
}
