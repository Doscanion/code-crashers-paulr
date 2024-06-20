<?php
require_once 'vendor/autoload.php';

$faker = Faker\Factory::create();

$fakepeople = '<table>';
for ($i = 0; $i < 12; $i++) {
    $fakepeople .= '<tr>';
    $fakepeople .= '<td>' . $faker->name() . '</td>';
    $fakepeople .= '<td>' . $faker->company() . '</td>';
    $fakepeople .= '<td>' . $faker->jobTitle() . '</td>';
    $fakepeople .= '</tr>';
}
$fakepeople .= '</table>';

$randomText = '<section>';
for ($i = 0; $i < 6; $i++) {
    $randomText .= '<article style="color:' . $faker->colorName() . '">' . $faker->text(500) . '</article>';
}
$randomText .= '</section>';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Composer 1</title>
</head>

<body>
    <?php echo $fakepeople ?>
    <?php echo $randomText ?>
</body>

</html>