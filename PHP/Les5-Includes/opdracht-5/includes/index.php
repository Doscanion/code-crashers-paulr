<?php
$language = 'fr';
$color = 'khaki';


$languageCheck = function ($language) {
    if ($language === 'nl') {
        echo <<<HTML
        <p>Deze website is super mooi.</p>
        HTML;
    } elseif ($language === 'fr') {
        echo <<<HTML
        <p>Ce site est très beau .</p>
        HTML;
    }
};
