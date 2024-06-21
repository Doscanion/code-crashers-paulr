<?php
require_once 'vendor/autoload.php';

use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mime\Email;

use Faker\Factory;

$faker = Factory::create();

$fakepara = '';
for ($i = 0; $i < 12; $i++) {
    $fakepara .= '<p>';
    $fakepara .= $faker->text(400);
    $fakepara .= '</p>';
}

//Outlook-Hotmail
$dsn = 'smtp://notreal@outlook.com:notreal@smtp.office365.com:587';
$transport = Transport::fromDsn($dsn);
$mailer = new Mailer($transport);


$email = new Email();
$email->from('notreal@outlook.com');
$email->to('notreal@outlook.com', 'notreal2@outlook.com');
$email->subject('Test Symfony Mail');
$email->text('Text Symfony mail');
$email->html($fakepara);

$mailer->send($email);

echo 'Message sent!';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Composer 5</title>
</head>

<body>

</body>

</html>