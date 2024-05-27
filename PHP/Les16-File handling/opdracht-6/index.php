<?php
require_once './classes/FileManager.php';

if (!empty($_FILES)) {
    $upload = new FileManager;
    $upload->uploadFile($_FILES);
}

if (!empty($_POST['delete'])) {
    $delete = new FileManager;
    $delete->deleteFile($_POST['delete']);
}
// $fileArray = [
//     "bestand" => [
//         "name" => "Jellyfish.jpg",
//         "type" => "image/jpeg",
//         "tmp_name" => "C:\\xampp\\tmp\\php29AF.tmp",
//         "error" => 0,
//         "size" => 775702
//     ]
// ];



function fileCheck($haystack, $needle) {
    return str_ends_with($haystack, $needle);
}
function fileDisplay() {
    $path = './uploads';
    if (is_dir($path)) {
        if (glob($path . '/*')) {
            $handle = opendir($path);
            while (false !== ($file = readdir($handle))) {
                if ($file !== '.' && $file !== '..') {
                    if (fileCheck($file, 'jpg') || fileCheck($file, 'png')) {
                        echo '<img src="' . $path . '/' . $file . '" style="width: 600px; height= 400px;">';
                        echo '<form action="' . $_SERVER['PHP_SELF'] . '" method="post">';
                        echo '<input type="hidden" name="delete" value="' . $file . '">';
                        echo '<button type="submit"><span class="material-icons">delete</span></button>';
                        echo '</form>';
                    }
                }
            }
        } else {
            echo 'No files are currently available in the directory';
        }
    } else {
        echo 'The map does not exist';
    }
}



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>File Handling 5</title>
</head>

<body>
    <form action="<?php $_SERVER["PHP_SELF"] ?>" method="post" enctype="multipart/form-data">
        <label for="file">Upload file</label>
        <input type="file" name="file" id="file">
        <input type="submit" value="Submit">
    </form>
    <?php
    fileDisplay();
    ?>
</body>

</html>