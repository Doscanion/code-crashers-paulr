<?php
require_once './classes/Validator.php';

// 'https://github.com/Doscanion/code-crashers-paulr'
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Objecten 5</title>
</head>

<body>
    <?php
    echo Validator::emailMessage(Validator::validateEmail('test123#test,com'));
    echo '<br>';
    echo Validator::emailMessage(Validator::validateEmail('test123@test.com'));
    echo '<br>';
    echo '<br>';
    echo Validator::linkedInMessage(Validator::validateLinkedIn('https://www.linkedin.com/in/test123'));
    echo '<br>';
    echo Validator::linkedInMessage(Validator::validateLinkedIn('https;//www.linkedin,com/in/test123'));
    echo '<br>';
    echo '<br>';
    echo Validator::githubrepoMessage(Validator::validateGithubRepo('https://github.com/CC/code-crashers'));
    echo '<br>';
    echo Validator::githubrepoMessage(Validator::validateGithubRepo('https;//github,com/CC/code-crashers'));
    ?>
</body>

</html>