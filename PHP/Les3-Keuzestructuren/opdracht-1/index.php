<?php
$rand = rand(0, 10);
echo ($rand);

if ($rand > 5) {
    echo <<<HTML
    <p>De waarde is hoger dan 5</p>
    HTML;
} elseif ($rand < 5) {
    echo <<<HTML
    <p>De waarde is lager dan 5</p>
    HTML;
} elseif ($rand == 5) {
    echo <<<HTML
    <p>De waarde is gelijk aan 5</p>
    HTML;
}
