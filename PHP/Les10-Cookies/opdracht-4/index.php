<?php
if (!empty($_GET)) {
    $error = [];
    if (!empty($_GET['font-size']) && !empty($_GET['text-color']) && !empty($_GET['background-color']) && isset($_GET['font-family']) && !empty($_GET['shadow'])) {
        if (!is_numeric($_GET['font-size'])) {
            $error[] = 'The font-size was not entered correctly.';
        }
        if (!preg_match('/^#[0-9A-Fa-f]{6}$/', $_GET['text-color'])) {
            $error[] = 'The text color was not entered correctly.';
        }
        if (!preg_match('/^#[0-9A-Fa-f]{6}$/', $_GET['background-color'])) {
            $error[] = 'The background color was not entered correctly.';
        }
        if (!in_array($_GET['font-family'], ['option-1', 'option-2', 'option-3'])) {
            $error[] = 'The font family was not entered correctly.';
        }
        if (empty($error)) {
            setcookie('favSettings',  json_encode($_GET), time() + (3 * 60 * 60));
        }
    } else {
        $error[] = 'Some field(s) were left empty.';
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        <?php

        if (!empty($_GET) && empty($error)) {
            $favSettings = $_GET;
            if ($_GET['font-family']  === 'option-1') {
                $fontFam = 'Arial';
            } else if ($_GET['font-family']  === 'option-2') {
                $fontFam = 'Times new roman';
            } else {
                $fontFam = 'Courier new';
            }
        } elseif (isset($_COOKIE['favSettings'])) {
            $favSettings = json_decode($_COOKIE['favSettings'], true);
            if ($favSettings['font-family']  === 'option-1') {
                $fontFam = 'Arial';
            } else if ($favSettings['font-family']  === 'option-2') {
                $fontFam = 'Times new roman';
            } else {
                $fontFam = 'Courier new';
            }
        } else {
            $favSettings = [
                'text-color' => 'black',
                'background-color' => 'white',
                'font-size' => 12,
                'font-family' => 'Arial',
                'shadow' => false
            ];
        }
        ?>body {
            font-family: <?php echo $fontFam ?>;
            color: <?php echo $favSettings['text-color'] ?>;
            background-color: <?php echo $favSettings['background-color'] ?>;

            <?php
            if ($favSettings['shadow'] === 'on') {
                echo 'img{box-shadow: 0px 0px 10px;}' . $favSettings['text-color'];
            }
            ?>
        }

        p {
            font-size: <?php echo $favSettings['font-size']; ?>px;
        }
    </style>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookies 4</title>
</head>

<body>

    <form action="<?= $_SERVER['PHP_SELF'] ?>" method="get">
        <div><label for="font-size">Font size</label><input type="number" name="font-size" id="font-size" min="12" max="20"></div>
        <div><label for="text-color">Text color</label><input type="color" name="text-color" id="text-color"></div>
        <div><label for="background-color">Background color</label><input type="color" name="background-color" id="background-color"></div>
        <div><label for="font-family">Font family</label>
            <select name="font-family" id="font-family">
                <option value="option-1">Arial</option>
                <option value="option-2">Times new roman</option>
                <option value="option-3">Courier new</option>
            </select>
        </div>
        <input type="hidden" name="shadow" value="0">
        <div><input type="checkbox" name="shadow" id="shadow"><label for="shadow">Image shadow</label></div>
        <input type="submit" value="submit">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "GET" && !empty($error)) {
        foreach ($error as $key => $value) {
            echo '<p>' . $value . '</p>';
        }
    }
    ?>
    <h1>Lorem</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa earum unde nisi corrupti omnis numquam repellat neque, quis vitae fuga? Quas veritatis ullam id similique voluptatibus recusandae ex est aspernatur.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa earum unde nisi corrupti omnis numquam repellat neque, quis vitae fuga? Quas veritatis ullam id similique voluptatibus recusandae ex est aspernatur.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa earum unde nisi corrupti omnis numquam repellat neque, quis vitae fuga? Quas veritatis ullam id similique voluptatibus recusandae ex est aspernatur.</p>

    <img src="./pusheen-cookie.png" alt="cookie">

</body>

</html>