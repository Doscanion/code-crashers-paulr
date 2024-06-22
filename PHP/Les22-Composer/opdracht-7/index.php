<?php
require_once 'vendor/autoload.php';

use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mime\Email;

if (!empty($_POST)) {
    //Outlook-Hotmail
    $dsn = 'smtp://notreal@outlook.com:password2@smtp.office365.com:587';
    $transport = Transport::fromDsn($dsn);
    $mailer = new Mailer($transport);

    $name = $emailsender = $selectq = $text = "";
    $errors = array();

    $emailpattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";

    if (!empty($_POST['name'])) {
        if (preg_match("/^[A-Za-z]+$/", $_POST['name'])) {
            $name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
        } else {
            $errors['name'] = 'Invalid name. Only letters are allowed.';
        }
    } else {
        $errors['name'] = 'Name is required.';
    }
    if (!empty($_POST['email'])) {
        if (preg_match($emailpattern, $_POST['email'])) {
            $emailsender = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
        } else {
            $errors['email'] = 'Invalid email address.';
        }
    } else {
        $errors['email'] = 'Email is required.';
    }

    if (!empty($_POST['selectq'])) {
        $selectq = htmlspecialchars($_POST['selectq'], ENT_QUOTES, 'UTF-8');
    } else {
        $errors['selectq'] = 'Please select an option.';
    }

    if (!empty($_POST['text'])) {
        $textarea  = htmlspecialchars($_POST['text'], ENT_QUOTES, 'UTF-8');
    } else {
        $errors['text'] = 'Text is required.';
    }

    if (empty($_POST['conditions'])) {
        $errors['conditions'] = 'You must agree to the terms and conditions.';
    }

    if (empty($errors)) {
        $text = '';
        $text .= '<h1>' . $selectq . '</h1>';
        $text .= '<p>' . $text . '</p>';
        $text .= '</body></html>';

        $email = new Email();
        $email->from($emailsender, $name);
        $email->to('notreal@outlook.com');
        $email->subject($selectq);
        $email->html($text);

        $mailer->send($email);
    }
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Composer 7</title>
</head>

<body>
    <form action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
        </div>
        <div>
            <label for="selectq">Reason</label>
            <select name="selectq" id="selectq">
                <option value="question">I have a question</option>
                <option value="complain">I have a complain</option>
                <option value="remark">I have a remark</option>
            </select>
        </div>
        <div>
            <label for="text">Message</label>
            <textarea id="text" name="text" rows="2" cols="30"></textarea>
        </div>
        <div>
            <input type="checkbox" id="conditions" name="conditions" value="conditions">
            <label for="conditions">I agree to the terms and conditions</label>
        </div>
        <div>
            <input type="submit" value="Submit" id="submit" name="submit">
        </div>
    </form>
    <?php
    if (!empty($errors)) {
        foreach ($errors as $error) {
            echo "<p>$error</p>";
        }
    }

    ?>
</body>

</html>