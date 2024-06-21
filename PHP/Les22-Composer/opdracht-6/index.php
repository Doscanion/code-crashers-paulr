<?php
require_once 'vendor/autoload.php';

use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mime\Email;

//Outlook
$dsn = 'smtp://notreal@outlook.com:password2@smtp.office365.com:587';
$transport = Transport::fromDsn($dsn);
$mailer = new Mailer($transport);

$text = '';
$text .= '<html><body style="background-color:rgb(173, 216, 230); font-family:Calibri; font-size:20px";>';
$text .= '<h1 style="color:rgb(0, 100, 0); text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Lorem ipsum</h1>';
$text .= '<p style="color:rgb(0, 0, 139);">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';
$text .= '<a style="color:rgb(0, 0, 139);" href="https://www.codecrashers.nl">Code Crashers</h1>';
$text .= '<img style="border:5px dotted black;" src="https://www.georgeknottnerus.nl/wp-content/uploads/2017/07/kastanjeboom.jpg" width="500" height="600">';
$text .= '</body></html>';
// $text = 'test';

$email = new Email();
$email->from('notreal@outlook.com');
$email->to('notreal@outlook.com');
$email->subject('Test Symfony Mail');
$email->html($text);

$mailer->send($email);

echo 'Message sent!';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Composer 6</title>
</head>

<body>

</body>

</html>