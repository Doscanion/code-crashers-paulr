<?php
$subject = "MySQL";
// switch ($subject) {
//     case 'HTML':
//         echo ('HTML is the standard markup language for Web pages.');
//         break;
//     case 'CSS':
//         echo ('CSS is a computer language for laying out and structuring web pages (HTML or XML).');
//         break;
//     case 'PHP':
//         echo ('PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.');
//         break;
//     case 'MySQL':
//     case 'SEO':
//     case 'JavaScript':
//         echo ('In aanbouw…');
//         break;
//     case 'React':
//     case 'Laravel':
//         echo ('Gepland voor later…');
//         break;
//     default:
//         echo 'None';
//         break;
// }

$resultSubject = match ($subject) {
    'HTML' => 'HTML is the standard markup language for Web pages.',
    'CSS' => 'CSS is a computer language for laying out and structuring web pages (HTML or XML).',
    'PHP' => 'PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.',
    'MySQL', 'SEO', 'JavaScript' => 'In aanbouw…',
    'React', 'Laravel' => 'Gepland voor later…',
    default => 'None'
};

echo $resultSubject;
