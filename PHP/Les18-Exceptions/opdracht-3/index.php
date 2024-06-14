<?php

function generateHash(int $length) {
    try {
        $characters = [
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'abcdefghijklmnopqrstuvwxyz',
            '0123456789',
            '!@#$%&*?'
        ];
        $randomCharacters = '';
        for ($i = 0; $i < $length; $i++) {
            $rnumber = mt_rand(0, 3);
            $randomCharacters .= $characters[$rnumber][mt_rand(0, strlen($characters[$rnumber]) - 1)];
        }

        if (!preg_match('/[A-Z]/', $randomCharacters)) {
            throw new Exception('Does not contain any of these character \'ABCDEFGHIJKLMNOPQRSTUVWXYZ\'');
        } elseif (!preg_match('/[a-z]/', $randomCharacters)) {
            throw new Exception('Does not contain any of these character \'abcdefghijklmnopqrstuvwxyz\'');
        } elseif (!preg_match('/[0-9]/', $randomCharacters)) {
            throw new Exception('Does not contain any of these character \'0123456789\'');
        } elseif (!preg_match('/[!@#$%&*?]/', $randomCharacters)) {
            throw new Exception('Does not contain any of these character \'!@#$%&*?\'');
        }

        return $randomCharacters;
    } catch (Exception $e) {
        echo '<p>Message: ' . $e->getMessage() . '</p>';
        echo '<p>File: ' . $e->getFile() . '</p>';
        echo '<p>Line: ' . $e->getLine() . '</p>';
    } finally {
        $file = 'hashes.txt';
        if (!file_exists($file)) {
            touch($file);
        }
        // $handle = fopen($file, 'a');
        // fwrite($handle, $randomCharacters);
        // fclose($handle);
        file_put_contents($file, $randomCharacters . "\n", FILE_APPEND);
    }
}



?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exception 3</title>
</head>

<body>
    <?php echo generateHash(10) ?>
</body>

</html>