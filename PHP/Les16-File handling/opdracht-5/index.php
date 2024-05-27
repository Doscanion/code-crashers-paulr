<?php
require_once './classes/FileManager.php';

if (!empty($_FILES)) {
    $upload = new FileManager;
    $upload->uploadFile($_FILES);
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

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Handling 5</title>
</head>

<body>
    <form action="<?php $_SERVER["PHP_SELF"] ?>" method="post" enctype="multipart/form-data">
        <label for="file">Upload file</label>
        <input type="file" name="file" id="file">
        <input type="submit" value="Submit">
    </form>
</body>

</html>