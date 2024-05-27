<?php
$path = './resources';

function fileCheck($haystack, $needle) {
    return str_ends_with($haystack, $needle);
}

if (is_dir($path)) {
    $handle = opendir($path);

    echo '<ul>';
    while (false !== ($file = readdir($handle))) {
        if ($file !== '.' && $file !== '..') {
            echo '<li>' . $file . '</li>';
        }
    }
    echo '</ul>';
    closedir($handle);
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Objecten 4</title>
</head>

<body>
    <form action="<?php $_SERVER['PHP_SELF'] ?>" method="post">
        <label for="file">File name</label>
        <input type="text" id="file" name="file">
        <input type="submit" value="Submit">
    </form>
    <?php
    if (!empty($_POST)) {
        if (is_dir($path)) {
            $handle = opendir($path);
            $search = preg_quote($_POST['file'], '/');
            $pattern = '/^.*' . $search . '.*$/i';
            $match = 0;
            echo '<ul>';
            while (false !== ($file = readdir($handle))) {
                if ($file !== '.' && $file !== '..') {
                    if (preg_match($pattern, $file)) {
                        echo '<li>' . $file . '</li>';
                        $match++;
                    }
                }
            }
            echo '</ul>';

            closedir($handle);
            if ($match > 0) {
                echo '<p>' . $match . ' match(es) found.' . '</p>';
            } else {
                echo '<p>no matches were found</p>';
            }
        }
    }

    if (is_dir($path)) {
        $handle = opendir($path);
        while (false !== ($file = readdir($handle))) {
            if ($file !== '.' && $file !== '..') {
                if (fileCheck($file, 'jpg') || fileCheck($file, 'png')) {
                    echo '<img src="' . $path . '/' . $file . '" style="width: 640px;">';
                } elseif (fileCheck($file, 'mp3')) {
                    echo '<audio controls muted> <source src="' . $path . '/' . $file . '" type="audio/mp3"></audio>';
                } elseif (fileCheck($file, 'mp4')) {
                    echo '<video controls muted> <source src="' . $path . '/' . $file . '" type="video/mp4"></video>';
                } elseif (fileCheck($file, 'html')) {
                    echo '<iframe src="' . $path . '/' . $file . '"></iframe>';
                }
            }
        }
    }

    ?>
</body>

</html>