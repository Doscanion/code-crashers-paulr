<?php

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        <?php
        if (isset($_COOKIE['favSettings'])) {
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
            if ($favSettings['shadow'] === true) {
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
    <h1>Lorem</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa earum unde nisi corrupti omnis numquam repellat neque, quis vitae fuga? Quas veritatis ullam id similique voluptatibus recusandae ex est aspernatur.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa earum unde nisi corrupti omnis numquam repellat neque, quis vitae fuga? Quas veritatis ullam id similique voluptatibus recusandae ex est aspernatur.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa earum unde nisi corrupti omnis numquam repellat neque, quis vitae fuga? Quas veritatis ullam id similique voluptatibus recusandae ex est aspernatur.</p>

    <img src="./pusheen-big-cookie.gif" alt="cookie">
</body>

</html>