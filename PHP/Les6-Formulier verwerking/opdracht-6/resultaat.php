<?php
if (isset($_POST['submit'])) {
    $title = isset($_POST['title']) && !empty($_POST['title']) ? htmlspecialchars($_POST['title']) : 'Beste titel ooit';

    $summary = isset($_POST['summary']) && !empty($_POST['summary']) ? htmlspecialchars($_POST['summary']) : 'gebruiker gemaakte content';

    $heading = isset($_POST['heading']) && !empty($_POST['heading']) ? htmlspecialchars($_POST['heading']) : 'Beste heading ooit';

    $paragraph = isset($_POST['paragraph']) && !empty($_POST['paragraph']) ? htmlspecialchars($_POST['paragraph']) : 'De beste tekst ooit gemaakt';

    $picture = isset($_POST['picture']) && !empty($_POST['picture']) ? htmlspecialchars($_POST['picture']) : './img/heresy.png';


    //Style
    $bcolor = isset($_POST['bcolor']) && !empty($_POST['bcolor']) ? htmlspecialchars($_POST['bcolor']) : 'lightgray';

    $tcolor = isset($_POST['tcolor']) && !empty($_POST['tcolor']) ? htmlspecialchars($_POST['tcolor']) : 'black';

    $fontsize = isset($_POST['fontsize']) && !empty($_POST['fontsize']) ? htmlspecialchars($_POST['fontsize']) : 14;

    $fontfamily = isset($_POST['fontfamily']) && !empty($_POST['fontfamily']) ? htmlspecialchars($_POST['fontfamily']) : 'Times New Roman';

    $border = isset($_POST['border']) && !empty($_POST['border']) ? '2px solid black' : 0;
} else {
    header('Location: /index.php');
}
?>

<!DOCTYPE html>
<html lang="en">
<style>
    body {
        background-color: <?php echo $bcolor ?>;
    }

    h1,
    p {
        color: <?php echo $tcolor ?>;
    }

    p {
        font-size: <? echo $fontsize ?>;
    }

    img {
        border: <?php echo $border ?>;
    }
</style>

<head>
    <meta charset="UTF-8">
    <meta name="description" content="<? echo $summary ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title ?></title>
</head>

<body>
    <h1><?php echo $heading ?></h1>
    <p><?php echo $paragraph ?></p>
    <img src="<?php echo $picture ?>" alt="gekozen afbeelding">
</body>

</html>