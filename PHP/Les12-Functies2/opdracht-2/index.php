<?php
$menuArray = array(
    'Home' => array(
        'text' => 'Home',
        'url' => 'https://www.mijnwebshop.com',
        'target' => '_self'
    ),
    'Contact' => array(
        'text' => 'Contact',
        'url' => 'https://www.mijnwebshop.com/contact.php',
        'target' => '_self'
    ),
    'About' => array(
        'text' => 'About',
        'url' => array(
            'Info' => array(
                'text' => 'Info',
                'url' => 'https://www.mijnwebshop.com/info.php',
                'target' => '_self'
            ),
            'History' => array(
                'text' => 'History',
                'url' => 'https://www.mijnwebshop.com/history.php',
                'target' => '_self'
            )
        ),
        'target' => '_self'
    ),
    'Services' => array(
        'text' => 'Services',
        'url' => 'https://www.mijnwebshop.com/services.php',
        'target' => '_self'
    ),
    'More' => array(
        'text' => 'More',
        'url' => array(
            'Terms' => array(
                'text' => 'Terms',
                'url' => 'https://www.mijnwebshop.com/terms.php',
                'target' => '_self'
            ),
            'Privacy' => array(
                'text' => 'Privacy',
                'url' => 'https://www.mijnwebshop.com/privacy.php',
                'target' => '_self'
            ),
            'Cookies' => array(
                'text' => 'Cookies',
                'url' => 'https://www.mijnwebshop.com/cookies.php',
                'target' => '_self'
            )
        ),
        'target' => '_self'
    )
);

function createNav(array $nav) {
    echo '<ul>';

    foreach ($nav as $key => $value) {
        echo '<li>';
        if (is_array($value['url'])) {
            echo '<a href="#" target="' . $value['target'] . '"> ' . $value['text'] . '</a>';
            createNav($value['url']);
        } else {
            echo '<a href="' . $value['url'] . '" target="' . $value['target'] . '"> ' . $value['text'] . '</a>';
        }
        echo '</li>';
    }


    echo '</ul>';
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheet.css">
    <title>Functies-2 2</title>
</head>

<body>
    <nav class="menu">
        <?php createNav($menuArray) ?>
    </nav>
</body>

</html>