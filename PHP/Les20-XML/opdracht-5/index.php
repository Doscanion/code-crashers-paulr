<?php
$lang = 'English';
$langarray = ['English', 'French', 'German', 'Italian', 'Spanish'];
if (isset($_GET['lang']) && !empty($_GET['lang'])) {
    $langExist = false;
    foreach ($langarray as $key => $value) {
        if ($_GET['lang'] === $value) {
            $langExist = true;
            $lang = $_GET['lang'];
        }
    }
    if (!$langExist) {
        $lang = 'English';
    }
}


$crusader = '';
$keyLoopText = 0;
$xml = new SimpleXMLElement('crusader.xml', 0, true);
foreach ($xml->children() as $textkey => $text) {
    // echo "Text Key: $textkey <br>";
    foreach ($text->children() as $languagekey => $language) {
        // echo "Language Key: $languagekey <br>";
        if ($language->getName() == $lang) {
            if ($keyLoopText === 0) {
                $crusader .= '<h1>' . $language . '</h1>';
            } elseif ($keyLoopText === 1) {
                $crusader .= '<p><b>' . $language . '</b></p>';
            } elseif ($keyLoopText === 2) {
                $crusader .= '<p>' . $language . '</p>';
            }
        }
    }
    $keyLoopText++;
}

// foreach ($xml->children() as $textkey => $text) {
//     if ($textkey === 0) {
//         echo '0';
//         foreach ($text->children() as $languagekey => $language) {
//             if ($language->getName() == $lang) {
//                 $crusader .= '<h1>' . $language . '</h1>';
//             }
//         }
//     }
//     if ($textkey === 1) {
//         foreach ($text->children() as $languagekey => $language) {
//             if ($language->getName() == $lang) {
//                 $crusader .= '<p><b>' . $language . '</b></p>';
//             }
//         }
//     }
//     if ($textkey === 2) {
//         foreach ($text->children() as $languagekey => $language) {
//             if ($language->getName() == $lang) {
//                 $crusader .= '<p>' . $language . '</p>';
//             }
//         }
//     }
// }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XML 5</title>

    <style>
        section {
            display: flex;
        }

        .flag a {
            display: block;
            width: 100%;
            height: 100%;
            text-decoration: none;
        }

        .flag-en,
        .flag-de,
        .flag-sp,
        .flag-fr,
        .flag-it {
            background-image: url('./flag-sprites.png');
            background-repeat: no-repeat;
            height: 34px;
            width: 48px;

        }

        .flag-en {
            background-position: -576px -200px;
        }

        .flag-de {
            background-position: -336px -152px;
        }

        .flag-sp {
            background-position: -96px -200px;
        }

        .flag-fr {
            background-position: -480px -200px;
        }

        .flag-it {
            background-position: -480px -296px;
        }
    </style>
</head>

<body>
    <section>
        <div class="flag flag-en"><a href="index.php?lang=English"></a></div>
        <div class="flag flag-de"><a href="index.php?lang=German"></a></div>
        <div class="flag flag-sp"><a href="index.php?lang=Spanish"></a></div>
        <div class="flag flag-fr"><a href="index.php?lang=French"></a></div>
        <div class="flag flag-it"><a href="index.php?lang=Italian"></a></div>
    </section>


    <?php echo $crusader ?>
</body>

</html>