<?php

$xmlFileContent = file_get_contents('./fleetwoodmac.xml');
if ($xmlFileContent !== false) {
    $xmlContent = htmlspecialchars($xmlFileContent, ENT_QUOTES, 'UTF-8');
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XML 1</title>
</head>

<body>

    <pre><code><?php echo !empty($xmlContent) ? $xmlContent : '' ?></code></pre>
</body>

</html>