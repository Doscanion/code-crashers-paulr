<?php
class FileManager {
    const DESTINATION = './uploads';
    const PERMITTED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'svg'];

    public static function uploadFile(array $array) {
        // $path = $array['bestand']['name'];
        // $pathInfo = pathinfo($path);
        // $fileExtension = $pathInfo['extension'];
        $extension = pathinfo($array['file']['name'], PATHINFO_EXTENSION);

        if (in_array($extension, self::PERMITTED_EXTENSIONS)) {
            if (move_uploaded_file($array['file']['tmp_name'], './uploads/' . uniqid() . '.' . $extension)) {
                echo 'File uploaded';
            } else {
                echo 'Failed to upload file';
            }
        } else {
            echo 'Not a valid file type';
        }
    }

    public static function deleteFile($path) {
        $deletePath = self::DESTINATION . '/' . $path;
        if (file_exists($deletePath)) {
            unlink($deletePath);
        } else {
            echo 'File does not exist';
        }
    }
}
