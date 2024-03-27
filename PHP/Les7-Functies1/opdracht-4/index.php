<?php 
    function printBusinessCard(string $firstName = 'firstname', string $lastName = 'lastname', int $age = 99, string $title = 'the title', string $location = 'The location', string $biography = 'The text fora biography'): string{
        $output = '<article>';
        $output .= '<p>Naam: '.$firstName.' '.$lastName.'</p>';
        $output .= '<p>Leeftijd: '.$age.'</p>';
        $output .= '<p>Titel: '.$title.'</p>';
        $output .= '<p>Locatie: '.$location.'</p>';
        $output .= '<p>Biografie: '.$biography.'</p>';
        $output .= '</article>';
        return $output;
    }
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functies 1 - 4</title>
</head>
<body>
    <?php echo printBusinessCard('Vert', 'Weg', 99, 'De persoon', 'Dichtbijzetting', 'De tekst om mee te testen'); ?>
    <?php echo printBusinessCard(
        firstName: 'Vert',
        lastName: 'Weg',
        location: 'Dichtbijzetting',
        biography: 'De tweede tekst om mee te testen'
    ); ?>
</body>
</html>